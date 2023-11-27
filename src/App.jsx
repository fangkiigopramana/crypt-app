import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vigenere from './Vigenere'
import Affine from './Affine'
import Playfair from './Playfair'
import Hill from './Hill'
import Home from './Home'
import Caesar from './Caesar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caesar" element={<Caesar />} />
          <Route path="/vigenere" element={<Vigenere />} />
          <Route path="/affine" element={<Affine />} />
          <Route path="/playfair" element={<Playfair />} />
          <Route path="/hill" element={<Hill />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
