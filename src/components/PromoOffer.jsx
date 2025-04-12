import React, { useState, useEffect } from 'react';

const PromoOffer = ({ isReservationModalOpen, closeReservationModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  // For automatic promo popup
  useEffect(() => {
    if (!isReservationModalOpen) {
      // Only show automatic promo if reservation modal is not open
      const timer = setTimeout(() => {
        const hasSeenPromo = localStorage.getItem('miAmore_promoSeen');
        if (!hasSeenPromo) {
          setIsVisible(true);
          setIsAnimating(true);
        }
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isReservationModalOpen]);

  // For reservation modal
  useEffect(() => {
    if (isReservationModalOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      setIsClosed(false);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isReservationModalOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    // Only set localStorage if this is the promo popup, not the reservation modal
    if (!isReservationModalOpen) {
      localStorage.setItem('miAmore_promoSeen', 'true');
    }
    
    setTimeout(() => {
      setIsVisible(false);
      if (!isReservationModalOpen) {
        setIsClosed(true);
      } else {
        closeReservationModal();
      }
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationForm({ ...reservationForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your server
    alert(`Table reserved! We'll see you on ${reservationForm.date} at ${reservationForm.time}`);
    handleClose();
  };

  if (isClosed && !isReservationModalOpen) return null;

  return (
    <>
      {isVisible && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          ></div>

          <div 
            className={`relative max-w-md w-full transform transition-all duration-500 ease-in-out ${
              isAnimating ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
            }`}
          >
            <div className="relative">
              {/* Italian flag accent */}
              <div className="absolute -top-2 -left-2 w-full h-full">
                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-green-600 via-white to-red-600 rounded-l-lg"></div>
              </div>
              
              {/* Main card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border-2 border-wine/20 relative z-10">
                {/* Decorative pattern - inspired by Italian tiles */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23791f33' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  }}></div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  <button 
                    onClick={handleClose} 
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close promotion"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {isReservationModalOpen ? (
                    <>
                      {/* Reservation Form */}
                      <div className="text-center mb-6">
                        <div className="inline-block bg-wine/10 dark:bg-wine/20 p-3 rounded-full mb-4 border-2 border-dashed border-wine">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wine" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Prenota un Tavolo</h3>
                        <p className="text-wine dark:text-wine/90 font-medium mb-2">Reserve Your Table</p>
                        
                        <div className="absolute -top-1 -left-4 bg-wine text-white py-1 px-6 transform rotate-[-8deg] shadow-md border-b-2 border-wine/50">
                          <span className="text-sm font-bold tracking-wider italic">30% Off First Visit!</span>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              required
                              value={reservationForm.name}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              required
                              value={reservationForm.phone}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                            <input 
                              type="date" 
                              id="date" 
                              name="date" 
                              required
                              value={reservationForm.date}
                              onChange={handleInputChange}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                            />
                          </div>
                          <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
                            <select 
                              id="time" 
                              name="time" 
                              required
                              value={reservationForm.time}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                            >
                              <option value="">Select time</option>
                              <option value="11:30">11:30 AM</option>
                              <option value="12:00">12:00 PM</option>
                              <option value="12:30">12:30 PM</option>
                              <option value="13:00">1:00 PM</option>
                              <option value="13:30">1:30 PM</option>
                              <option value="19:00">7:00 PM</option>
                              <option value="19:30">7:30 PM</option>
                              <option value="20:00">8:00 PM</option>
                              <option value="20:30">8:30 PM</option>
                              <option value="21:00">9:00 PM</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Guests</label>
                            <select 
                              id="guests" 
                              name="guests" 
                              required
                              value={reservationForm.guests}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                            >
                              <option value="1">1 person</option>
                              <option value="2">2 people</option>
                              <option value="3">3 people</option>
                              <option value="4">4 people</option>
                              <option value="5">5 people</option>
                              <option value="6">6 people</option>
                              <option value="7+">7+ people</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Occasion (Optional)</label>
                            <select 
                              id="occasion" 
                              name="occasion" 
                              value={reservationForm.occasion}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                            >
                              <option value="">Select occasion</option>
                              <option value="birthday">Birthday</option>
                              <option value="anniversary">Anniversary</option>
                              <option value="business">Business Meal</option>
                              <option value="date">Date Night</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Special Requests (Optional)</label>
                          <textarea 
                            id="specialRequests" 
                            name="specialRequests" 
                            rows="3"
                            value={reservationForm.specialRequests}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm text-gray-800 dark:text-white focus:ring-wine focus:border-wine"
                            placeholder="Any special requests or dietary restrictions..."
                          ></textarea>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="promo" 
                            className="h-4 w-4 text-wine focus:ring-wine border-gray-300 rounded"
                            defaultChecked 
                          />
                          <label htmlFor="promo" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Apply 30% discount (first visit only)
                          </label>
                        </div>
                        
                        <div>
                          <button 
                            type="submit"
                            className="w-full bg-wine hover:bg-wine/90 text-white text-lg font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-wine/20 hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Confirm Reservation
                          </button>
                        </div>
                        
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400 italic mt-2">
                          Or call directly: <a href="tel:9220447592" className="text-wine dark:text-wine/90 font-medium">922-044-7592</a>
                        </p>
                      </form>
                    </>
                  ) : (
                    <>
                      {/* Promo Offer Content */}
                      <div className="text-center pt-6">
                        <div className="bg-wine/10 dark:bg-wine/20 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 border-2 border-dashed border-wine animate-pulse-slow">
                          <span className="text-wine dark:text-wine/90 text-3xl font-bold">30%</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">SCONTO SPECIALE</h3>
                        <p className="text-wine dark:text-wine/90 font-bold text-lg mb-4">Direct Contact Discount!</p>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                          Receive 30% off your first order when you reserve a table directly through our special line:
                        </p>
                        
                        <a href="tel:9220447592" className="block bg-wine text-white text-xl font-bold py-3 px-4 rounded-lg hover:bg-wine/90 transition-colors mb-3 tracking-wider shadow-lg hover:shadow-wine/20 hover:shadow-xl animate-shimmer">
                          922-044-7592
                        </a>
                        
                        <div className="space-y-1 text-center">
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Mention "MI AMORE ONLINE" when calling</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 italic">(Offer valid for first-time customers only)</p>
                        </div>
                      </div>
                      
                      {/* Ribbon */}
                      <div className="absolute -top-1 -left-4 bg-wine text-white py-1 px-6 transform rotate-[-8deg] shadow-md border-b-2 border-wine/50">
                        <span className="text-sm font-bold tracking-wider italic">Offerta Speciale!</span>
                      </div>
                    </>
                  )}
                  
                  {/* Italian flair at bottom */}
                  <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-green-600 via-white to-red-600"></div>
                </div>
              </div>
              
              {/* Pizza decorative element */}
              <div className="absolute -top-12 -right-6 w-20 h-20 bg-white dark:bg-gray-700 rounded-full shadow-lg p-2 border-2 border-yellow-500/50 transform rotate-12">
                <div className="w-full h-full rounded-full bg-yellow-100 dark:bg-yellow-900/50 overflow-hidden flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
                    <path fill="#e8c680" d="M32 2a30 30 0 100 60 30 30 0 000-60z"/>
                    <path fill="#d97706" d="M32 7a25 25 0 100 50 25 25 0 000-50z"/>
                    <circle fill="#e8c680" cx="20" cy="24" r="3"/>
                    <circle fill="#e8c680" cx="34" cy="18" r="3"/>
                    <circle fill="#e8c680" cx="27" cy="38" r="3"/>
                    <circle fill="#e8c680" cx="41" cy="35" r="2"/>
                    <circle fill="#e8c680" cx="15" cy="33" r="2"/>
                    <circle fill="#e8c680" cx="38" cy="46" r="2"/>
                    <circle fill="#e8c680" cx="44" cy="26" r="2"/>
                    <circle fill="#e8c680" cx="24" cy="15" r="2"/>
                  </svg>
                </div>
              </div>
              
              {/* Basil leaf decoration */}
              <div className="absolute -bottom-6 -left-4 transform rotate-12">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5C7.5 5 4 8.5 4 13C4 17.5 7.5 21 12 21C16.5 21 20 17.5 20 13C20 8.5 16.5 5 12 5Z" fill="#4ade80"/>
                  <path d="M12 21C12 17.5 12 13 12 9C12 7 13 5 15 4C17 3 19 3 20 3C20 5.5 16.5 9 12 9" stroke="#16a34a" strokeWidth="0.5"/>
                  <path d="M12 21C12 17.5 12 13 12 9C12 7 11 5 9 4C7 3 5 3 4 3C4 5.5 7.5 9 12 9" stroke="#16a34a" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, #791f33 0%, #942335 50%, #791f33 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
};

export default PromoOffer;