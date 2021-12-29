import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Header from './components/layout/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';

import './assets/scss/style.scss';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Hero2 />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;