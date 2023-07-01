
import Logo from '../../components/Logo/Logo.jsx'
import './Result.css'
import Cards from '../../components/Cards/Cards.jsx'
import Comment from '../../components/Comment/Comment.jsx'
import ButtonFavorites from '../../components/ButtonFavorites/ButtonFavorites.jsx'
import ButtonRestart from '../../components/ButtonRestart/ButtonRestart.jsx'

function Result() {
  return (
    <div className='result'>
      <Logo/>
      <Cards />
      <Comment />
      <ButtonFavorites />
      <ButtonRestart />
    </div>
  )
}

export default Result
