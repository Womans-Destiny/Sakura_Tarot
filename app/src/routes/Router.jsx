import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import '../index.css';
import Home from '../pages/Home/Home';
import Result from '../pages/Result/Result.jsx';
import Game from '../pages/Game/Game.jsx';
import Favorites from '../pages/Favorites/Favorites.jsx';


/*const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/result',
    element: <Result />
  },
  {
    path: '/game',
    element: <Game />
  },
  {
    path: '/favorites',
    element: <Favorites />
  }
])*/

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </BrowserRouter>
  )}

export default Router
