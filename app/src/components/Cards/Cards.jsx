// import React, { useState, useEffect } from 'react';
// import './Cards.css'

// const titles = ['PASADO', 'PRESENTE', 'FUTURO'];

// function Card({selectedCards}) {
 
//   function handleCardFlip(selectedCards) {
//     const updatedCardData = selectedCards.map((card) => {
//       if (card.id === cardId) {
//         return {
//           ...card,
//           isFlipped: !card.isFlipped,
//         };
//       }
//       return card;
//     });
//     setCardData(updatedCardData);
//   }

//   return (
//     <div className='container-result'>
//       {selectedCards.map((card) => (
//         <div
//           className={`card ${card.isFlipped ? 'flipped' : ''}`}
//           key={card.id}
//           onClick={() => handleCardFlip(card.id)}
//         >
//            <h6 className="card-position">{card.title}</h6>
//           <div className="card-front">
//             <img
//               src={card.isFlipped ? card.cardsReverse.sakuraReverse : card.sakuraCard}
//               className="card-img-top"
//               alt="..."
//             />
//           </div>
          
//           <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
//             {!card.isFlipped && (
//               <>
//                 <h5 className="card-title">{card.spanishName}</h5>
//                 <p className="card-text">{card.meaning}</p>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;

// import React, { useState } from 'react';
// import './Cards.css';

// const titles = ['PASADO', 'PRESENTE', 'FUTURO'];

// function Cards({ selectedCards }) {
//   console.log(selectedCards)
//   const [cardData, setCardData] = useState([]);

//   function handleCardFlip(cardId) {
//     const updatedCardData = selectedCards.map((card) => {
//       if (card.id === cardId) {
//         return {
//           ...card,
//           isFlipped: !card.isFlipped,
//         };
//       }
//       return card;
//     });
//     setCardData(updatedCardData);
//   }

//   return (
//     <div className='container-result'>
//       {selectedCards.map((card) => (
//         <div
//           className={`card ${card.isFlipped ? 'flipped' : ''}`}
//           key={card.id}
//           onClick={() => handleCardFlip(card.id)}
//         >
//           <h6 className="card-position">{card.title}</h6>
//           <div className="card-front">
//             <img
//               src={card.isFlipped ? card.cardsReverse.sakuraReverse : card.sakuraCard}
//               className="card-img-top"
//               alt="..."
//             />
//           </div>
//           <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
//             {!card.isFlipped && (
//               <>
//                 <h5 className="card-title">{card.spanishName}</h5>
//                 <p className="card-text">{card.meaning}</p>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;

import React from 'react';

const Cards = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>Cartas Seleccionadas:</h2>
      <ul>
        {data.map((card) => (
          <li key={card.id}>{card.spanishName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
