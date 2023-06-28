import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Result from './pages/Result/Result.jsx'
import Game from './pages/Game/Game.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
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
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
