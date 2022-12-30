import React from 'react';

function Header({ score, highScore }) {
  return (
    <header className="flex justify-evenly bg-slate-900 py-4 text-2xl text-white sm:text-3xl">
      <h3>Score: {score}</h3>
      <h3>Best Score: {highScore}</h3>
    </header>
  );
}

export default Header;
