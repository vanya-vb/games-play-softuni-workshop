import { Routes, Route } from 'react-router'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameCreate from './components/GameCreate/GameCreate'
import GameCatalog from './components/GameCatalog/GameCatalog'
import './App.css'

function App() {

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<GameCatalog />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </main>
    </div>
  )
}

export default App
