import Favourites from './components/Favourites'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieSlider from './components/MovieSlider'
import Home from './components/Home'
import './css/App.css'

function App() {
  return (
    <main>
      <Navbar/>
      <div className='main-content'>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/movielist' element={<MovieSlider/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </div>
    </main>
  )
}

export default App
