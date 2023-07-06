import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import ButtonFavorites from '../../components/ButtonFavorites.css/ButtonFavorites.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import StarD from '../../components/StarD/StarD.jsx'
import Comment from '../../components/Comment/Comment.jsx'


function Result() {
  return (
    <div className='result'>
      <Logo/>
      <StarD />
      <Cards />
      <Comment />
      <ButtonFavorites />
      
    </div>
  )
}

export default Result
