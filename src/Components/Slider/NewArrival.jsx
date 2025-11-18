import React from 'react';
import { Link } from 'react-router';

const NewArrivalSlide = () => {
  const handleShopNow = () => {
    console.log("Navigating to New Arrivals page...");
  };

 
 

  return (
    <div className="hero h-full w-full rounded-b-xl shadow-2xl overflow-hidden" 
         >
      
     
      <div className="hero-overlay bg-gradient-to-r from-blue-600/60 to-purple-500/60 rounded-b-xl"></div>
      
      <div className="hero-content text-center text-neutral-content p-8">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-extrabold text-white tracking-wide">
            🎉 NEW TOYS HAVE ARRIVED!
          </h1>
          <p className="mb-8 text-xl font-medium text-gray-100">
            Explore our exciting range of educational and action-packed toys today!
          </p>
          <Link target="_blank" to='https://kiddylandbd.com/'><button onClick={handleShopNow} className="btn btn-warning btn-lg shadow-xl font-bold transform hover:scale-105 transition duration-300">
            Explore Collection →
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSlide;