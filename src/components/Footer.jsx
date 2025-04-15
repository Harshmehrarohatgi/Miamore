import React, { useRef, useEffect } from 'react';

const Footer = ({ darkMode }) => {
  const footerRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContentRef = useRef(null);

  useEffect(() => {
    // Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animation;
          entry.target.classList.add(animationType);
          animationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    if (footerRef.current) animationObserver.observe(footerRef.current);
    if (topContentRef.current) animationObserver.observe(topContentRef.current);
    if (bottomContentRef.current) animationObserver.observe(bottomContentRef.current);

    return () => {
      if (footerRef.current) animationObserver.unobserve(footerRef.current);
      if (topContentRef.current) animationObserver.unobserve(topContentRef.current);
      if (bottomContentRef.current) animationObserver.unobserve(bottomContentRef.current);
    };
  }, []);

  return (
    <footer className="relative bg-cream dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-12 sm:pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-0 dark:opacity-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-current text-wine">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C28.2 90 10 71.8 10 50S28.2 10 50 10s40 18.2 40 40-18.2 40-40 40z"></path>
          <path d="M43.3 30c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18.4-8c0 3.7-1.3 7.2-3.5 10l7.7 7.7c4.4-4.6 7.1-10.9 7.1-17.7 0-6.9-2.7-13.1-7.1-17.7L58.2 32c2.2 2.7 3.5 6.2 3.5 10z"></path>
          <path d="M56.7 60c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM35 44.3c0-3.7 1.3-7.2 3.5-10l-7.7-7.7C26.3 31.2 23.6 37.5 23.6 44.3c0 6.9 2.7 13.1 7.1 17.7l7.7-7.7c-2.1-2.7-3.4-6.2-3.4-10z"></path>
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 w-40 sm:w-64 h-40 sm:h-64 opacity-0 dark:opacity-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-current text-olive">
          <path d="M82.8 37.1c-1.5-6.8-7.8-10.4-13.7-7.8-5 2.2-8.9 5.8-11.5 10.4-1.4 2.6 1.9 5 4 3.1 3.5-3.2 7.6-6 12.7-6.8 4-0.7 7.6 1.3 8.5 5.5 1 4.6-1.4 8.4-4.8 11.1-4 3.2-8.8 4.8-13.6 6.4-9.5 3-17.1 8.8-22.5 17.2-1.2 1.9 0.9 4.1 2.9 3.3 2.5-1 5.1-1.4 7.8-0.9 4.5 0.9 8.2 3.8 12.1 6.3 5.7 3.6 12.1 5.7 18.9 4.1 6.9-1.6 12.3-6.3 16.1-12.1 4-6.2 7.3-13.2 6.5-20.7-0.5-4.7-2.1-9.1-4.8-12.8-1.3-1.8-3.9-1.1-4.5 0.9-1.3 4-2.6 8-3.9 12-0.4 1.2-0.8 2.3-1.2 3.5-0.5 1.6 1.7 2.8 2.9 1.7 3.2-3 6.8-5.7 10.7-7.5 6.5-3 10.5-9.1 9.5-16.2-1-7.1-6.6-12.2-13.6-12.7-8-0.6-15.1 2.8-20.9 8-1.8 1.6-0.3 4.4 1.9 3.9 5.4-1.2 10.9-1.8 16.5-0.9z"></path>
        </svg>
      </div>

      <div 
        ref={footerRef}
        data-animation="animate-fade-in"
        className="container mx-auto px-4 opacity-0"
      >
        {/* Main footer content - Responsive grid layout */}
        <div 
          ref={topContentRef}
          data-animation="animate-fade-up" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-10 pb-8 opacity-0 transform translate-y-8"
        >
          {/* Logo & About - Full width on mobile, responsive on larger screens */}
          <div className="space-y-6">
            <div>
              <a href="#home" className="inline-block">
                <div className="flex items-center">

                  {/* Icon */}
                  <div className="w-8 h-8 ml-2">
                    <img 
                      src="/icon.png" 
                      alt="Mi Amore Icon" 
                      className={`w-full h-full object-contain ${darkMode ? 'filter invert brightness-90' : ''}`}
                    />
                  </div>
                  {/* Logo */}
                  <div className="w-24 h-24">
                    <img 
                      src="/logoBlack.png" 
                      alt="Mi Amore Logo" 
                      className={`w-full h-full object-contain ${darkMode ? 'filter invert brightness-90' : ''}`}
                    />
                  </div>
                  
                </div>
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Experience authentic Italian cuisine crafted with passion, tradition, and the finest ingredients. Our menu celebrates the rich culinary heritage of Italy.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573133966873" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.instagram.com/miamorepizzaria01/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info section */}
          <div className="space-y-6">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-wine/50 rounded-full"></span>
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-wine dark:text-wine/90 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-gray-600 dark:text-gray-400">
                  <p className="text-sm">Mi Amore Pizzaria,</p>
                  <p className="text-sm">B - 23, Block A, Sector 99, Noida</p>
                  <p className="text-sm">Uttar Pradesh 201301</p>
                </div>
              </li>

              <li className="flex items-center">
                <div className="flex-shrink-0 text-wine dark:text-wine/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:9220447592" className="ml-3 text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                  922-044-7592, 922-080-7592
                </a>
              </li>

              <li className="flex items-center">
                <div className="flex-shrink-0 text-wine dark:text-wine/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:miamorepazzaria@gmail.com" className="ml-3 text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                miamorepazzaria@gmail.com
                </a>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 text-wine dark:text-wine/90 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-gray-600 dark:text-gray-400">
                  <p className="text-sm">Monday: 12:00 PM - 11:00 PM</p>
                  <p className="text-sm">Tuesday: Closed</p>
                  <p className="text-sm">Wednesday-Sunday: 12:00 PM - 11:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links section */}
          <div className="space-y-6 hidden sm:block">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-wine/50 rounded-full"></span>
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Italian separator element */}
        <div className="relative py-4 sm:py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-cream dark:bg-gray-900 px-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                <div className="h-2 w-2 bg-white rounded-full border border-gray-300 dark:border-gray-700"></div>
                <div className="h-2 w-2 bg-red-600 rounded-full"></div>
              </div>
            </span>
          </div>
        </div>

        {/* Bottom footer with responsive layout */}
        <div 
          ref={bottomContentRef}
          data-animation="animate-fade-up"
          className="pt-2 pb-6 sm:pb-8 text-center opacity-0 transform translate-y-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Mi Amore Ristorante. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-wine dark:hover:text-wine/90 transition-colors">Privacy Policy</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-wine dark:hover:text-wine/90 transition-colors">Terms of Service</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-wine dark:hover:text-wine/90 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Italian flag bottom border */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-red-600"></div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        
        .animate-fade-left {
          animation: fadeLeft 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;