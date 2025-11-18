import React from 'react';
import { Link } from 'react-router';

const TopRatedSlide = () => {
  return (
    <div className="hero h-full rounded-xl shadow-2xl" >
         
     
      <div className="hero-overlay bg-gradient-to-r from-indigo-400 to-cyan-400  rounded-xl"></div>
      
      <div className="hero-content text-center text-neutral-content p-8">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            🌟 TOP CUSTOMER RATED!
          </h1>
          <p className="mb-8 text-xl font-medium text-gray-100">
            Experience premium quality and endless creativity with our best-selling toys.
          </p>
          <Link target="_blank" to='https://www.amazon.com/Best-Sellers-Toys-Games/zgbs/toys-and-games'> <button className="btn btn-info btn-lg rounded-lg shadow-lg">
            View Bestsellers
          </button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default TopRatedSlide;