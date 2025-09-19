const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const { startServer, stopServer } = require('./serve-static')

const DIST_DIR = path.resolve(__dirname, '../dist')
const PDF_OUTPUT_DIR = path.resolve(__dirname, '../src/static-resources')

// Конфигурация для генерации PDF
const PDF_CONFIG = {
  format: 'A4',
  margin: {
    top: '0.5in',
    right: '0.5in',
    bottom: '0.5in',
    left: '0.5in',
  },
  printBackground: true,
  preferCSSPageSize: true,
}

const BROWSER_CONFIG = {
  headless: 'new',
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=VizDisplayCompositor',
  ],
}

const VIEWPORT_CONFIG = {
  width: 1200,
  height: 1600,
  deviceScaleFactor: 2,
}

// Общие функции для генерации PDF

/**
 * Проверяет существование билда
 */
function checkBuildExists() {
  if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error('❌ Build not found! Please run "npm run build" first.')
    process.exit(1)
  }
}

/**
 * Создает директорию для PDF файлов
 */
function ensurePdfDirectory() {
  fs.mkdirSync(PDF_OUTPUT_DIR, { recursive: true })
}

/**
 * Настраивает браузер и страницу
 */
async function setupBrowser() {
  console.log('🌐 Launching browser...')
  const browser = await puppeteer.launch(BROWSER_CONFIG)
  const page = await browser.newPage()

  // Устанавливаем viewport для корректного рендеринга
  await page.setViewport(VIEWPORT_CONFIG)

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

  return { browser, page }
}

/**
 * Загружает страницу и устанавливает язык
 */
async function loadPageWithLanguage(page, language) {
  const url = `http://localhost:3000/resume-pdf?lang=${language}`
  console.log(`📄 Loading resume PDF page (${language})...`)

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  })

  // Ждем загрузки и применения языка
  await new Promise(resolve => setTimeout(resolve, 3000))

  // Проверяем, что язык применился
  const pageText = await page.evaluate(() => {
    return document.body.innerText.toLowerCase()
  })

  // Отладочная информация
  console.log(`📝 Page text preview: ${pageText.substring(0, 200)}...`)

  // Проверяем наличие характерных слов для каждого языка
  const isEnglish = pageText.includes('professional summary') || pageText.includes('work experience')
  const isRussian = pageText.includes('профессиональное резюме') || pageText.includes('опыт работы')

  console.log(`🔍 Language detection: English=${isEnglish}, Russian=${isRussian}`)

  if (language === 'en' && isEnglish && !isRussian) {
    console.log(`✅ English language applied successfully`)
  } else if (language === 'ru' && isRussian && !isEnglish) {
    console.log(`✅ Russian language applied successfully`)
  } else {
    console.warn(`⚠️ Language may not have been applied correctly for ${language}`)
  }
}

/**
 * Применяет PDF тему и стили
 */
async function applyPdfTheme(page) {
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
  await new Promise(resolve => setTimeout(resolve, 2000))
}

/**
 * Проверяет корректность загрузки страницы
 */
async function validatePageLoad(page, language) {
  const pageTitle = await page.title()
  console.log(`📄 Page title (${language}): ${pageTitle}`)

  const pageContent = await page.evaluate(() => document.body.innerHTML.length)
  console.log(`📄 Page content length (${language}): ${pageContent} characters`)

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

  console.log(`📄 Final check before PDF generation (${language}):`, finalCheck)
  return finalCheck
}

/**
 * Генерирует PDF для конкретного языка
 */
async function generatePdfForLanguage(language) {
  const pdfOutput = path.join(PDF_OUTPUT_DIR, `resume-${language}.pdf`)

  console.log(`📋 Generating PDF for ${language}...`)

  if (fs.existsSync(pdfOutput)) {
    fs.unlinkSync(pdfOutput)
  }

  const { browser, page } = await setupBrowser()

  try {
    await loadPageWithLanguage(page, language)
    await applyPdfTheme(page)
    await validatePageLoad(page, language)

    await page.pdf({
      path: pdfOutput,
      ...PDF_CONFIG,
    })

    console.log(`✅ PDF generated successfully for ${language}: ${pdfOutput}`)
    return pdfOutput
  } finally {
    await browser.close()
  }
}

/**
 * Основная функция генерации PDF
 */
async function generatePDF(languages = ['ru']) {
  console.log('🚀 Starting PDF generation...')

  checkBuildExists()
  ensurePdfDirectory()

  let serverStarted = false

  try {
    // Запускаем статический сервер
    console.log('📡 Starting static server...')
    await startServer()
    serverStarted = true

    const generatedFiles = []

    // Генерируем PDF для каждого языка
    for (const language of languages) {
      const pdfPath = await generatePdfForLanguage(language)
      generatedFiles.push(pdfPath)
    }

    console.log('📋 PDFs will be copied to dist/ during webpack build')
    return generatedFiles
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
    process.exit(1)
  } finally {
    // Останавливаем сервер
    if (serverStarted) {
      await stopServer()
    }
  }
}

// Экспортируем функции для использования в других скриптах
module.exports = {
  generatePDF,
  generatePdfForLanguage,
  PDF_CONFIG,
  BROWSER_CONFIG,
  VIEWPORT_CONFIG,
}

// Запускаем генерацию для обоих языков
if (require.main === module) {
  const languages = process.argv.includes('--en-only') ? ['en'] : process.argv.includes('--ru-only') ? ['ru'] : ['ru', 'en']

  generatePDF(languages).catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
}
