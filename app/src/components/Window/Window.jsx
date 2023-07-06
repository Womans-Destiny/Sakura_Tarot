import React from 'react'
import { useRef } from 'react'
import './window.css'

function Window() {
    const dateRef = useRef(new Date().toLocaleDateString());
    const comment = 'Este es tu comentario'
    const reading = 'Esta es tu lectura'

  return (
    <div className='windowF'>
        <h1>{dateRef.current}</h1>
        <p><strong>{comment}:</strong></p>
        <blockquote>{reading}</blockquote>
        //*{/*<button onClick={handleDelete}>Eliminar</button>*/}/


    </div>
  )
}

export default Window