import React from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import './home.css'
import Button from '../../components/Button/Button.jsx'
import Presentation from '../../components/Presentation/Presentation.jsx'

function Home() {
  return (
    <div className='home'>
      <div >
        <Logo/>
        <Presentation />
        <Button />
      </div>
    </div>
  )
}

export default Home
