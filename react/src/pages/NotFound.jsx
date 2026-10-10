export default function NotFound({ navigate }) {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <button className="btn-primary" onClick={() => navigate('/')}>
        На главную
      </button>
    </div>
  );
}