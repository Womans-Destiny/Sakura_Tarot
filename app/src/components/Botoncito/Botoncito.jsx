import { Link } from "react-router-dom"
import './botoncito.css'
import { useEffect, useState } from "react"
import { getAllCards } from '../../services/cards'

function Botoncito(props) {
    const getAllCards = async () => {
    const [cardData, setCardData] = useState([])
    

    useEffect(() =>{
        getAllCards() .then((data) =>{
            const rafaela = data
            setCardData(rafaela)
         })

            
        }, [])

  return (

    <Link to={props.link}>
    <button className={props.className}>{props.text}</button>
    </Link>
    
  )
}

export default Botoncito