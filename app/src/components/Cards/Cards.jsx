import React, { useState, useEffect } from 'react';
import { getAllCards } from '../../services/getAllCard';
import getRandom from '../../services/getRandom';
import './Cards.css';

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getAllCards().then((data) => {
      const randomCards = getRandom(data, 3);
      setCardData(randomCards);
    });
  }, []);

  function handleCardFlip(cardId) {
    const updatedCardData = cardData.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          isFlipped: !card.isFlipped,
        };
      }
      return card;
    });
    setCardData(updatedCardData);
  }

  return (
    <div className='container-result'>
      {cardData.map((card) => (
        <div
          className={`card ${card.isFlipped ? 'flipped' : ''}`}
          key={card.id}
          onClick={() => handleCardFlip(card.id)}
        >
          <div className="card-front">
            <img
              src={card.isFlipped ? card.sakuraCard : card.cardsReverse.sakuraReverse }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
            {card.isFlipped && (
              <>
                <h5 className="card-title">{card.spanishName}</h5>
                <p className="card-text">{card.meaning}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
