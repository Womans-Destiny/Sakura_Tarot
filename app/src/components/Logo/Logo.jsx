import React from 'react'
import logo from '../../assets/logo_desktop.svg'
import './Logo.css'

function Logo() {
  return (
    <div>
      <img className="logo-img" src={logo} alt="Logo Womans Destiny" />
    </div>
  )
}

export default Logo