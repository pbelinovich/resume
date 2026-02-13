# PDF Generation System

Система автоматической генерации PDF из React-компонентов (резюме, JTC, Recifra) с поддержкой многоязычности.

## Как работает

### 1. Структура

- **PDF-роуты** — отдельные роуты без Layout: `/resume-pdf`, `/jtc-pdf`, `/recifra-pdf`
- **PDF-компоненты**: `ResumePDF`, `JTCPDF`, `RecifraPDF` в соответствующих страницах
- **`scripts/generate-pdf.js`** — генерация через Puppeteer по конфигу страниц
- **`scripts/serve-static.js`** — временный статический сервер

### 2. Команды

```bash
# Обычный билд (без PDF)
npm run build

# Билд + генерация всех PDF (resume, jtc, recifra) на обоих языках
npm run build:full

# Генерация всех PDF (после билда)
npm run generate:pdf

# Только русский / только английский
npm run generate:pdf:ru
npm run generate:pdf:en

# Только одна страница (передать флаг в скрипт)
node scripts/generate-pdf.js --resume-only
node scripts/generate-pdf.js --jtc-only
node scripts/generate-pdf.js --recifra-only

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
2. Для каждой страницы из конфига (resume, jtc, recifra) и каждого языка:
   - Puppeteer открывает `/resume-pdf`, `/jtc-pdf` или `/recifra-pdf?lang={language}`
   - Применяется светлая тема для печати
   - PDF сохраняется в `src/static-resources/{страница}-{language}.pdf`
3. При билде webpack копирует все PDF в `dist/`
4. Сервер останавливается

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

- `.git/hooks/pre-push` — Git hook для автоматизации
- `src/static-resources/resume-ru.pdf`, `resume-en.pdf` — PDF резюме
- `src/static-resources/jtc-ru.pdf`, `jtc-en.pdf` — PDF JTC
- `src/static-resources/recifra-ru.pdf`, `recifra-en.pdf` — PDF Recifra
- `dist/*.pdf` — копии PDF при билде (webpack)
- `src/components/pdf-download-button.tsx` — кнопка скачивания резюме
- `src/index.tsx` — роуты `/resume-pdf`, `/jtc-pdf`, `/recifra-pdf`

## Особенности

- 🎯 **Нулевое влияние на бандл** - Puppeteer только в devDependencies
- 🎨 **Правильные стили** - PDF рендерится в светлой теме без принудительной перезаписи CSS
- 📱 **Отзывчивость** - Отдельный роут без навигации и элементов управления
- 🌍 **Многоязычность** - Поддержка генерации PDF на русском и английском языках
- 🤖 **Автоматизация** - Всё происходит автоматически при git push
- 🔧 **Модульность** - Общая логика вынесена в переиспользуемые функции
