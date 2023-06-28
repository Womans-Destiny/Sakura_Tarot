import React from 'react'
import Logo from '../../components/Logo.jsx'
import Presentation from '../../components/Presentation/Presentation.jsx'



function Home() {
  return (
    <>
    <div className='home'>
      <div >
        <Logo/>
      </div>
      <div>
        <Presentation />
      </div>
    </div>
    </>
  )
}

export default Home
