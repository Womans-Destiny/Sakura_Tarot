
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App'
import '../index.css'
import Result from '../pages/Result/Result.jsx'
import Game from '../pages/Game/Game.jsx'
import Favorites from '../pages/Favorites/Favorites.jsx'
import Home from '../pages/Home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Route>
        <Route path='/' element={<App />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Route>
    </BrowserRouter>
  )}

export default Router