import React from 'react'
import './Presentation.css';


function Presentation() {
  return (
    <>
    <div className='body-home'>
      <h1 className='informationHome'>¡Bienvenid@!</h1>
      <h3 className='infoAditionalHome'> Tirada de TAROT</h3>
        <span className='infoSpanBold'>Nuestra tirada de Tarot es una tirada simple pasado, presente y futuro gratis de tres cartas.</span> 
        <p className='infoAditionalHome'><span className='infoSpanBold'>Carta N° 1: Pasado.</span>  Esta carta representa tus emociones y sentimientos y cómo te sentías emocionalmente en el pasado.</p>
        <p className='infoAditionalHome'><span className='infoSpanBold'> Carta N° 2: Presente.</span>  Esta carta es lo que te afecta en el entorno directo actual. La que en la que vives.</p>
        <p className='infoAditionalHome'><span className='infoSpanBold'> Carta N° 3:  Futuro. </span>  Esta carta está relacionada con la respuesta a la pregunta que has formulado respecto de tu futuro.</p>
      <h2 className='informationHome'>¡Realiza tu tirada!</h2>
    </div>
</>
  )
}

export default Presentation