import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { UserContext } from './contexts/UserContext'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Logout from './components/Logout/Logout'
import GameCreate from './components/GameCreate/GameCreate'
import GameCatalog from './components/GameCatalog/GameCatalog'
import GameDetails from './components/GameDetails/GameDetails'
import GameEdit from './components/GameEdit/GameEdit'
import usePersistedState from './hooks/usePersistedState'

import './App.css'

function App() {
  const [authData, setAuthData] = usePersistedState('auth', {});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<GameCatalog />} />
            <Route path='/games/create' element={<GameCreate />} />
            <Route path='/games/:gameId/details' element={<GameDetails />} />
            <Route path='/games/:gameId/edit' element={<GameEdit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>

        </main>
      </div>
    </UserContext.Provider>
  )
}

export default App
