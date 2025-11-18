import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


import { Autoplay } from 'swiper/modules';

import NewArrivalSlide from './NewArrival';
import MegaSaleSlide from './MegaSalse';
import TopRatedSlide from './TopRatedSlide';

const Slider = () => {
    return (
        <div >
              <Swiper
              modules={[Autoplay]}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                }}
                 

                spaceBetween={50} 
                slidesPerView={1} 
                loop={true}

                className="w-full h-[400px]"
              >
      <SwiperSlide className=''  >
       <NewArrivalSlide></NewArrivalSlide>
      </SwiperSlide>
      <SwiperSlide className=''>
        <MegaSaleSlide></MegaSaleSlide>
      </SwiperSlide>
      <SwiperSlide>
        <TopRatedSlide></TopRatedSlide>
      </SwiperSlide>
      
      
    </Swiper>

        </div>
    );
};

export default Slider;
