import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Contacts from './Components/Contacts'
import Projects from './Components/Projects';
import Footer from './Components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contacts/>
    <Footer/>

    </>
  )
}

export default App
