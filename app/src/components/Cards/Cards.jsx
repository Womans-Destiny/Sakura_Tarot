import { useEffect, useState } from 'react';
import { getAllCards } from '../../services/getAllCard';
import getRandom from '../../services/getRandom';
import localforage from 'localforage';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [showResult, setShowResult] = useState(false); // Agregado el estado showResult

  useEffect (() => {
    getAllCards().then((data) => {
      const updatedCards = data.map(({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
        sakuraReverse: cardsReverse.sakuraReverse,
        sakuraCard,
        spanishName,
        meaning,
      }));
      setCards(updatedCards);
    });

    getAllCards().then((data) => {
      const randomCards = getRandom(data, 3);
      setCardData(randomCards);
      localforage.clear().then(() => {
        localforage.setItem('cardData', randomCards);
        console.log('cartas seleccionadas', 'cardData');
      });
    });
  }, []);

  const handleDeckClick = () => {
    setShowDeck(true);
    setSelectedCards(getRandom(cards, 4));
  };

  const handleCardClick = (index) => {
    if (selectedCards.length === 3) {
      return;
    }

    setSelectedCards((prevSelectedCards) => {
      const updatedSelectedCards = [...prevSelectedCards];
      updatedSelectedCards.splice(index, 1);
      return updatedSelectedCards;
    });

    if (selectedCards.length === 3) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };

  console.log('cartas seleccionadas', selectedCards);

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

  const saveSelectedCards = () => {
    localforage.setItem('selectedCards', selectedCards);
  };

  return (
    <div className="card-container">
      {showDeck ? (
        <div className="card-reverse deck" onClick={handleDeckClick}></div>
      ) : (
        <div className="card-circle-reverse">
          {selectedCards.map((card, index) => (
            <div
              className="card-reverse"
              key={index}
              style={{
                transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${
                  index * (360 / selectedCards.length)
                }deg)`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
            </div>
          ))}
        </div>
      )}

      <div className="card-result">
        {cardData.map((card) => (
          <div
            className={`card ${card.isFlipped ? 'flipped' : ''}`}
            key={card.id}
            onClick={() => handleCardFlip(card.id)}
          >
            <div className="card-front">
              <img
                src={card.isFlipped ? card.sakuraCard : card.cardsReverse.sakuraReverse}
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

      {selectedCards.length === 3 && (
        <Link to="/favorites">
          <button className="button-favorites" onClick={saveSelectedCards}>
            Guardar selección
          </button>
        </Link>
      )}

      {/* Mostrar el resultado si showResult es verdadero */}
      {showResult && (
        <div className="result-container">
          {/* Contenido del resultado */}
        </div>
      )}
    </div>
  );
}

export default Cards;
