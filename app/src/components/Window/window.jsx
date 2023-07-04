import React from 'react'
import './Window.css';

function Window() {
    const date = new Date().toLocaleDateString();
    const reading = 'Tu lectura';
    const comment = 'Tu comentario';
  return (
<div className="window">
    <div className="window-content">
      <h3>{date}</h3>
      <p>{reading}</p>
      <p>{comment}</p>
    </div>
  </div>
  )
}

export default Window