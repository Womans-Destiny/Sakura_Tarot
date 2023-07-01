import './ButtonRestart.css';
import { Link } from 'react-router-dom';

function ButtonRestart() {
  return (
    <button className="buttonRestart">
        <Link to="/favorites" className='textButtonRestart'>REINICIAR</Link>
    </button>
  )
}

export default ButtonRestart;