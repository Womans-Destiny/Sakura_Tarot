
import './game.css'
import Logo from '../../components/Logo/Logo.jsx'
import CardsReverse from '../../components/CardsReverse/CardsReverse'



function Game() {
  return (
    <div className='game'>
      <Logo/>
      <CardsReverse />
      <ButtonGame />

    </div>
  )
}

export default Game
