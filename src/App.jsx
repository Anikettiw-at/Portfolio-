import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import About from './components/About/About';
import Services from './components/Servic/Services';
import MyWork from './components/MyWork/MyWork';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
    
    </div>
  )
}

export default App;
