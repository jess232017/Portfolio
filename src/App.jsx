import React, { Suspense } from 'react';

import Hero from './components/Hero';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';

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
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Hero2 />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;