import Presentation from '../../components/Presentation/Presentation.jsx'
import Logo from '../../components/Logo/Logo.jsx'
<<<<<<<<< Temporary merge branch 1
import './home.css'
import Button from '../../components/Button/Button.jsx'
import './home.css'


=========
import './home.css';
import Presentation from '../../components/Presentation/Presentation.jsx'
>>>>>>>>> Temporary merge branch 2

function Home() {
  return (
    <div className='home'>
        <Logo/>
<<<<<<<<< Temporary merge branch 1
        <Presentation />
=========
        <Presentation/>
>>>>>>>>> Temporary merge branch 2
        <Button />
    </div>
  )
}

export default Home