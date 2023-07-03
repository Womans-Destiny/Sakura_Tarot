
import './game.css'
import Logo from '../../components/Logo/Logo.jsx'
import CardsReverse from '../../components/CardsReverse/CardsReverse'
import ButtonGame from '../../components/ButtonGame/ButtonGame'
import StarD from '../../components/starD/StarD'


function Game() {
  return (
    <div className='game'>
      <Logo/>
      <StarD/>
      <CardsReverse />
      <ButtonGame />
      
    </div>
  )
}

export default Game
