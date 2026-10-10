import { useState } from 'react';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="about">
      <div className="about-text">
        <h2>О нашей платформе</h2>
        <p>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами.
        </p>
        <p>
          Мы упрощаем процесс подбора, бронирования и организации лекций,
          помогая находить экспертов, которые не просто делятся знаниями,
          но и вдохновляют аудиторию.
        </p>
        <ul className="about-values">
          <li>Индивидуальный подход</li>
          <li>Быстрый подбор эксперта</li>
          <li>30+ дисциплин</li>
          <li>Онлайн и оффлайн</li>
        </ul>
        <div className="about-stats">
          <div><strong>10+</strong><span>Преподавателей</span></div>
          <div><strong>500+</strong><span>Студентов</span></div>
          <div><strong>98%</strong><span>Довольных клиентов</span></div>
        </div>
      </div>
      <div className="about-image">
        {imgError ? (
          <div className="avatar-fallback" style={{ height: 400 }}>Обучение*</div>
        ) : (
          <img
            src="/about.jpg"
            alt="О платформе"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </section>
  );
}