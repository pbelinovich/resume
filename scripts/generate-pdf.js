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

const CHROME_PATHS = {
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    process.env.PUPPETEER_EXECUTABLE_PATH,
  ].filter(Boolean),
  linux: ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', process.env.PUPPETEER_EXECUTABLE_PATH].filter(
    Boolean
  ),
  win32: [process.env.PUPPETEER_EXECUTABLE_PATH, 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'].filter(Boolean),
}

function getChromeExecutablePath() {
  const candidates = CHROME_PATHS[process.platform] || []
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p
  }
  return undefined
}

const BROWSER_CONFIG = {
  headless: 'new',
  executablePath: getChromeExecutablePath(),
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

const PAGE_CONFIGS = [
  { path: 'resume-pdf', outputName: 'resume', languages: ['ru', 'en'] },
  { path: 'jtc-pdf', outputName: 'jtc', languages: ['ru', 'en'] },
  { path: 'recifra-pdf', outputName: 'recifra', languages: ['ru', 'en'] },
]

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
  const config = { ...BROWSER_CONFIG }
  if (!config.executablePath) {
    console.log('💡 Chrome not found in standard paths. Run: npx puppeteer browsers install chrome')
  }
  let browser
  try {
    browser = await puppeteer.launch(config)
  } catch (err) {
    if (err.message && err.message.includes('Could not find Chrome')) {
      console.error('❌ Install Chrome for PDF generation: npx puppeteer browsers install chrome')
      console.error('   Or install Google Chrome / Chromium in Applications (macOS).')
    }
    throw err
  }
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
async function loadPageWithLanguage(page, pagePath, language) {
  const url = `http://localhost:3000/${pagePath}?lang=${language}`
  console.log(`📄 Loading ${pagePath} (${language})...`)

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  })

  await new Promise(resolve => setTimeout(resolve, 3000))

  const pageText = await page.evaluate(() => document.body.innerText.toLowerCase())
  console.log(`📝 Page text preview: ${pageText.substring(0, 200)}...`)

  const isEnglish =
    pageText.includes('professional summary') || pageText.includes('work experience') || pageText.includes('expression editor')
  const isRussian =
    pageText.includes('профессиональное резюме') || pageText.includes('опыт работы') || pageText.includes('редактор выражений')

  if (language === 'en' && isEnglish && !isRussian) {
    console.log(`✅ English applied for ${pagePath}`)
  } else if (language === 'ru' && isRussian && !isEnglish) {
    console.log(`✅ Russian applied for ${pagePath}`)
  } else {
    console.warn(`⚠️ Language may not match for ${pagePath} (${language})`)
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
 * Генерирует PDF для страницы и языка
 */
async function generatePdfForPage(pagePath, outputName, language) {
  const pdfOutput = path.join(PDF_OUTPUT_DIR, `${outputName}-${language}.pdf`)

  console.log(`📋 Generating ${outputName}-${language}.pdf...`)

  if (fs.existsSync(pdfOutput)) {
    fs.unlinkSync(pdfOutput)
  }

  const { browser, page } = await setupBrowser()

  try {
    await loadPageWithLanguage(page, pagePath, language)
    await applyPdfTheme(page)
    await validatePageLoad(page, language)

    await page.pdf({
      path: pdfOutput,
      ...PDF_CONFIG,
    })

    console.log(`✅ ${outputName}-${language}.pdf: ${pdfOutput}`)
    return pdfOutput
  } finally {
    await browser.close()
  }
}

/**
 * Основная функция генерации PDF
 */
async function generatePDF(languages = ['ru'], pageFilter = null) {
  console.log('🚀 Starting PDF generation...')

  checkBuildExists()
  ensurePdfDirectory()

  const configs = pageFilter != null ? PAGE_CONFIGS.filter(c => c.outputName === pageFilter) : PAGE_CONFIGS

  let serverStarted = false

  try {
    console.log('📡 Starting static server...')
    await startServer()
    serverStarted = true

    const generatedFiles = []

    for (const pageConfig of configs) {
      const pageLangs = pageConfig.languages.filter(l => languages.includes(l))
      for (const language of pageLangs) {
        const pdfPath = await generatePdfForPage(pageConfig.path, pageConfig.outputName, language)
        generatedFiles.push(pdfPath)
      }
    }

    console.log('📋 PDFs will be copied to dist/ during webpack build')
    return generatedFiles
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
    process.exit(1)
  } finally {
    if (serverStarted) {
      await stopServer()
    }
  }
}

// Экспортируем функции для использования в других скриптах
module.exports = {
  generatePDF,
  generatePdfForPage,
  PAGE_CONFIGS,
  PDF_CONFIG,
  BROWSER_CONFIG,
  VIEWPORT_CONFIG,
}

if (require.main === module) {
  const argv = process.argv
  const languages = argv.includes('--en-only') ? ['en'] : argv.includes('--ru-only') ? ['ru'] : ['ru', 'en']
  const pageFilter = argv.includes('--resume-only')
    ? 'resume'
    : argv.includes('--jtc-only')
    ? 'jtc'
    : argv.includes('--recifra-only')
    ? 'recifra'
    : null

  generatePDF(languages, pageFilter).catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
}
