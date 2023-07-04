
import './game.css'
import Logo from '../../components/Logo/Logo.jsx'
import CardsReverse from '../../components/CardsReverse/CardsReverse'
import StarD from '../../components/starD/StarD'


function Game() {
  return (
    <div className='game'>
      <Logo/>
      <StarD/>
      <CardsReverse />
      
      
    </div>
  )
}

export default Game
