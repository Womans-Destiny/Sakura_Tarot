import './ButtonFavorites.css';
import { Link } from 'react-router-dom';

function ButtonFavorites() {
  return (
    <button className="buttonFavorites">
        <Link to="/favorites" className='textButtonFavorites'>GURDAR TIRADA</Link>
    </button>
  )
}



export default ButtonFavorites

