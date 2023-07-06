import { useRef } from 'react'
import './window.css'

function Window() {
    const dateRef = useRef(new Date().toLocaleDateString());
    const comment = 'Este es tu comentario'
    const reading = 'Esta es tu lectura ->'
    const myData = localStorage.getItem('cardData');
    console.log(myData); 

  return (
    <div className='windowF'>
        <h2 className='delete'>X</h2>
        <h1 className='date'> {dateRef.current}</h1>
        <p className='comment'><strong>{comment}:</strong> Esta lectura hace que a pesar de la abrumación que siento me de fuerzas para seguir adelante.</p>
        <p className='comment'><strong>{reading}<br/> Pasado:</strong> Esta carta simboliza cambio, apariencia, adaptación.<br/> <strong>Presente:</strong> Representa la salud, el comienzo de un amor, o el florecimiento de algo.<br/><strong> Futuro: </strong>Simboliza la esperanza, las ganas, la alegría. </p>

    </div>
  )
}

export default Window

// import { useRef, useEffect } from 'react';
// import localforage from 'localforage';
// import './window.css';

// function Window() {
//   const dateRef = useRef(new Date().toLocaleDateString());
//   const comment = 'Este es tu comentario';
//   const reading = 'Esta es tu lectura';

//   useEffect(() => {
//     localforage.getItem('cardData')
//       .then((myData) => {
//         console.log(myData);
//         console.log('randomCards');
//         // Aquí puedes hacer lo que necesites con los datos obtenidos de LocalForage
//       })
//       .catch((error) => {
//         console.error('Error al obtener los datos de LocalForage:', error);
//       });
//   }, []);

//   return (
//     <div className='windowF'>
//       <h1 className='date'>fecha: {dateRef.current}</h1>
//       <p className='comment'><strong>{comment}:</strong></p>
//       <p className='comment'>{reading}</p>
//     </div>
//   );
// }

// export default Window;