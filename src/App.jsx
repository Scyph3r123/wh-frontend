import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
