import './ButtonGame.css';
import { Link } from 'react-router-dom';

function ButtonGame() {
  return (
    <button className="buttonGame">
        <Link to="/result" className='textButtonGame'>DESCUBRIR MI TIRADA</Link>
    </button>
  )
}

export default ButtonGame

