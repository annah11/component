import React from 'react';

export function Card({ title, description, children }) {
  return (
    <section className="ui-card">
      <header className="ui-card__header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </header>
      <div className="ui-card__body">{children}</div>
    </section>
  );
}
