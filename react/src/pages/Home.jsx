import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import LecturerCard from '../components/LecturerCard';
import { lecturers } from '../data/lecturers';

export default function Home({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <About />
      <section className="section">
        <h2>Топ преподаватели</h2>
        <div className="lecturers-grid">
          {lecturers.slice(0, 2).map(l => (
            <LecturerCard
              key={l.id}
              lecturer={l}
              onOpen={(id) => navigate(`/lecturers/${id}`)}
            />
          ))}
        </div>
      </section>
      <Partners />
    </>
  );
}