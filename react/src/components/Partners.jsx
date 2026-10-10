import { useState } from 'react';
import { partners } from '../data/partners';

function PartnerLogo({ src, name }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <div className="partner-logo-fallback">{name}</div>;
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
    />
  );
}

export default function Partners() {
  return (
    <section className="partners">
      <h2>Наши партнёры</h2>
      <div className="partners-grid">
        {partners.map(p => (
          <div key={p.id} className="partner-card">
            <div className="partner-logo-link">
              <PartnerLogo src={p.logo} name={p.name} />
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-arrow"
                aria-label={`Перейти на сайт ${p.name}`}
              >
                ↗
              </a>
            </div>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}