import Button from '../../components/Button/Button.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import './home.css';
import Presentation from '../../components/Presentation/Presentation.jsx'

function Home() {
  return (
    <div className='home'>
        <Logo/>
        <Presentation/>
        <Button />
      </div>
  )
}

export default Home