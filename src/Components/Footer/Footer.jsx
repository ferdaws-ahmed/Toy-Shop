import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <footer className={`transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col gap-6">

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img 
              src={logo} 
              alt="Toy Shop Logo" 
              className="w-16 h-16 rounded-full shadow-lg border-2 border-white/30"
            />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Toy<span className="text-yellow-300">Shop</span>
              </h2>
              <p className={`max-w-md text-center md:text-left mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-100'}`}>
                Discover joy, creativity, and endless fun with our collection of toys — made for every little dreamer!
              </p>
            </div>
          </div>

          {/* Right: Links + Social */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
              <a href="/terms"  className="hover:text-yellow-300 transition-colors duration-300">Terms & Conditions</a>
              <a href="/privacy"  className="hover:text-yellow-300 transition-colors duration-300">Privacy Policy</a>
              <a href="/about" className="hover:text-yellow-300 transition-colors duration-300">About Us</a>
              <a href="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</a>
            </div>

            <div className="flex gap-3 text-xl mt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-blue-600/40 transition duration-300 hover:text-white"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-pink-500/40 transition duration-300 hover:text-white"><FaInstagram /></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-sky-400/40 transition duration-300 hover:text-white"><FaTwitter /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-red-500/40 transition duration-300 hover:text-white"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <p className={`text-center text-sm mt-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-100'}`}>
          © {year} ToyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
