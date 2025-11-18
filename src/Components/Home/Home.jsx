import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import PopularToys from '../PopularToys/PopularToys';
import ShopByAge from '../ShopByAge/imgMarquee';
import FAQSection from '../FAQ/FAQsection';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    const location = useLocation();


  useEffect(() => {
    document.title = "🏠 | Home";
  }, [location.pathname]);
    return (
        <div>
             <Helmet key={location.pathname}>
        <title>🏠 | Home</title>
      </Helmet>
            <Slider></Slider>
            <PopularToys></PopularToys>
            <ShopByAge></ShopByAge>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;
