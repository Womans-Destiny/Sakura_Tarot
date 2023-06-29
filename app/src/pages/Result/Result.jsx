import React from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import Cards from '../../components/Cards/Cards.jsx'
import Comment from '../../components/Comment/Comment.jsx'


function Result() {
  return (
    <div className='result'>
      <Logo/>
      <Cards />
      <Comment />
     
    </div>
  )
}

export default Result
