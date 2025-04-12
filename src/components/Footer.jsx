import React, { useRef, useEffect } from 'react';

const Footer = ({ darkMode }) => {
  const footerRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContentRef = useRef(null);
  const newsletterRef = useRef(null);

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
    if (newsletterRef.current) animationObserver.observe(newsletterRef.current);

    return () => {
      if (footerRef.current) animationObserver.unobserve(footerRef.current);
      if (topContentRef.current) animationObserver.unobserve(topContentRef.current);
      if (bottomContentRef.current) animationObserver.unobserve(bottomContentRef.current);
      if (newsletterRef.current) animationObserver.unobserve(newsletterRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated success
    alert("Thank you for subscribing! You'll receive our latest news and special offers.");
    e.target.reset();
  };

  return (
    <footer className="relative bg-cream dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-12 sm:pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-5 dark:opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-current text-wine">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C28.2 90 10 71.8 10 50S28.2 10 50 10s40 18.2 40 40-18.2 40-40 40z"></path>
          <path d="M43.3 30c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18.4-8c0 3.7-1.3 7.2-3.5 10l7.7 7.7c4.4-4.6 7.1-10.9 7.1-17.7 0-6.9-2.7-13.1-7.1-17.7L58.2 32c2.2 2.7 3.5 6.2 3.5 10z"></path>
          <path d="M56.7 60c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM35 44.3c0-3.7 1.3-7.2 3.5-10l-7.7-7.7C26.3 31.2 23.6 37.5 23.6 44.3c0 6.9 2.7 13.1 7.1 17.7l7.7-7.7c-2.1-2.7-3.4-6.2-3.4-10z"></path>
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 w-40 sm:w-64 h-40 sm:h-64 opacity-5 dark:opacity-10">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-10 pb-8 opacity-0 transform translate-y-8"
        >
          {/* Logo & About - Full width on mobile, responsive on larger screens */}
          <div className="space-y-6">
            <div>
              <a href="#home" className="inline-block">
                <div className="flex items-center space-x-2">
                  <div className="text-wine dark:text-wine/90 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-wine dark:text-wine/90">Mi Amore</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 font-serif tracking-wider">RISTORANTE ITALIANO</span>
                  </div>
                </div>
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Experience authentic Italian cuisine crafted with passion, tradition, and the finest ingredients. Our menu celebrates the rich culinary heritage of Italy.
            </p>

            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info - Hide on smallest screens, show on 2-column and up layouts */}
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
                  <p className="text-sm">123 Culinary Avenue, Gourmet District</p>
                  <p className="text-sm">Foodie City, FC 54321</p>
                </div>
              </li>

              <li className="flex items-center">
                <div className="flex-shrink-0 text-wine dark:text-wine/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:9220447592" className="ml-3 text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                  922-044-7592
                </a>
              </li>

              <li className="flex items-center">
                <div className="flex-shrink-0 text-wine dark:text-wine/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:info@miamore-restaurant.com" className="ml-3 text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors">
                  info@miamore-restaurant.com
                </a>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 text-wine dark:text-wine/90 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-gray-600 dark:text-gray-400">
                  <p className="text-sm">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p className="text-sm">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p className="text-sm">Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links - Only show on larger screens (lg) */}
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
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-wine dark:hover:text-wine/90 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-wine/70 dark:text-wine/50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter - Full width on mobile, responsive on larger screens */}
          <div className="space-y-6">
            <div 
              ref={newsletterRef}
              data-animation="animate-fade-left" 
              className="opacity-0 transform translate-x-8"
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-wine/50 rounded-full"></span>
              </h4>

              <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 text-sm">
                Subscribe to our newsletter for special offers, new menu items, and events.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-wine dark:focus:ring-wine/70 focus:border-transparent outline-none transition-all shadow-sm"
                    placeholder="Your email address"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-wine hover:bg-wine/90 text-white font-medium py-2.5 sm:py-3 px-4 text-sm rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
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
}

export default Footer;