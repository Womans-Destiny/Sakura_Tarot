import { useState, useEffect } from 'react';
import './Cards.css';

const titles = ['PASADO', 'PRESENTE', 'FUTURO'];

function Card({ selectedCards }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('cardData');
    if (savedData) {
      setCardData(JSON.parse(savedData));
    } else {
      fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
        .then((response) => response.json())
        .then((data) => {
          const randomCards = getRandomCards(data, 3);
          setCardData(randomCards);
          localStorage.setItem('cardData', JSON.stringify(randomCards));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  function getRandomCards(cards, count) {
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    return shuffledCards
      .slice(0, count)
      .map((card, index) => ({
        ...card,
        title: titles[index],
        isFlipped: true,
      }));
  }

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
    <div className="container-result">
      {selectedCards.map((card) => (
        <div
          className={`card ${card.isFlipped ? 'flipped' : ''}`}
          key={card.id}
          onClick={() => handleCardFlip(card.id)}
        >
          <>
            <h6 className="card-position">{card.title}</h6>
            <div className="card-front">
              <img
                src={card.isFlipped ? card.cardsReverse.sakuraReverse : card.sakuraCard}
                className="card-img-top"
                alt="..."
              />
            </div>

            <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
              {!card.isFlipped && (
                <>
                  <h5 className="card-title">{card.spanishName}</h5>
                  <p className="card-text">{card.meaning}</p>
                </>
              )}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default Card;
