import { useRef } from 'react'
import './window.css'

function Window() {
    const dateRef = useRef(new Date().toLocaleDateString());
    const comment = 'Este es tu comentario'
    const reading = 'Esta es tu lectura'
    const myData = localStorage.getItem('cardData');
    console.log(myData); 

  return (
    <div className='windowF'>
        <h1 className='date'>fecha: {dateRef.current}</h1>
        <p className='comment'><strong>{comment}:</strong></p>
        <p className='comment'>{reading}</p>

    </div>
  )
}

export default Window