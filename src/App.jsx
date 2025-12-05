// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Appoinment from './pages/Appoinment'



function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appoinment' element={<Appoinment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
