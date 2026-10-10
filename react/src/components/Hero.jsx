import { useState } from 'react';

export default function Hero({ navigate }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero">
      <div className="hero-image">
        {imgError ? (
          <div className="avatar-fallback" style={{ height: 400 }}>
            Преподавание
          </div>
        ) : (
          <img
            src="/hero.jpg"
            alt="Преподаватель"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="hero-content">
        <h1>Наши лекторы — признанные специалисты </h1>
        <p>в своих областях, готовые делиться опытом и знаниями.</p>

        <ul className="hero-benefits">
          <li>- Онлайн и оффлайн занятия</li>
          <li>- Гибкий график</li>
          <li>- Сертификаты по окончании</li>
        </ul>

        <div className="hero-stats">
          <span><strong>10</strong> преподавателей</span>
          <span><strong>30+</strong> дисциплин</span>
          <span><strong>500+</strong> студентов</span>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary btn-large" onClick={() => navigate('/lecturers')}>
            Найти лектора
          </button>

        </div>

      </div>
    </section>
  );
}