import React, { useEffect, useContext } from 'react';
import Slider from '../Slider/Slider';
import PopularToys from '../PopularToys/PopularToys';
import ShopByAge from '../ShopByAge/imgMarquee';
import FAQSection from '../FAQ/FAQsection';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext'; 
import Reviews from '../Reviews/Reviews';

const Home = () => {
  const location = useLocation();

  
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "🏠 | Home";
  }, [location.pathname]);

  return (
    <div
      className={`transition-colors duration-500 
        ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    >
      <Helmet key={location.pathname}>
        <title>🏠 | Home</title>
      </Helmet>

      <Slider />
      <PopularToys />
      <ShopByAge />
      <Reviews></Reviews>
      <FAQSection />
    </div>
  );
};

export default Home;
