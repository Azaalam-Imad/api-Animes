
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Index'
import { MyProvider } from './context/Context'
import HomeD from './pages/Home/[id]'
import Navbar from './component/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <>
 <MyProvider>
  <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mal_id" element={<HomeD />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
 </MyProvider>
    
    
    </>
  )
}

export default App
