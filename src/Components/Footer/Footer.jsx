import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-10 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        
       
        <h2 className="text-3xl font-extrabold mb-3 tracking-wide">Toy<span className="text-yellow-300">Shop</span></h2>
        <p className="text-sm text-gray-100 mb-6 max-w-md mx-auto">
          Discover joy, creativity, and endless fun with our collection of toys — made for every little dreamer!
        </p>

        
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          
          <a target="_blank" href="https://www.iubenda.com/en/help/2859-terms-and-conditions-when-are-they-needed#:~:text=%E2%80%9CTerms%20and%20Conditions%E2%80%9D%20is%20the,%E2%80%9D%20or%20%E2%80%9CLegal%20Notes%E2%80%9D." className="text-sm font-medium hover:text-yellow-300 transition-colors duration-300">Terms & Conditions</a>
          <a target="_blank" href="https://www.privacypolicygenerator.info/" className="text-sm font-medium hover:text-yellow-300 transition-colors duration-300">Privacy Policy</a>
          <a target="_blank" href="https://dribbble.com/tags/about-us-page" className="text-sm font-medium hover:text-yellow-300 transition-colors duration-300">About Us</a>
          <a target="_blank" href="https://www.website.com/contact-us/?source=SC" className="text-sm font-medium hover:text-yellow-300 transition-colors duration-300">Contact</a>
        </div>

        
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-blue-200"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-pink-200"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-sky-200"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-red-200"><FaYoutube /></a>
        </div>

       
        <p className="text-sm text-gray-200 border-t border-white/20 pt-4">
          © {year} ToyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
