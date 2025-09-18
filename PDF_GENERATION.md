# PDF Generation System

Система автоматической генерации PDF резюме из React компонента с поддержкой многоязычности.

## Как работает

### 1. Структура

- **`/resume-pdf`** - отдельный роут для рендеринга PDF версии без Layout
- **`ResumePDF`** компонент из `src/pages/resume/index.tsx` с поддержкой языков
- **`scripts/generate-pdf.js`** - основной скрипт генерации через Puppeteer
- **`scripts/serve-static.js`** - временный статический сервер для рендеринга

### 2. Команды

```bash
# Обычный билд (без PDF)
npm run build

# Билд + генерация PDF на обоих языках
npm run build:full

# Генерация PDF на обоих языках (после билда)
npm run generate:pdf

# Генерация PDF только на русском языке
npm run generate:pdf:ru

# Генерация PDF только на английском языке
npm run generate:pdf:en

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
2. Для каждого языка:
   - Puppeteer открывает страницу `/resume-pdf?lang={language}`
   - Устанавливается язык в localStorage
   - Применяется светлая тема для печати
   - Генерируется PDF в `src/static-resources/resume-{language}.pdf`
3. Создается основная ссылка `resume.pdf` (копия русской версии)
4. При билде webpack копирует все PDF файлы в `dist/`
5. Сервер останавливается

### 5. Деплой на Netlify

PDF файлы генерируются **локально** в `src/static-resources/` и коммитятся в репозиторий.
На Netlify обычный `npm run build` копирует все готовые PDF файлы в `dist/`.

## Использование

### Разработка
```bash
npm start                 # Запуск dev-сервера
# Кнопка "PDF" в TopLine показывает меню выбора языка
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
- `src/static-resources/resume.pdf` - Основной PDF файл (копия русской версии)
- `src/static-resources/resume-ru.pdf` - PDF на русском языке
- `src/static-resources/resume-en.pdf` - PDF на английском языке
- `dist/resume*.pdf` - Копии PDF файлов в билде (создаются webpack при билде)
- `src/components/pdf-download-button.tsx` - Кнопка скачивания с выбором языка
- `src/index.tsx` - Роут `/resume-pdf`

## Особенности

- 🎯 **Нулевое влияние на бандл** - Puppeteer только в devDependencies
- 🎨 **Правильные стили** - PDF рендерится в светлой теме без принудительной перезаписи CSS
- 📱 **Отзывчивость** - Отдельный роут без навигации и элементов управления
- 🌍 **Многоязычность** - Поддержка генерации PDF на русском и английском языках
- 🤖 **Автоматизация** - Всё происходит автоматически при git push
- 🔧 **Модульность** - Общая логика вынесена в переиспользуемые функции
