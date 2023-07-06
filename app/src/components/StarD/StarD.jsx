import { Link } from 'react-router-dom'
import './starD.css'
import starD from '../../assets/starD.svg'

function StarD() {
  return (
    <Link to="/favorites" className = "Star_container">
      <img className="star-favorites" src= {starD} alt= "Favorites Star Icon" />
    </Link>

  )
}

export default StarD