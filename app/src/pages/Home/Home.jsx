
import Logo from '../../components/Logo.jsx'
import Presentation from '../../components/Presentation/Presentation.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import './home.css'
import Button from '../../components/Button/Button.jsx'
import './home.css'



function Home() {
  return (
    <div className='home'>
        <Logo />
      <div >
        <Logo/>
        <Presentation />
        <Button />
      
      </div>
    
    </div>
  )
}

export default Home