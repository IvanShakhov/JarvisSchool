# JarvisSchool - Платформа для онлайн-курсов

JarvisSchool - современная веб-платформа для онлайн-курсов разностороннего развития. Проект разработан с использованием Next.js и Tailwind CSS.

![JarvisSchool](public/images/preview.jpg)

## Функциональность

- Главная страница с баннером и популярными курсами
- Профиль студента с возможностью отслеживания прогресса
- Детальная страница курса с описанием и программой
- Современный и интерактивный дизайн
- Адаптивная верстка для всех устройств

## Технологии

- [Next.js](https://nextjs.org/) - React-фреймворк для создания веб-приложений
- [Tailwind CSS](https://tailwindcss.com/) - Утилитарный CSS-фреймворк
- [TypeScript](https://www.typescriptlang.org/) - Типизированный JavaScript
- [React Icons](https://react-icons.github.io/react-icons/) - Коллекция популярных иконок

## Установка и запуск

### Требования

- Node.js (версия 18.0 или выше)
- npm или yarn

### Шаги установки

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/jarvis-school.git
cd jarvis-school
```

2. Установите зависимости:

```bash
npm install
# или
yarn install
```

3. Запустите разработческий сервер:

```bash
npm run dev
# или
yarn dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Сборка для production

Для создания production-сборки выполните:

```bash
npm run build
# или
yarn build
```

Затем вы можете запустить сборку с помощью:

```bash
npm run start
# или
yarn start
```

## Деплой на Netlify

Проект настроен для легкого деплоя на Netlify. Просто свяжите свой GitHub репозиторий с Netlify, и при каждом пуше в ветку main будет автоматически запускаться процесс сборки и деплоя.

### Настройки для Netlify

- Build command: `npm run build`
- Publish directory: `.next`
- Environment variables: При необходимости добавьте переменные окружения в настройках Netlify.

## Структура проекта

```
jarvis-school/
├── app/                  # Директория Next.js App Router
│   ├── courses/          # Страницы курсов
│   ├── profile/          # Страницы профиля
│   ├── globals.css       # Глобальные стили
│   └── page.tsx          # Главная страница
├── components/           # React компоненты
│   ├── courses/          # Компоненты для страниц курсов
│   ├── home/             # Компоненты для главной страницы
│   ├── layout/           # Компоненты шаблона (Header, Footer)
│   └── profile/          # Компоненты для профиля
├── public/               # Статические файлы
│   └── images/           # Изображения
├── next.config.js        # Конфигурация Next.js
├── tailwind.config.js    # Конфигурация Tailwind CSS
└── package.json          # Зависимости и скрипты
```

## Дальнейшее развитие

- Авторизация и система пользователей
- Платежная система
- Форум для студентов
- Динамическая загрузка данных с бэкенда
- Поиск по курсам

## Лицензия

[MIT](LICENSE) 