import React from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import Cards from '../../components/Cards/Cards.jsx'
import ButtonFavorites from '../../components/ButtonFavorites.css/ButtonFavorites.jsx'


function Result() {
  return (
    <div className='result'>
      <Logo/>
      <Cards />
      <ButtonFavorites />
    </div>
  )
}

export default Result
