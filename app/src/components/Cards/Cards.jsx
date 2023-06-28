import React, { useState, useEffect } from 'react'
import './Cards.css'

function Cards() {
    const[id, setId] = useState ([])
    const[spanishName, setSpanishName] = useState ([])
    const[sakuraCard, setSakuraCard] = useState ([])
    const[meaning, setMeaning] = useState ([])
    useEffect(()=>{
        fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
         .then((response) =>response.json())
         .then((data)=>{
            const id= data.map(cards => cards.id)
            const spanishName= data.map(cards => cards.spanishName)
            const sakuraCard= data.map(cards => cards.sakuraCard)
            const meaning= data.map(cards => cards.meaning)
            setSpanishName(spanishName)
            setSakuraCard(sakuraCard)
            setMeaning(meaning)
         })

         .catch(error =>console.log(error))
    },[])
  return (
    <div>
    <div className="card" >
  <img src="https://i.ibb.co/k5HVTP7/Viento-Sakura.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{spanishName.map((name)=>(
        <p key={name}>{name}</p>
    ))}</h5>
    <p className="card-text"></p>
  </div>
</div>
</div>
  )
}

export default Cards
