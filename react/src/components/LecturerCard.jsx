import Avatar from './Avatar';

export default function LecturerCard({ lecturer, onOpen }) {
  return (
    <div className="lecturer-card">
      <div className="lecturer-card__top">
        <div className="lecturer-card__photo-wrapper">
          <Avatar src={lecturer.photo} name={lecturer.name} size={180} />
          <div className="accent-line"></div>
        </div>
        <div className="lecturer-card__info">
          <h3>{lecturer.name}</h3>
          <p className="degree">
            {lecturer.degree !== 'нет' ? lecturer.degree : 'Без степени'} • Стаж: {lecturer.experience} лет
          </p>
          <p className="education">{lecturer.education}</p>
          <ul className="subjects">
            {lecturer.subjects.slice(0, 3).map((s, i) => (
              <li key={i}>{s.title}</li>
            ))}
          </ul>
          <div className="rating">★★★★★ <span>4.9 / 5</span></div>
          <button className="btn-primary" onClick={() => onOpen(lecturer.id)}>
            Подробнее
          </button>
        </div>
      </div>
      <div className="lecturer-card__bottom">
        <span>от {lecturer.tariffs[0].price} ₽ / занятие</span>
      </div>
    </div>
  );
}