import './favorites.css'
import Logo from '../../components/Logo/Logo'
import StarD from '../../components/StarD/StarD'
import Window from '../../components/Window/Window'
import ButtonFavorites from '../../components/ButtonFavorites/ButtonFavorites'
import ButtonRestart from '../../components/ButtonRestart/ButtonRestart'

function Favorites() {
  return (
    <div className='favorites'>
      <Logo/>
      <Window />
      <StarD />
      <ButtonFavorites />
      <ButtonRestart />
      
    </div>
  )
}

export default Favorites
