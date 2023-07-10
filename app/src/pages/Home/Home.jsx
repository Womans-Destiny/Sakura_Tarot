import './home.css'
import Button from '../../components/Button/Button.jsx'
import Logo from '../../components/Logo/Logo'
import StarD from '../../components/StarD/StarD'
import Presentation from '../../components/Presentation/Presentation'

function Home() {
  return (
    <div className='home'>
        <Logo />
        <StarD />
        <Presentation />
        <Button />
      </div>
  )
}

export default Home