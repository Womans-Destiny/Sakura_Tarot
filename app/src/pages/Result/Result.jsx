import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import Cards from '../../components/Cards/Cards.jsx'
import ButtonFavorites from '../../components/ButtonFavorites/ButtonFavorites.jsx'
import StarD from '../../components/starD/StarD.jsx'
import ButtonRestart from '../../components/ButtonRestart/ButtonRestart.jsx'


function Result() {

  return (
    <div className='result'>
      <Logo />
      <Cards />
      <ButtonFavorites />
      <ButtonRestart />
      <StarD />

    </div>
  );
}

export default Result;
