import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'
import PromoOffer from './components/PromoOffer'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => {
    setIsReservationModalOpen(true);
  };

  const closeReservationModal = () => {
    setIsReservationModalOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home', 'menu', 'gallery', 'about', 'contact'];
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-cream dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar activeSection={activeSection} darkMode={darkMode} />
        <main>
          <Hero id="home" />
          <Menu id="menu" openReservationModal={openReservationModal} />
          <Gallery id="gallery" />
          <About id="about" />
          <Contact id="contact" openReservationModal={openReservationModal} />
        </main>
        
        <Footer darkMode={darkMode} />
      
        <ScrollToTop />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <PromoOffer 
          isReservationModalOpen={isReservationModalOpen} 
          closeReservationModal={closeReservationModal} 
        />
      </div>
    </div>
  )
}

export default App