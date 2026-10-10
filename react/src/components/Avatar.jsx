import { useState } from 'react';

export default function Avatar({ src, name, className = '' }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w, i) => i === 0 ? w : w[0])
    .join(' ');

    return (
      <div className={`avatar-fallback ${className}`}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
      className={`avatar-img ${className}`}
    />
  );
}