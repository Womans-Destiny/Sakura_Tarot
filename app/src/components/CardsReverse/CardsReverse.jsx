// import React, { useEffect, useState } from 'react';
// import './CardsReverse.css';

// function CardsReverse() {
//     const [cards, setCards] = useState([]);
//     const [showDeck, setShowDeck] = useState(true);
//     const [selectedCards, setSelectedCards] = useState([]);

//     useEffect(() => {
//         fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
//           .then(response => response.json())
//           .then(data => {
//             const updatedCards = data.map(({ cardsReverse }) => ({ sakuraReverse: cardsReverse.sakuraReverse }));
//             setCards(updatedCards);
//           })
//           .catch(error => console.log(error));
//       }, []);

//       const handleDeckClick = () => {
//         setShowDeck(false);
//         setSelectedCards(cards.slice(0, 8));
//       };

//       const handleCardClick = (index) => {
//         setSelectedCards(prevSelectedCards => {
//           const updatedSelectedCards = [...prevSelectedCards];
//           updatedSelectedCards.splice(index, 1);
//           return updatedSelectedCards;
//         });
//       };

//   return (
//     <div className="card-reverse-container">
//       {showDeck ? (
//         <div
//           className="card-reverse deck"
//           onClick={handleDeckClick}
//         >
//           <span className='text-card-reverse'>Click para mostrar las cartas</span>
//         </div>
//       ) : (
//         <>
//           <div className="card-circle-reverse">
//             {selectedCards.map((card, index) => (
//               <div
//                 className="card-reverse"
//                 key={index}
//                 style={{
//                   transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${index * (360 / selectedCards.length)}deg)`
//                 }}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default CardsReverse



import React, { useEffect, useState } from 'react';
import './CardsReverse.css';

function CardsReverse() {
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

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
    if (selectedCards.length === 5) {
      return; 
    }

    setSelectedCards(prevSelectedCards => {
      const updatedSelectedCards = [...prevSelectedCards];
      updatedSelectedCards.splice(index, 1);
      return updatedSelectedCards;
    });
  };

  return (
    <div className="card-reverse-container">
      {showDeck ? (
        <div className="card-reverse deck" onClick={handleDeckClick}>
          <span className='text-card-reverse'>Click para mostrar las cartas</span>
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
        </>
      )}
    </div>
  );
}

export default CardsReverse;
