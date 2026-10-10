# EduPlatform

## Стек и версии

React 18.2.0
React DOM 18.2.0
Vite 5.0.0
Node.js ≥ 18.x
npm ≥ 9.x

Сторонние библиотеки не используются.

## Команды для установки и запуска

npm install
npm run dev
npm run build
npm run preview

Приложение откроется по адресу: http://localhost:5173/

## Структура папок

one/
  public/
    index.html
    hero.jpg
    about.jpg
    lecturers/
    partners/
  src/
    index.jsx
    styles.css
    data/
      lecturers.js
      partners.js
    components/
      Header.jsx
      Footer.jsx
      Hero.jsx
      About.jsx
      Partners.jsx
      LecturerCard.jsx
      CourseCard.jsx
      Avatar.jsx
    pages/
      Home.jsx
      Lecturers.jsx
      LecturerDetail.jsx
      Courses.jsx
      CourseDetail.jsx
      About.jsx
      Partners.jsx
      Contacts.jsx
      FAQ.jsx
      NotFound.jsx
  App.jsx
  package.json
  vite.config.js
  README.md

## Где лежат данные

Данные — в папке src/data/:

src/data/lecturers.js — массив lecturers из 10 преподавателей.
src/data/partners.js — массив partners из 2 партнёров.

Каждый преподаватель содержит: id, gender, name, photo, education, experience, degree, subjects (id, title, description, topics), tariffs (title, duration, price).

Каждый партнёр содержит: id, name, logo, url, description.

## Где лежит роутинг

Роутинг — в src/App.jsx.
Состояние path хранит текущий URL.