# Настройка Docker для spectexpark.by

## 1. Установка Docker на сервере

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Добавление пользователя в группу docker
sudo usermod -aG docker $USER

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Перезагрузка для применения изменений
sudo reboot
```

## 2. Настройка проекта

```bash
# Создание директории
sudo mkdir -p /var/www/spectexpark.by
sudo chown $USER:$USER /var/www/spectexpark.by

# Копирование файлов проекта
# (скопируйте все файлы проекта в эту директорию)

# Переход в папку проекта
cd /var/www/spectexpark.by
```

## 3. Настройка SSL сертификатов

```bash
# Создание директории для SSL
mkdir -p ssl

# Получение SSL сертификата через Certbot
sudo apt install certbot -y
sudo certbot certonly --standalone -d spectexpark.by -d www.spectexpark.by

# Копирование сертификатов в папку ssl
sudo cp /etc/letsencrypt/live/spectexpark.by/fullchain.pem ssl/
sudo cp /etc/letsencrypt/live/spectexpark.by/privkey.pem ssl/

# Установка прав доступа
sudo chown $USER:$USER ssl/*
```

## 4. Запуск через Docker

```bash
# Сделать скрипт исполняемым
chmod +x docker-deploy.sh

# Запуск деплоя
./docker-deploy.sh

# Или вручную
docker-compose up -d --build
```

## 5. Проверка работы

```bash
# Статус контейнеров
docker-compose ps

# Логи приложения
docker-compose logs spectexpark

# Проверка портов
curl http://localhost:5100
curl -H "Host: spectexpark.by" http://localhost
```

## 6. Управление контейнерами

```bash
# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Обновление
docker-compose up -d --build

# Просмотр логов
docker-compose logs -f
```

## 7. Обновление приложения

```bash
# Остановка контейнеров
docker-compose down

# Обновление файлов
# (скопируйте новые файлы)

# Пересборка и запуск
docker-compose up -d --build
```

## Полезные команды

```bash
# Просмотр ресурсов
docker stats

# Очистка неиспользуемых ресурсов
docker system prune -a

# Просмотр образов
docker images

# Просмотр контейнеров
docker ps -a
```

## Структура проекта

```
spectexpark.by/
├── Dockerfile              # Сборка Docker образа
├── docker-compose.yml      # Управление контейнерами
├── nginx-docker.conf       # Nginx для приложения
├── nginx-spectexpark.conf  # Nginx для домена
├── docker-deploy.sh        # Скрипт деплоя
├── .dockerignore           # Исключения для Docker
└── ssl/                    # SSL сертификаты
    ├── fullchain.pem
    └── privkey.pem
```
