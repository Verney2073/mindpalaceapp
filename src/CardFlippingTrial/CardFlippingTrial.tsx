import React, { useState } from 'react';
import './CardFlippingTrial.css';

export function CardFlippingTrial(props: {
  cardSuit : string;
  cardRank : string; 
}) {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>

      {/* card flip component */}
      <div className="card-face card-front">
       
          <span className ="card-top-left">♦</span>
          <p className="card-center">10</p>
          <span className ="card-bottom-right">♦</span>
      </div>
      <div className="card-face card-back">Back</div>
    </div>
  );
};

// export default CardFlippingTrial;

/*
//from tracking whole deck component - uses the Card Class to define cards
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (id, flipped) => {
    setFlippedCards({
      ...flippedCards,
      [id]: flipped,
    });
  };

  const unflippedCards = [...Array(10)].map((_, index) => (
    <Card key={index} id={index} onFlip={handleCardFlip} />
  ));

  const flippedCards = Object.entries(flippedCards)
    .filter(([_, flipped]) => flipped)
    .map(([id]) => <Card key={id} id={id} onFlip={handleCardFlip} />);

    return ... 
     //whole deck component 
     <div className="card-deck">{unflippedCards}</div>
     <div className="card-deck">{flippedCards}</div>
     */
