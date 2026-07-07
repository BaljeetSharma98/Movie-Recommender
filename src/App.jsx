import { MovieCard } from './components/MovieCard'
import './css/App.css'
import Home from './pages/Home'
import {Favorites}  from './pages/Favorites'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { MovieProider } from './contexts/MovieContext'


function App() {
  
  return (
    <MovieProider>
      <NavBar />

    
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
      </MovieProider>
  )
}

export default App
