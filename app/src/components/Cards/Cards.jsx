import { useState, useEffect } from 'react';
import { getAllCards } from '../../services/getAllCard';
import getRandom from '../../services/getRandom';
import './Cards.css';

function Cards() {
  const [cardData, setCardData] = useState([]);
  /*console.log(seleccionadas);*/

  useEffect(() => {
    getAllCards().then((data) => {      
      const randomCards = getRandom(data, 3);      
      setCardData(randomCards);
      
      //window.location.href = '/favorites/';//
      

    });
  }, []);
      localStorage.clear();
      localStorage.setItem('cardData', 'randomCard');

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
    localStorage.setItem('cardData', JSON.stringify(updatedCardData));
  }

  return (
    <div className='containerResult'>
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

export default Cards;
