import React, { useEffect, useRef } from 'react';

const Contact = ({ id }) => {
  // Refs for scroll animations
  const headingRef = useRef(null);
  const infoCardRef = useRef(null);
  const addressRef = useRef(null);
  const hoursRef = useRef(null);
  const contactRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class based on data attribute
          const animationType = entry.target.dataset.animation;
          entry.target.classList.add(animationType);
          animationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    if (headingRef.current) {
      animationObserver.observe(headingRef.current);
    }
    if (infoCardRef.current) {
      animationObserver.observe(infoCardRef.current);
    }
    if (addressRef.current) {
      animationObserver.observe(addressRef.current);
    }
    if (hoursRef.current) {
      animationObserver.observe(hoursRef.current);
    }
    if (contactRef.current) {
      animationObserver.observe(contactRef.current);
    }
    if (buttonsRef.current) {
      animationObserver.observe(buttonsRef.current);
    }
    if (socialRef.current) {
      animationObserver.observe(socialRef.current);
    }

    return () => {
      // Cleanup
      if (headingRef.current) animationObserver.unobserve(headingRef.current);
      if (infoCardRef.current) animationObserver.unobserve(infoCardRef.current);
      if (addressRef.current) animationObserver.unobserve(addressRef.current);
      if (hoursRef.current) animationObserver.unobserve(hoursRef.current);
      if (contactRef.current) animationObserver.unobserve(contactRef.current);
      if (buttonsRef.current) animationObserver.unobserve(buttonsRef.current);
      if (socialRef.current) animationObserver.unobserve(socialRef.current);
    };
  }, []);

  return (
    <section id={id} className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-cream to-cream/80 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 
          ref={headingRef} 
          data-animation="animate-fade-down"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <span className="text-wine dark:text-wine/90">Connect</span> <span className="text-olive dark:text-cream">With Us</span>
        </h2>
        
        {/* Info Card - Now full width since map is removed */}
        <div 
          ref={infoCardRef}
          data-animation="animate-fade-right"
          className="w-full bg-white/90 dark:bg-gray-800/90 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl opacity-0 transform translate-x-8 transition-all duration-700 ease-out backdrop-blur border-l-4 border-wine"
        >
          <h3 className="text-3xl font-bold mb-8 text-wine dark:text-wine/90 border-b-2 border-wine/20 pb-4">
          Our Headquarters</h3>
          
          <div 
            ref={addressRef}
            data-animation="animate-fade-up"
            className="mb-8 opacity-0 transform translate-y-8 transition-all duration-500 ease-out delay-100"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-wine dark:text-wine/90 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">Address</h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Mi Amore Pizzaria, <br />
                B - 23, Block A,<br />
                Sector 99, Noida, Uttar Pradesh 201301  
                </p>
              </div>
            </div>
          </div>
          
          <div 
            ref={hoursRef}
            data-animation="animate-fade-up" 
            className="mb-8 opacity-0 transform translate-y-8 transition-all duration-500 ease-out delay-200"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-wine dark:text-wine/90 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                  <p>Monday</p>
                  <p>12:00 PM - 11:00 PM</p>
                  <p>Tuesday</p>
                  <p>Closed</p>
                  <p>Wednesday-Sunday</p>
                  <p>12:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={contactRef}
            data-animation="animate-fade-up"
            className="mb-10 opacity-0 transform translate-y-8 transition-all duration-500 ease-out delay-300"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-wine dark:text-wine/90 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">Contact</h4>
                <div className="space-y-1">
                  <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    Phone: 
                    <a 
                      href="tel:9220447592, 9220807592" 
                      className="text-wine dark:text-wine/90 hover:underline font-medium">
                      922-044-7592 , 922-080-7592
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    Email: 
                    <a 
                      href="mailto:miamorepazzaria@gmail.com" 
                      className="text-wine dark:text-wine/90 hover:underline font-medium">
                      miamorepazzaria@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={buttonsRef}
            data-animation="animate-fade-up"
            className="flex flex-wrap gap-4 opacity-0 transform translate-y-8 transition-all duration-500 ease-out delay-400"
          >
            <a 
              href="https://www.swiggy.com/city/noida-1/mi-amore-pizzaria-golf-course-rest1046353" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-wine text-white px-6 py-3 rounded-full hover:bg-wine/80 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Order on Swiggy
            </a>
            <a 
              href="https://link.zomato.com/xqzv/rshare?id=10155254230563862" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-olive text-white px-6 py-3 rounded-full hover:bg-olive/80 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Order on Zomato
            </a>
          </div>
          
          <div 
  ref={socialRef}
  data-animation="animate-fade-up"
  className="mt-12 pt-8 border-t-2 border-gray-100 dark:border-gray-700 opacity-0 transform translate-y-8 transition-all duration-500 ease-out delay-500"
>
  <h4 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
    <span>Follow Our Journey</span>
    <div className="h-1 bg-wine flex-grow rounded-full"></div>
  </h4>
  <div className="flex gap-6">
    <a 
      href="https://www.facebook.com/profile.php?id=61573133966873" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-700 p-3 rounded-full text-wine dark:text-white hover:bg-wine hover:text-white dark:hover:bg-wine transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      aria-label="Facebook"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </a>
    <a 
      href="https://www.instagram.com/miamorepizzaria01/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-700 p-3 rounded-full text-wine dark:text-white hover:bg-wine hover:text-white dark:hover:bg-wine transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      aria-label="Instagram"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
    </a>
    <a 
      href="https://wa.me/919220447592" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-700 p-3 rounded-full text-wine dark:text-white hover:bg-wine hover:text-white dark:hover:bg-wine transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      aria-label="WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
  </div>
</div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-fade-down {
          animation: fadeDown 0.8s ease forwards;
        }
        
        .animate-fade-right {
          animation: fadeRight 0.8s ease forwards;
        }
        
        .animate-fade-left {
          animation: fadeLeft 0.8s ease forwards;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
      `}</style>
    </section>
  );
};

export default Contact;