import { useState } from 'react';
import { lecturers } from '../data/lecturers';
import LecturerCard from '../components/LecturerCard';

export default function Lecturers({ navigate }) {
  const [gender, setGender] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = lecturers.filter(l => {
    const matchGender = gender === 'all' || l.gender === gender;
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase());
    return matchGender && matchSearch;
  });

  return (
    <div className="page">
      <h1>Наши лекторы</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Поиск по имени..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-buttons">
          <button className={gender === 'all' ? 'active' : ''} onClick={() => setGender('all')}>Все</button>
          <button className={gender === 'М' ? 'active' : ''} onClick={() => setGender('М')}>Мужчины</button>
          <button className={gender === 'Ж' ? 'active' : ''} onClick={() => setGender('Ж')}>Женщины</button>
        </div>
      </div>

      <div className="lecturers-grid">
        {filtered.map(l => (
          <LecturerCard
            key={l.id}
            lecturer={l}
            onOpen={(id) => navigate(`/lecturers/${id}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && <p className="empty">Ничего не найдено</p>}
    </div>
  );
}