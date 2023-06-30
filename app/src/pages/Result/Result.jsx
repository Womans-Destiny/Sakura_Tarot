
import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import Cards from '../../components/Cards/Cards.jsx'
import ButtonFavorites from '../../components/ButtonFavorites/ButtonFavorites.jsx'
import Comment from '../../components/Comment/Comment.jsx'


function Result() {
  return (
    <div className='result'>
      <Logo/>
      <Cards />
      <Comment />
      <ButtonFavorites />     
    </div>
  )
}

export default Result
