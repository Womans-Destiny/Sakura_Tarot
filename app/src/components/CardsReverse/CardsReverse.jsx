
// import { useEffect, useState } from 'react';
// import './CardsReverse.css';
// import { getAllCards } from '../../services/getAllCard';
// import getRandom from '../../services/getRandom';
// import Cards from '../Cards/Cards';

// const CardsReverse = () => {
//   const [cards, setCards] = useState([]);
//   const [showDeck, setShowDeck] = useState(true);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [seleccionadas, setSeleccionadas] = useState([]);

//   useEffect(() => {
//     getAllCards().then((data) => {
//       const updatedCards = data.map(({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
//         sakuraReverse: cardsReverse.sakuraReverse,
//         sakuraCard: sakuraCard,
//         spanishName: spanishName,
//         meaning: meaning,
//       }));
//       setCards(updatedCards);
//     });
//   }, []);
//   const handleDeckClick = () => {
//     setShowDeck(false);
//     setSelectedCards(getRandom(cards, 8));
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

//   console.log('cartas seleccionadas', selectedCards);
//   console.log('realmente seleccionadas', seleccionadas);

//   return (
//     <div className="card-reverse-container">
//       {showDeck ? (
//         <div className="card-reverse deck" onClick={handleDeckClick}></div>
//       ) : (
//         <div className="card-circle-reverse">
//           {selectedCards.map((card, index) => (
//             <div
//               className="card-reverse"
//               key={index}
//               style={{
//                 transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${
//                   index * (360 / selectedCards.length)
//                 }deg)`,
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* <Cards seleccionadas={seleccionadas} /> */}
//     </div>
//   );
// };

// export default CardsReverse;
