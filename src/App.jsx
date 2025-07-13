import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Servic/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Foooter from './components/Foote/Foooter';

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Foooter/>
    
    </div>
  )
}

export default App;
