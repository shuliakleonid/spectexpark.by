# Деплой на GitHub Pages

## Настройка

1. **Включите GitHub Pages** в настройках репозитория:
   - Перейдите в Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (создастся автоматически)
   - Folder: / (root)

2. **Настройте GitHub Actions**:
   - Перейдите в Settings → Actions → General
   - Включите "Allow all actions and reusable workflows"

## Автоматический деплой

При каждом пуше в ветку `main` сайт автоматически деплоится на GitHub Pages.

## Ручной деплой

```bash
# Сборка проекта
npm run build

# Файлы будут в папке out/
```

## Структура URL

- Локально: `http://localhost:3000`
- GitHub Pages: `https://[username].github.io/spectexpark.by`

## Важные моменты

- Все изображения должны быть в папке `public/`
- Используйте относительные пути для внутренних ссылок
- Сайт работает как SPA (Single Page Application) 