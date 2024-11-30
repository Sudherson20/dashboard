import React from 'react';
import './StatsCard.css';

function StatsCard({ title, quantity }) {
  return (
    <div className="stats-card">
      <h3>{quantity}</h3>
      <p>{title}</p>
    </div>
  );
}

export default StatsCard;
