import React, { Suspense } from 'react';

/*import About from './components/About';
import Contact from './components/Contact';
import Hero2 from './components/Hero2';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';*/


import Hero from './components/Hero';
import Header from './components/layout/Header';

const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Hero2 = React.lazy(() => import('./components/Hero2'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Skills = React.lazy(() => import('./components/Skills'));


import './assets/scss/style.scss';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Suspense fallback={<div>Cargando...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        <Hero2 />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;