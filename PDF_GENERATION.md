# PDF Generation System

Система автоматической генерации PDF резюме из React компонента.

## Как работает

### 1. Структура

- **`/resume-pdf`** - отдельный роут для рендеринга PDF версии без Layout
- **`ResumePDF`** компонент из `src/pages/resume/index.tsx` 
- **`scripts/generate-pdf.js`** - основной скрипт генерации через Puppeteer
- **`scripts/serve-static.js`** - временный статический сервер для рендеринга

### 2. Команды

```bash
# Обычный билд (без PDF)
npm run build

# Билд + генерация PDF
npm run build:full

# Только генерация PDF (после билда)
npm run generate:pdf

# Обновить PDF и закоммитить
npm run update:pdf
```

### 3. Git Pre-Push Hook

Автоматически срабатывает перед каждым `git push`:

1. ✅ Проверяет наличие изменений
2. 🔨 Запускает `npm run build`
3. 📄 Генерирует PDF через Puppeteer
4. 📋 Добавляет PDF в git и коммитит (если изменился)
5. 🚀 Продолжает push

### 4. Процесс генерации

1. Запускается временный HTTP сервер (`localhost:3000`)
2. Puppeteer открывает страницу `/resume-pdf`
3. Устанавливается светлая тема для печати
4. Генерируется PDF в `src/static-resources/resume.pdf`
5. При билде webpack копирует PDF в `dist/resume.pdf`
6. Сервер останавливается

### 5. Деплой на Netlify

PDF генерируется **локально** в `src/static-resources/resume.pdf` и коммитится в репозиторий.
На Netlify обычный `npm run build` копирует готовый PDF в `dist/resume.pdf`.

## Использование

### Разработка
```bash
npm start                 # Запуск dev-сервера
# Кнопка "PDF" в TopLine скачивает готовый файл
```

### Билд и деплой
```bash
git add .
git commit -m "Update resume"
git push                  # PDF автоматически обновится
```

### Ручное обновление PDF
```bash
npm run update:pdf        # Билд + PDF + коммит
```

## Файлы

- `.git/hooks/pre-push` - Git hook для автоматизации
- `src/static-resources/resume.pdf` - Исходный PDF файл (генерируется и коммитится)
- `dist/resume.pdf` - Копия PDF в билде (создается webpack при билде)
- `src/components/pdf-download-button.tsx` - Кнопка скачивания (ссылается на `/resume.pdf`)
- `src/index.tsx` - Роут `/resume-pdf`

## Особенности

- 🎯 **Нулевое влияние на бандл** - Puppeteer только в devDependencies
- 🎨 **Правильные стили** - PDF рендерится в светлой теме без принудительной перезаписи CSS
- 📱 **Отзывчивость** - Отдельный роут без навигации и элементов управления
- 🤖 **Автоматизация** - Всё происходит автоматически при git push
