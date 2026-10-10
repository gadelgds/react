export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="logo">Edu<span>Platform</span></div>
          <p>Учебная платформа для компаний, образовательных учреждений и НКО.</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Главная</a>
          <a href="/lecturers" onClick={(e) => { e.preventDefault(); navigate('/lecturers'); }}>Лекторы</a>
          <a href="/courses" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>Курсы</a>
          <a href="/partners" onClick={(e) => { e.preventDefault(); navigate('/partners'); }}>Партнёры</a>
        </div>
        <div>
          <h4>Помощь</h4>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>О нас</a>
          <a href="/contacts" onClick={(e) => { e.preventDefault(); navigate('/contacts'); }}>Контакты</a>
          <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('/faq'); }}>FAQ</a>
        </div>
        <div>
          <h4>Контакты</h4>
          <p>+7 (999) 123-45-67</p>
          <p>info@info.ru</p>
        </div>
      </div>

    </footer>
  );
}