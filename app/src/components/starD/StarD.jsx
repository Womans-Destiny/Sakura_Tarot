
import React from 'react'
import star from '../../assets/starD.png'
import './starD.css'
import { Link } from 'react-router-dom';

function StarD () {
  return (
    <div>
    <Link to="Favorites">
      <img className="starD" src={star} alt= "Favorites Star Icon" />
    </Link>
    </div>

  )
}

export default StarD


