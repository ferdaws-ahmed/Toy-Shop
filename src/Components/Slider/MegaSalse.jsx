import React from 'react';
import { Link } from 'react-router';

const MegaSaleSlide = () => {
  return (
  
    <div className="hero h-full w-full rounded-b-xl shadow-2xl overflow-hidden" 
         style={{ backgroundImage: 'url(https://i.ibb.co/30B3P6n/slide-2-sale.jpg)' }}>
         
      
      <div className="hero-overlay bg-red-500 bg-opacity-40 rounded-b-xl"></div>
      
      <div className="hero-content text-center text-neutral-content p-8">
        <div className="max-w-3xl">
          <p className="text-2xl font-bold text-white mb-3">LIMITED TIME OFFER!</p>
          <h1 className="mb-5 text-7xl font-black tracking-tighter bg-yellow-300 text-black py-3 px-6 inline-block rounded-lg shadow-xl">
            UP TO 50% OFF
          </h1>
          <p className="mb-8 text-xl font-medium text-white mt-4">
            Don't miss out on massive discounts across all popular categories!
          </p>
          <Link target="_blank" to='https://abctoysbd.com/'><button className="btn btn-primary btn-lg rounded-full shadow-2xl font-extrabold">
            Grab The Deal
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default MegaSaleSlide;