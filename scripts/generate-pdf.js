const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const { startServer, stopServer } = require('./serve-static')

const DIST_DIR = path.resolve(__dirname, '../dist')
const PDF_OUTPUT = path.resolve(__dirname, '../src/static-resources/resume.pdf')

async function generatePDF() {
  console.log('🚀 Starting PDF generation...')

  // Проверяем, что билд существует
  if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error('❌ Build not found! Please run "npm run build" first.')
    process.exit(1)
  }

  // Создаем директорию для PDF если её нет
  fs.mkdirSync(path.dirname(PDF_OUTPUT), { recursive: true })

  let browser

  try {
    // Запускаем статический сервер
    console.log('📡 Starting static server...')
    await startServer()

    // Запускаем браузер
    console.log('🌐 Launching browser...')
    browser = await puppeteer.launch({
      headless: 'new', // Возвращаем headless режим
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
      ],
    })

    const page = await browser.newPage()

    // Устанавливаем viewport для корректного рендеринга
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    })

    console.log('📄 Loading resume PDF page...')

    // Настраиваем обработчик ошибок консоли
    page.on('console', msg => {
      const type = msg.type()
      if (type === 'error' || type === 'warning') {
        console.log(`🐛 Browser ${type}:`, msg.text())
      }
    })

    page.on('pageerror', error => {
      console.log('🚨 Page error:', error.message)
    })

    // Переходим на PDF версию страницы резюме
    await page.goto('http://localhost:3000/resume-pdf', {
      waitUntil: 'networkidle0',
      timeout: 30000,
    })

    // Отладка: проверяем, что страница загрузилась
    const pageTitle = await page.title()
    console.log(`📄 Page title: ${pageTitle}`)

    const pageContent = await page.evaluate(() => document.body.innerHTML.length)
    console.log(`📄 Page content length: ${pageContent} characters`)

    // Отладка: проверяем, есть ли элементы на странице
    const resumeElements = await page.evaluate(() => {
      const containers = document.querySelectorAll('.chakra-container, [data-theme]')
      const headings = document.querySelectorAll('h1, h2, h3')
      const text = document.body.innerText.substring(0, 200)
      const reactRoot = document.querySelector('#app')
      const hasReactError = document.querySelector('.react-error-boundary')

      // Проверяем загрузку CSS
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style')
      const hasChakraClasses = document.querySelectorAll('[class*="chakra"], [class*="css-"]').length

      return {
        containers: containers.length,
        headings: headings.length,
        textPreview: text,
        reactRootExists: !!reactRoot,
        reactRootContent: reactRoot ? reactRoot.innerHTML.substring(0, 100) : 'No root',
        hasReactError: !!hasReactError,
        documentReadyState: document.readyState,
        stylesheets: stylesheets.length,
        hasChakraClasses: hasChakraClasses,
      }
    })

    console.log('📄 Page analysis:', resumeElements)

    // Устанавливаем светлую тему и убираем только лишние пустые блоки
    await page.evaluate(() => {
      // Устанавливаем pdf тему
      const body = document.body
      body.setAttribute('data-theme', 'pdf')

      // Также устанавливаем атрибут на html элементе если есть
      const html = document.documentElement
      html.setAttribute('data-theme', 'pdf')
      html.classList.add('light')
      html.classList.remove('dark')
    })

    // Ждем загрузки стилей
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Дополнительное ожидание для применения стилей
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Проверяем стили всех контейнеров
    const styleCheck = await page.evaluate(() => {
      const containers = document.querySelectorAll('.chakra-container')

      return Array.from(containers).map((container, index) => {
        const styles = window.getComputedStyle(container)
        return {
          index,
          className: container.className,
          paddingLeft: styles.paddingLeft,
          maxWidth: styles.maxWidth,
          marginLeft: styles.marginLeft,
          backgroundColor: styles.backgroundColor,
          hasContent: container.innerText.length > 100,
          isOuterContainer: container.getAttribute('style') === null && styles.maxWidth !== 'none',
        }
      })
    })

    console.log('🎨 Applied styles:', styleCheck)

    // Финальная проверка перед генерацией PDF
    const finalCheck = await page.evaluate(() => {
      const text = document.body.innerText
      const elements = document.querySelectorAll('*').length

      return {
        hasText: text.length > 100,
        textLength: text.length,
        elementCount: elements,
        theme: document.documentElement.getAttribute('data-theme'),
      }
    })

    console.log('📄 Final check before PDF generation:', finalCheck)

    console.log('📋 Generating PDF...')

    if (fs.existsSync(PDF_OUTPUT)) {
      fs.unlinkSync(PDF_OUTPUT)
    }

    // Генерируем PDF
    await page.pdf({
      path: PDF_OUTPUT,
      format: 'A4',
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      printBackground: true,
      preferCSSPageSize: true,
    })

    console.log(`✅ PDF generated successfully: ${PDF_OUTPUT}`)
    console.log('📋 PDF will be copied to dist/ during webpack build')
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
    process.exit(1)
  } finally {
    // Закрываем браузер
    if (browser) {
      await browser.close()
    }

    // Останавливаем сервер
    await stopServer()
  }
}

// Запускаем генерацию
generatePDF().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
