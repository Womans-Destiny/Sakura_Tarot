import { useEffect, useState } from 'react';
import './CardsReverse.css';
import imgFeedback from '../../assets/img-feedback.png';

function CardsReverse() {
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then(response => response.json())
      .then(data => {
        const updatedCards = data.map(({ cardsReverse }) => ({ sakuraReverse: cardsReverse.sakuraReverse }));
        setCards(updatedCards);
      })
      .catch(error => console.log(error));
  }, []);
  
  const handleDeckClick = () => {
    setShowDeck(false);
    setSelectedCards(cards.slice(0, 8));
  };

  const handleCardClick = (index) => {
    if (selectedCards.length === 3) {
      return; 
    }

    setSelectedCards(prevSelectedCards => {
      const updatedSelectedCards = [...prevSelectedCards];
      updatedSelectedCards.splice(index, 1);
      return updatedSelectedCards;
    });

    if (selectedCards.length === 8) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000); 
    }
  };

  return (
    <>
    
    <div className="card-reverse-container">
      {showDeck ? (
        <div className="card-reverse deck" onClick={handleDeckClick}>
          <span className='text-card-reverse'>Click y escoge 3 cartas </span>
        </div>
      ) : (
        <>
          <div className="card-circle-reverse">
            {selectedCards.map((card, index) => (
              <div
                className="card-reverse"
                key={index}
                style={{
                  transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${index * (360 / selectedCards.length)}deg)`
                }}
                onClick={() => handleCardClick(index)}
              >
                <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
              </div>
            ))}
          </div>
          {selectedCards.length === 7 && (
            <div className="ready-text">
              <img className='image-feedback' src={imgFeedback} alt='imagen de la ventana modal del feedback' />
              <p className='text-feedback'>HAS SELECCIONADO 1 CARTA</p>
            </div>
          )}
          {selectedCards.length === 6 && (
            <div className="ready-text">
              <img className='image-feedback' src={imgFeedback} alt='imagen de la ventana modal del feedback' />
              <p className='text-feedback'>HAS SELECCIONADO 2 CARTAS</p>
            </div>
          )}
          {selectedCards.length === 5 && (
            <div className="ready-text">
              <img className='image-feedback' src={imgFeedback} alt='imagen de la ventana modal del feedback' />
              <p className='text-feedback'>HAS SELECCIONADO 3 CARTAS</p>
            </div>
          )}
          {showResult && (
            <div className="ready-text">
              <img className='image-feedback' src={imgFeedback} alt='imagen de la ventana modal del feedback' />
              <p className='text-feedback'>YA PUEDES PASAR A VER TU TIRADA</p>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
}

export default CardsReverse;

