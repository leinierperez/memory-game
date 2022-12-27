import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import Header from './Header';
import useChampionImageURLs from '../hooks/useChampionImageURLs';
import { shuffle } from '../utils';

function Game() {
  const cardsPerLevel = 3;
  const urls = useChampionImageURLs();
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);

  const getNewCards = () => {
    const shuffledImageUrls = shuffle(urls);
    setCurrentCards(shuffledImageUrls.slice(0, cardsPerLevel * level));
  };

  useEffect(() => {
    getNewCards();
  }, [urls, level]);

  const handleClick = (clickedCard) => {
    if (selectedCards.includes(clickedCard)) {
      setLevel(1);
      setScore(0);
      getNewCards();
      setSelectedCards([]);
    } else {
      const newSelectedCards = [...selectedCards, clickedCard];
      setScore((score) => score + 1);
      if (score === highScore) setHighScore((highScore) => highScore + 1);
      if (newSelectedCards.length === cardsPerLevel * level) {
        setLevel((level) => level + 1);
        setSelectedCards([]);
      } else {
        setCurrentCards(shuffle([...currentCards]));
        setSelectedCards(newSelectedCards);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-800">
      <Header score={score} highScore={highScore} />
      <Board currentCards={currentCards} handleClick={handleClick} />
    </div>
  );
}

export default Game;
