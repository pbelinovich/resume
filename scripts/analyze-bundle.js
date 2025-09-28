#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log('🔍 Анализ размера бандла...\n')

// Проверяем, существует ли dist папка
const distPath = path.join(__dirname, '../dist')
if (!fs.existsSync(distPath)) {
  console.log('📦 Сборка проекта...')
  try {
    execSync('npm run build', { stdio: 'inherit' })
  } catch (error) {
    console.error('❌ Ошибка при сборке проекта:', error.message)
    process.exit(1)
  }
}

// Проверяем, существует ли webpack-stats.json
const statsPath = path.join(__dirname, '../webpack-stats.json')
if (!fs.existsSync(statsPath)) {
  console.log('📊 Генерация статистики webpack...')
  try {
    execSync('npm run build -- --json > webpack-stats.json', { stdio: 'pipe' })
  } catch (error) {
    console.error('❌ Ошибка при генерации статистики:', error.message)
    process.exit(1)
  }
}

// Проверяем содержимое файла и очищаем его от лишних данных
if (fs.existsSync(statsPath)) {
  const content = fs.readFileSync(statsPath, 'utf8')
  const lines = content.split('\n')
  const jsonLine = lines.find(line => line.trim().startsWith('{'))

  if (jsonLine) {
    fs.writeFileSync(statsPath, jsonLine)
    console.log('✅ Статистика webpack очищена')
  } else {
    console.log('⚠️  Не удалось найти JSON в статистике, используем прямой анализ бандла')
    // Удаляем некорректный файл
    fs.unlinkSync(statsPath)
  }
}

console.log('🚀 Запуск webpack-bundle-analyzer...')
console.log('📈 Откроется браузер с интерактивной картой бандла\n')

try {
  if (fs.existsSync(statsPath)) {
    execSync('npx webpack-bundle-analyzer webpack-stats.json', { stdio: 'inherit' })
  } else {
    console.log('📦 Используем прямой анализ бандла...')
    execSync('npx webpack-bundle-analyzer dist/index.js', { stdio: 'inherit' })
  }
} catch (error) {
  console.error('❌ Ошибка при запуске анализатора:', error.message)
  console.log('💡 Попробуйте запустить: npm run analyze')
  process.exit(1)
}
