#!/usr/bin/env node

const webpack = require('webpack')
const config = require('../webpack.config.js')

console.log('📊 Генерация webpack статистики...')

const compiler = webpack(config)

compiler.run((err, stats) => {
  if (err) {
    console.error('❌ Ошибка при сборке:', err)
    process.exit(1)
  }

  if (stats.hasErrors()) {
    console.error('❌ Ошибки сборки:', stats.toJson().errors)
    process.exit(1)
  }

  // Сохраняем статистику в файл
  const fs = require('fs')
  fs.writeFileSync('webpack-stats.json', JSON.stringify(stats.toJson()))

  console.log('✅ Статистика сохранена в webpack-stats.json')
  console.log('🚀 Запуск bundle analyzer...')

  const { execSync } = require('child_process')
  try {
    execSync('npx webpack-bundle-analyzer webpack-stats.json', { stdio: 'inherit' })
  } catch (error) {
    console.error('❌ Ошибка при запуске анализатора:', error.message)
  }
})
