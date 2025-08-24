#!/bin/bash

echo "🚀 Запуск деплоя SpectExpark..."

# Останавливаем и удаляем старые контейнеры
echo "📦 Останавливаем старые контейнеры..."
docker-compose down

# Удаляем старые образы
echo "🗑️ Удаляем старые образы..."
docker image prune -f

# Собираем новый образ
echo "🔨 Собираем новый Docker образ..."
docker-compose build --no-cache

# Запускаем приложение
echo "🚀 Запускаем приложение..."
docker-compose up -d

# Проверяем статус
echo "✅ Проверяем статус..."
docker-compose ps

echo "🎉 Деплой завершен! Приложение доступно на http://localhost:5100"
