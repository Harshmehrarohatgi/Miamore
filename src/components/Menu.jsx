import React, { useState, useEffect, useRef } from 'react'

const Menu = ({ id }) => {
  const [activeTab, setActiveTab] = useState('starters');
  const [showQRCode, setShowQRCode] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const buttonsRef = useRef(null);
  const tabsRef = useRef(null);
  const menuGridRef = useRef(null);
  const bannerRef = useRef(null);
  const legendRef = useRef(null);

  // Add animation effect when category changes
  useEffect(() => {
    setAnimatedItems([]);
    const timer = setTimeout(() => {
      setAnimatedItems(menuData[activeTab].map((_, i) => i));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Scroll trigger animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation);
          animationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    if (headerRef.current) animationObserver.observe(headerRef.current);
    if (buttonsRef.current) animationObserver.observe(buttonsRef.current);
    if (tabsRef.current) animationObserver.observe(tabsRef.current);
    if (menuGridRef.current) animationObserver.observe(menuGridRef.current);
    if (bannerRef.current) animationObserver.observe(bannerRef.current);
    if (legendRef.current) animationObserver.observe(legendRef.current);

    return () => {
      if (headerRef.current) animationObserver.unobserve(headerRef.current);
      if (buttonsRef.current) animationObserver.unobserve(buttonsRef.current);
      if (tabsRef.current) animationObserver.unobserve(tabsRef.current);
      if (menuGridRef.current) animationObserver.unobserve(menuGridRef.current);
      if (bannerRef.current) animationObserver.unobserve(bannerRef.current);
      if (legendRef.current) animationObserver.unobserve(legendRef.current);
    };
  }, []);

  const menuData = {
    starters: [
      {
        name: "Bruschetta Classica",
        description: "Toasted bread topped with fresh tomatoes, garlic, basil and extra virgin olive oil",
        price: "₹250",
        image: "https://images.unsplash.com/photo-1599675383234-1f7ea6495eb8?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        chefRecommended: true,
        popular: true
      },
      {
        name: "Arancini",
        description: "Crispy fried rice balls stuffed with mozzarella and peas",
        price: "₹300",
        image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and sweet basil with a balsamic glaze",
        price: "₹280",
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        newItem: true
      },
    ],
    pasta: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic Roman pasta with eggs, Pecorino Romano, pancetta and black pepper",
        price: "₹350",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        name: "Fettuccine Alfredo",
        description: "Homemade fettuccine in a rich, creamy Parmesan sauce",
        price: "₹380",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Penne Arrabbiata",
        description: "Penne pasta in spicy tomato sauce with garlic and red chili",
        price: "₹320",
        image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        chefRecommended: true
      },
      {
        name: "Lasagna Bolognese",
        description: "Layers of pasta, rich meat sauce, béchamel, and Parmigiano-Reggiano",
        price: "₹395",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        chefRecommended: true
      },
    ],
    pizza: [
      {
        name: "Margherita",
        description: "Classic pizza with tomato sauce, mozzarella, fresh basil, salt, and olive oil",
        price: "₹400",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        newItem: true
      },
      {
        name: "Quattro Formaggi",
        description: "Four cheese pizza with mozzarella, gorgonzola, fontina, and parmesan",
        price: "₹480",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        chefRecommended: true
      },
      {
        name: "Diavola",
        description: "Spicy pizza with tomato sauce, mozzarella, spicy salami, and chili flakes",
        price: "₹450",
        image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        popular: true
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
        price: "₹280",
        image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        chefRecommended: true,
        popular: true
      },
      {
        name: "Panna Cotta",
        description: "Silky vanilla cream dessert with mixed berry compote",
        price: "₹250",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Cannoli",
        description: "Crisp pastry tubes filled with sweet ricotta cream and chocolate chips",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1667804957652-565b39dcccd4?q=80&w=3213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        newItem: true
      },
    ],
    drinks: [
      {
        name: "Chianti Classico",
        description: "Medium-bodied red wine with notes of cherry and herbs",
        price: "₹550",
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        chefRecommended: true
      },
      {
        name: "Aperol Spritz",
        description: "Classic Italian aperitif with Aperol, Prosecco, and soda water",
        price: "₹320",
        image: "https://images.unsplash.com/photo-1682159173219-b0d72e875b25?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
      },
      {
        name: "Espresso",
        description: "Rich, concentrated coffee served in a small cup",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
    ]
  };

  const openReservationModal = () => {
    alert('Reservation modal opened!');
  };

  return (
    <section id={id} className="py-24 px-4 bg-gradient-to-b from-cream/70 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto">
        {/* Header with scroll animation */}
        <div 
          ref={headerRef}
          data-animation="animate-fade-down" 
          className="mb-12 opacity-0 transform -translate-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-3 text-center">
            <span className="text-wine dark:text-wine/90 relative">
              Our Menu
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-wine/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto text-lg">
            Experience authentic Italian flavors, handcrafted with passion and tradition
          </p>
          <div className="flex justify-center">
            <div className="h-0.5 w-24 bg-olive/50 rounded-full"></div>
          </div>
        </div>
        
        {/* QR Code and Download Options */}
        <div 
          ref={buttonsRef}
          data-animation="animate-fade-up"
          className="flex flex-col sm:flex-row justify-center gap-5 mb-12 opacity-0 transform translate-y-8"
        >
          <a 
            href="/menu1.pdf" 
            download="Mi_Amore_Menu.pdf"
            className="flex items-center justify-center gap-2 bg-wine hover:bg-wine/90 text-white px-7 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-wine/20 hover:shadow-xl font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            Download Menu PDF
          </a>
          
          <button 
            onClick={() => setShowQRCode(!showQRCode)}
            className="flex items-center justify-center gap-2 bg-olive hover:bg-olive/90 text-white px-7 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-olive/20 hover:shadow-xl font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            {showQRCode ? 'Hide QR Code' : 'Scan QR Menu'}
          </button>
        </div>
        
        {/* QR Code Modal with animation */}
{showQRCode && (
  <div className="mb-12 flex justify-center animate-scale-up">
    <div className="bg-white dark:bg-gray-700/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
      <h3 className="text-2xl font-bold text-wine dark:text-wine/90 mb-5">Scan to View Menu</h3>
      <div className="bg-white p-4 rounded-lg inline-block mb-4 shadow-inner">
        {/* Real QR code image from public folder */}
        <div className="relative w-56 h-56 animate-pulse-subtle">
          <img 
            src="/menu.jpeg" 
            alt="Mi Amore Menu QR Code" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 border-2 border-wine/20 rounded-lg"></div>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Scan this QR code with your phone camera to view our full menu with photographs and seasonal specials
      </p>
      <button 
        onClick={() => setShowQRCode(false)}
        className="text-wine dark:text-wine/90 hover:text-wine/70 dark:hover:text-wine/70 font-medium px-4 py-2 rounded-lg border border-wine/30 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
)}
        {/* Menu Legend with scroll animation */}
        <div 
          ref={legendRef}
          data-animation="animate-fade-in"
          className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 opacity-0"
        >
          <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full">
            <div className="w-5 h-5 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-gray-800 dark:text-gray-100 font-medium">Chef's Pick</span>
          </div>
          <div className="flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full">
            <div className="w-5 h-5 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-800 dark:text-gray-100 font-medium">Popular Choice</span>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
            <div className="w-5 h-5 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-800 dark:text-gray-100 font-medium">New Item</span>
          </div>
        </div>

        {/* Menu Tabs with scroll animation */}
        <div 
          ref={tabsRef} 
          data-animation="animate-slide-up"
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-14 opacity-0 transform translate-y-8"
        >
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-3 rounded-full capitalize transition-all duration-500 transform ${
                activeTab === category
                  ? 'bg-wine text-white scale-110 shadow-lg shadow-wine/20 font-bold'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:scale-105 shadow-md'
              }`}
            >
              {category}
              <span className={`ml-1 text-xs ${activeTab === category ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                ({menuData[category].length})
              </span>
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid with scroll animation */}
        <div 
          ref={menuGridRef}
          data-animation="animate-fade-in"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 opacity-0"
        >
          {menuData[activeTab].map((item, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 transform ${
                animatedItems.includes(index) 
                  ? 'translate-y-0 opacity-100 rotate-0' 
                  : 'translate-y-10 opacity-0 rotate-1'
              } hover:-translate-y-3 hover:rotate-0 border border-gray-100 dark:border-gray-700`}
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium text-lg">"Try our exquisite {item.name}"</p>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                  {item.chefRecommended && (
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-yellow-500/30 transform hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium">Chef's Pick</span>
                    </div>
                  )}
                  
                  {item.popular && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-red-500/30 transform hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium">Popular</span>
                    </div>
                  )}
                  
                  {item.newItem && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-green-500/30 transform hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium">New</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                  <span className="text-wine dark:text-wine/90 font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{item.description}</p>
                
                {/* Order Button with animation */}
                <button className="w-full bg-wine hover:bg-wine/90 text-white rounded-lg py-3 font-medium transition-all duration-300 transform hover:scale-102 flex justify-center items-center gap-2 shadow-md hover:shadow-wine/20 hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Weekend Special Banner with scroll animation */}
        <div 
          ref={bannerRef}
          data-animation="animate-fade-up"
          className="mt-20 bg-gradient-to-r from-wine to-wine/90 dark:from-wine/90 dark:to-wine/70 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative opacity-0 transform translate-y-12"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Chef's Special Weekend Menu</h3>
              <p className="mb-6 text-white/90 max-w-2xl">
                Every weekend, our chef prepares exclusive dishes that aren't on our regular menu. 
                Join us Friday through Sunday for a unique culinary experience with seasonal ingredients 
                and innovative flavor combinations!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={openReservationModal}
                  className="bg-white text-wine font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors duration-300 flex items-center gap-2 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Reserve a Table
                </button>
                <button className="bg-transparent text-white font-medium px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-300">
                  View Weekend Specials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-fade-down {
          animation: fadeDown 0.8s ease forwards;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-scale-up {
          animation: scaleUp 0.5s ease forwards;
        }
        
        .animate-pulse-subtle {
          animation: pulseSlight 2s infinite ease-in-out;
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
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulseSlight {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}

export default Menu