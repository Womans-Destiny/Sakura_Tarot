import './Button.css'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <button className="button">
        <Link to="/game" className='textButton'>CONSULTAR CARTAS CLOW</Link>
    </button>
  )
}

export default Button