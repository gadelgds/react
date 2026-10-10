export default function Header({ navigate, path }) {
  const links = [
    { label: 'Главная', to: '/' },
    { label: 'Партнёры', to: '/partners' },
    { label: 'О нас', to: '/about' },
    { label: 'Лекторы', to: '/lecturers' },
  ];

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        Edu<span>Platform</span>
      </div>
      <nav>
        {links.map(l => (
          <a
            key={l.to}
            href={l.to}
            className={path === l.to ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); navigate(l.to); }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <input type="search" placeholder="Поиск..." />
        <a
          href="/contacts"
          onClick={(e) => { e.preventDefault(); navigate('/contacts'); }}
          className="phone"
        >
          +7 (999) 123-45-67
        </a>
        <button className="btn-header">Войти</button>
      </div>
    </header>
  );
}