import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CityDetails from './components/CityDetails'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/details' element={<CityDetails />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
