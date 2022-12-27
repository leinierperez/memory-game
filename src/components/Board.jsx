import React from 'react';
import Card from './Card';

function Board({ currentCards, handleClick }) {
  return (
    <>
      <div className="m-auto grid max-w-screen-xl grid-cols-[repeat(auto-fit,minmax(theme(width.12),theme(width.32)))] justify-center gap-4 py-10 px-4 sm:grid-cols-[repeat(auto-fit,minmax(theme(width.12),theme(width.40)))]">
        {currentCards.map((card) => {
          return (
            <Card
              key={card.key}
              imageURL={card.src}
              championName={card.name}
              handleClick={() => handleClick(card.key)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Board;
