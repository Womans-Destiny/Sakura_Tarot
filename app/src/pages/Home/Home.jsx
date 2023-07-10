import Presentation from '../../components/Presentation/Presentation.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import './home.css'
import '../../components/Presentation/Presentation.css'
import Button from '../../components/Button/Button.jsx'
import StarD from '../../components/starD/StarD.jsx'
import Botoncito from '../../components/botoncito/botoncito.jsx'


function Home() {
  return (
    <div className='home'>
        <Logo/>
        <StarD/>
        <Presentation/> 
        <Button/>
        <Botoncito className={'color'}text={'Rafaela lo logro'} link={'/game'}/>
      </div>
  )
}

export default Home