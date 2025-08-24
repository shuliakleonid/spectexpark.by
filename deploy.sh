#!/bin/bash

# Скрипт деплоя для spectexpark.by
echo "🚀 Начинаю деплой spectexpark.by..."

# Сборка проекта
echo "📦 Собираю проект..."
npm run build

# Создание директории для логов если её нет
mkdir -p logs

# Остановка текущего процесса PM2
echo "⏹️ Останавливаю текущий процесс..."
pm2 stop spectexpark.by 2>/dev/null || true
pm2 delete spectexpark.by 2>/dev/null || true

# Запуск нового процесса
echo "▶️ Запускаю новый процесс на порту 5100..."
pm2 start ecosystem.config.js

# Сохранение конфигурации PM2
pm2 save

# Проверка статуса
echo "📊 Статус процессов:"
pm2 status

echo "✅ Деплой завершен! Приложение доступно на порту 5100"
echo "🌐 Для проверки: curl http://localhost:5100"
