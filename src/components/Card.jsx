import React from 'react';

function Card({ imageURL, championName, handleClick }) {
  return (
    <div className="overflow-hidden rounded-md bg-slate-400 text-center">
      <img src={imageURL} alt="img" onClick={handleClick}></img>
      <span className="text-xl font-bold text-gray-900">{championName}</span>
    </div>
  );
}

export default Card;
