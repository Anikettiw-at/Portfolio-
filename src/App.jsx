import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import About from './components/About/About';
import Services from './components/Servic/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>
    
    </div>
  )
}

export default App;
