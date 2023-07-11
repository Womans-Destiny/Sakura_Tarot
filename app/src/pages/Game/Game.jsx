import './game.css'
import Logo from '../../components/Logo/Logo.jsx'
<<<<<<< HEAD
import StarD from '../../components/StarD/StarD'
import Cards from '../../components/Cards/Cards'
=======
import CardsReverse from '../../components/CardsReverse/CardsReverse'
import Botoncito from '../../components/botoncito/botoncito'
 


>>>>>>> 47c2b3ee6e21b623dafd53d0b2e790097fd84a61

function Game() {
  return (
    <div className='game'>
      <Logo/>
<<<<<<< HEAD
      <StarD />
      <Cards />
=======
      <CardsReverse />
      <Botoncito className={'verde'}text={'Ahora este es otro botoncito'} link={'/home'}/>
>>>>>>> 47c2b3ee6e21b623dafd53d0b2e790097fd84a61
      

    </div>
  )
}

export default Game

