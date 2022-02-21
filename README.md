# Проект сборки приложения NodeJS в docker-compose для [hexlet](https://ru.hexlet.io)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/gelugu/devops-for-programmers-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/gelugu/devops-for-programmers-project-lvl1/actions)
[![Actions Status](https://github.com/gelugu/devops-for-programmers-project-lvl1/workflows/push/badge.svg)](https://github.com/gelugu/devops-for-programmers-project-lvl1/actions)

## Треьования к системе
Проект подготовлен для запуска в *nix системах.
ПО:
- docker, docker-compose
- nodejs (для локальной разработки)

## Скрипты
Скрипты для разработки перечисленны в соответствующем блоке в `app/package.json`
Скрипты сборки и тестирования приложения CI/CD:
```bash
make prepare  # Подготовка окружения для запуска тестов
make ci       # установка зависимостей и прогон тестов
make start    # запуск приложения (порты 80, 443)
make build    # сборка образа приложения для публикации
make push     # выгрузка контейнера на dockerhub (требует аутентификации)
```

Ссылки:
- [Профиль на hexlet](https://ru.hexlet.io/u/gelugu)
- [Образ приложения на dockerhub](https://hub.docker.com/r/gelugu/devops-for-programmers-project-lvl1)
