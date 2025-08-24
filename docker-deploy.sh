#!/bin/bash

# Скрипт деплоя для spectexpark.by через Docker
echo "🐳 Начинаю деплой spectexpark.by через Docker..."

# Создание директорий для логов и SSL
mkdir -p logs ssl

# Остановка и удаление старых контейнеров
echo "⏹️ Останавливаю старые контейнеры..."
docker-compose down

# Удаление старых образов
echo "🗑️ Удаляю старые образы..."
docker system prune -f

# Сборка и запуск контейнеров
echo "🔨 Собираю и запускаю контейнеры..."
docker-compose up -d --build

# Проверка статуса
echo "📊 Статус контейнеров:"
docker-compose ps

# Проверка логов
echo "📋 Логи приложения:"
docker-compose logs spectexpark

echo "✅ Деплой завершен! Приложение доступно на порту 5100"
echo "🌐 Для проверки: curl http://localhost:5100"
echo "🔍 Логи: docker-compose logs -f"
