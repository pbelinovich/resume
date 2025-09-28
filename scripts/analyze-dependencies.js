#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔍 Анализ зависимостей Chakra UI...\n')

// Проверяем размер node_modules для Chakra UI
const chakraPath = path.join(__dirname, '../node_modules/@chakra-ui/react')
const arkPath = path.join(__dirname, '../node_modules/@ark-ui/react')
const zagPath = path.join(__dirname, '../node_modules/@zag-js')

console.log('📊 Размеры зависимостей:')

if (fs.existsSync(chakraPath)) {
  try {
    const chakraSize = execSync(`du -sh "${chakraPath}"`, { encoding: 'utf8' })
    console.log(`📦 @chakra-ui/react: ${chakraSize.trim()}`)
  } catch (error) {
    console.log('❌ Не удалось получить размер @chakra-ui/react')
  }
}

if (fs.existsSync(arkPath)) {
  try {
    const arkSize = execSync(`du -sh "${arkPath}"`, { encoding: 'utf8' })
    console.log(`📦 @ark-ui/react: ${arkSize.trim()}`)
  } catch (error) {
    console.log('❌ Не удалось получить размер @ark-ui/react')
  }
}

if (fs.existsSync(zagPath)) {
  try {
    const zagSize = execSync(`du -sh "${zagPath}"`, { encoding: 'utf8' })
    console.log(`📦 @zag-js: ${zagSize.trim()}`)
  } catch (error) {
    console.log('❌ Не удалось получить размер @zag-js')
  }
}

console.log('\n💡 Рекомендации по оптимизации:')
console.log('1. Используйте tree-shaking для удаления неиспользуемых компонентов')
console.log('2. Рассмотрите замену на более лёгкие альтернативы для простых компонентов')
console.log('3. Настройте code splitting для больших компонентов')
console.log('4. Используйте динамические импорты для редко используемых компонентов')

console.log('\n🚀 Запуск bundle analyzer для детального анализа...')
try {
  execSync('npm run analyze:bundle', { stdio: 'inherit' })
} catch (error) {
  console.error('❌ Ошибка при запуске анализатора:', error.message)
}

