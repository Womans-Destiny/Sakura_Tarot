import Logo from '../../components/Logo/Logo.jsx'
import './home.css'
import '../../components/Presentation/Presentation.css'
import Button from '../../components/Button/Button.jsx'
import Presentation from '../../components/Presentation/Presentation.jsx'
import StarD from '../../components/StarD/StarD.jsx'

function Home() {
  return (
    <div className='home'>
        <Logo/>
        <StarD />
        <Presentation />
        <Button />
      </div>
  )
}

export default Home