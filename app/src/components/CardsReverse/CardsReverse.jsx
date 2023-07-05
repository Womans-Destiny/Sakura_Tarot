import { useEffect, useState } from 'react';
import './CardsReverse.css';
import { getAllCards } from '../../services/getAllCard';
import Cards from '../Cards/Cards';
import getRandom from '../../services/getRandom'


const CardsReverse = () => {
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);

  useEffect(() => {
    getAllCards()
    .then(data =>{
        const updatedCards = data.map(({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
          sakuraReverse: cardsReverse.sakuraReverse,
          sakuraCard: sakuraCard,
          spanishName: spanishName,
          meaning: meaning,
        }));
        setCards(updatedCards);
    })
      
  }, []);

  const handleDeckClick = () => {
    setShowDeck(false);
    setSelectedCards(getRandom(cards, 8));
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

    const cartaSeleccionada = selectedCards[index];
    cartaSeleccionada.id = index + 1;
    setSeleccionadas((prevSeleccionadas) => {
      const updatedSeleccionadas = [...prevSeleccionadas];
      updatedSeleccionadas.push(cartaSeleccionada);
      return updatedSeleccionadas;
    });
  };

  console.log("cartas seleccionadas", selectedCards);
  console.log("realmente seleccionadas", seleccionadas);

  return ( 
    <div className="card-reverse-container">
      {showDeck ? (
        <div className="card-reverse deck" onClick={handleDeckClick}>
          <span className="text-card-reverse">Click y escoge 3 cartas </span>
        </div>
      ) : (
        <div className="card-circle-reverse">
          {selectedCards.map((card, index) => (
            <div
              className="card-reverse"
              key={index}
              style={{
                transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${index *
                  (360 / selectedCards.length)}deg)`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
            </div>
          ))}
        </div>
      )}
         <Cards data={seleccionadas} />
    </div>
  );
};

export default CardsReverse;



// import React, { useEffect, useState } from 'react';
// import './CardsReverse.css';
// import { getAllCards } from '../../services/getAllCard';
// import Cards from '../Cards/Cards';

// const CardsReverse = () => {
//   const [cards, setCards] = useState([]);
//   const [showDeck, setShowDeck] = useState(true);
//   const [selectedCards, setSelectedCards] = useState([]);


//   const [seleccionadas, setSeleccionadas] = useState([]);


//   const [propsPassed, setPropsPassed] = useState(false);
//   useEffect(() => {
//     getAllCards().then((data) => {
//       const updatedCards = data.map(
//         ({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
//           sakuraReverse: cardsReverse.sakuraReverse,
//           sakuraCard: sakuraCard,
//           spanishName: spanishName,
//           meaning: meaning,
//         })
//       );
//       setCards(updatedCards);
//     });
//   }, []);

//   const handleDeckClick = () => {
//     setShowDeck(false);
//     setSelectedCards(cards.slice(0, 8));
//   };

//   const handleCardClick = (index) => {
//     if (selectedCards.length === 5) {
//       return;
//     }

//     setSelectedCards((prevSelectedCards) => {
//       const updatedSelectedCards = [...prevSelectedCards];
//       updatedSelectedCards.splice(index, 1);
//       return updatedSelectedCards;
//     });

//     const cartaSeleccionada = selectedCards[index];
//     cartaSeleccionada.id = index + 1;
//     setSeleccionadas((prevSeleccionadas) => {
//       const updatedSeleccionadas = [...prevSeleccionadas];
//       updatedSeleccionadas.push(cartaSeleccionada);
//       return updatedSeleccionadas;
//     });
//   };

//   const handleButtonClick = () => {
//     setPropsPassed(true); 
//   };

//   return (
//     <div className="card-reverse-container">
//       {showDeck ? (
//         <div className="card-reverse deck" onClick={handleDeckClick}>
//           <span className="text-card-reverse">Click y escoge 3 cartas </span>
//         </div>
//       ) : (
//         <div className="card-circle-reverse">
//           {selectedCards.map((card, index) => (
//             <div
//               className="card-reverse"
//               key={index}
//               style={{
//                 transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${index *
//                   (360 / selectedCards.length)}deg)`,
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <img
//                 src={card.sakuraReverse}
//                 className="card-reverse-img-top"
//                 alt="carta sakura reverse"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//       <button onClick={handleButtonClick}>Pasar Props</button>
//       {propsPassed && <Cards data={seleccionadas} />}
//     </div>
//   );
// };

// export default CardsReverse;
