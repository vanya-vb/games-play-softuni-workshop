import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import UserProvider from './providers/UserProvider'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameCreate from './components/GameCreate/GameCreate'
import GameCatalog from './components/GameCatalog/GameCatalog'
import GameDetails from './components/GameDetails/GameDetails'
import GameEdit from './components/GameEdit/GameEdit'
import Logout from './components/Logout/Logout'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'

const Admin = lazy(() => import('./components/Admin/Admin'));

function App() {
    return (
        <UserProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<GameCatalog />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route element={<AuthGuard />}>
                            <Route path='/games/create' element={<GameCreate />} />
                            <Route path='/games/:gameId/edit' element={<GameEdit />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route element={<GuestGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                        <Route path='/admin' element={(
                            <Suspense fallback={<p>Loading...</p>}>
                                <Admin />
                            </Suspense>
                        )} />
                    </Routes>

                </main>
            </div>
        </UserProvider>
    )
}

export default App
