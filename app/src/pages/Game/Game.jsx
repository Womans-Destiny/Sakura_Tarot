
import './game.css'
import Logo from '../../components/Logo/Logo.jsx'
import CardsReverse from '../../components/CardsReverse/CardsReverse'
import Botoncito from '../../components/botoncito/botoncito'
 



function Game() {
  return (
    <div className='game'>
      <Logo/>
      <CardsReverse />
      <Botoncito className={'verde'}text={'Ahora este es otro botoncito'} link={'/home'}/>
      

    </div>
  )
}

export default Game
