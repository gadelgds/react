import { useState } from 'react';

export default function Contacts() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page">
      <h1>Контакты</h1>
      <div className="contacts-grid">
        <div>
          <h3>Телефон</h3>
          <p>+7 (999) 123-45-67</p>
          <h3>Email</h3>
          <p>info@info.ru</p>
          <h3>Адрес</h3>
          <p>г. Казань, ул. Карла Маркса, д. 72</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Напишите нам</h3>
          {sent ? (
            <p className="success">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
          ) : (
            <>
              <input type="text" placeholder="Ваше имя" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Сообщение" rows="4" required></textarea>
              <button type="submit" className="btn-primary">Отправить</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}