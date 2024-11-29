import { useEffect } from 'react';
import { initScrollReveal } from './utils/scrollReveal';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

