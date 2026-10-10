export default function CourseCard({ course, lecturer, onOpen }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p className="course-lecturer">Преподаватель: {lecturer.name}</p>
      <p className="course-desc">{course.description}</p>
      <div className="course-topics">
        <strong>Программа ({course.topics.length} тем):</strong>
        <ul>
          {course.topics.slice(0, 3).map((t, i) => (
            <li key={i}>{t}</li>
          ))}
          <li>...</li>
        </ul>
      </div>
      <button className="btn-primary" onClick={() => onOpen(course.id)}>
        Подробнее
      </button>
    </div>
  );
}