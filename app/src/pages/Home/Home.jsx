import './home.css'
import Button from '../../components/Button/Button.jsx'
<<<<<<< HEAD
import Logo from '../../components/Logo/Logo'
import StarD from '../../components/StarD/StarD'
import Presentation from '../../components/Presentation/Presentation'
=======
import StarD from '../../components/starD/StarD.jsx'
import Botoncito from '../../components/botoncito/botoncito.jsx'

>>>>>>> 47c2b3ee6e21b623dafd53d0b2e790097fd84a61

function Home() {
  return (
    <div className='home'>
<<<<<<< HEAD
        <Logo />
        <StarD />
        <Presentation />
        <Button />
=======
        <Logo/>
        <StarD/>
        <Presentation/> 
        <Button/>
        <Botoncito className={'color'}text={'Rafaela lo logro'} link={'/game'}/>
>>>>>>> 47c2b3ee6e21b623dafd53d0b2e790097fd84a61
      </div>
  )
}

export default Home