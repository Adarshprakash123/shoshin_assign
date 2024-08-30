import React from 'react';
import './Card.css';

const Card = ({ title, value, subtext }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{subtext}</p>
    </div>
  );
};

export default Card;
