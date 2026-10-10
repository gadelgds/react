import { lecturers } from '../data/lecturers';
import CourseCard from '../components/CourseCard';

export default function Courses({ navigate }) {
  const allCourses = lecturers.flatMap(l =>
    l.subjects.map(s => ({ ...s, lecturer: l }))
  );

  return (
    <div className="page">
      <h1>Курсы и дисциплины</h1>
      <div className="courses-grid">
        {allCourses.map(c => (
          <CourseCard
            key={c.id}
            course={c}
            lecturer={c.lecturer}
            onOpen={(id) => navigate(`/courses/${id}`)}
          />
        ))}
      </div>
    </div>
  );
}