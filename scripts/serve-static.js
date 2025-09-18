const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const DIST_DIR = path.resolve(__dirname, '../dist')

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)

  // Определяем путь к файлу (убираем query параметры)
  const urlPath = req.url.split('?')[0]
  let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath)

  // Определяем MIME type
  const extName = path.extname(filePath).toLowerCase()
  const contentType = mimeTypes[extName] || 'application/octet-stream'

  // Читаем файл
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Для статических ресурсов (JS, CSS, images) возвращаем 404
        if (
          extName === '.js' ||
          extName === '.css' ||
          extName === '.map' ||
          extName === '.ico' ||
          extName === '.png' ||
          extName === '.jpg' ||
          extName === '.gif' ||
          extName === '.svg' ||
          extName === '.woff' ||
          extName === '.woff2'
        ) {
          res.writeHead(404)
          res.end('File not found')
          return
        }

        // Только для HTML роутов возвращаем index.html (SPA роутинг)
        fs.readFile(path.join(DIST_DIR, 'index.html'), (error, content) => {
          if (error) {
            res.writeHead(500)
            res.end('Server Error: ' + error.code)
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content, 'utf-8')
          }
        })
      } else {
        res.writeHead(500)
        res.end('Server Error: ' + error.code)
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

// Функция для запуска сервера
function startServer() {
  return new Promise((resolve, reject) => {
    server.listen(PORT, () => {
      console.log(`Static server running at http://localhost:${PORT}/`)
      resolve()
    })

    server.on('error', err => {
      reject(err)
    })
  })
}

// Функция для остановки сервера
function stopServer() {
  return new Promise(resolve => {
    server.close(() => {
      console.log('Static server stopped')
      resolve()
    })
  })
}

module.exports = { startServer, stopServer }

// Если запускается напрямую
if (require.main === module) {
  startServer().catch(console.error)

  // Обработка сигналов для корректного завершения
  process.on('SIGINT', async () => {
    await stopServer()
    process.exit(0)
  })
}
