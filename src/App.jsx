import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'
import Hero from './components/Hero'
import Cars from './components/Cars'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Hero/>
      <Cars/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App