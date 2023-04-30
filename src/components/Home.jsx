/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import photoOne from '../assets/images/sundorbon.png';
import photoTwo from '../assets/images/Sreemongol.png';
import photoThree from '../assets/images/Sajek.png';
import photoFour from '../assets/images/sajek-valley.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";



const Home = () => {
  return (
    <div className='max-w h-[80vh] flex justify-between items-center'>
      <div className='w-1/2'>
        <h1 className='text-white text-5xl'>Travel With<br />
          <span className='font-extrabold text-7xl'>Travel Guru</span></h1>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quibusdam quidem saepe consectetur impedit, recusandae repellat dicta accusantium error veritatis eum qui earum! Vero nam maiores eveniet fugiat labore ducimus.</p>
      </div>
      <div className='w-1/2 overflow-visible'>
        <Swiper
          slidesPerView={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            { clickable: true }
          }
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="overflow-visible text-white text-4xl font-bold"
        >
          <SwiperSlide className='relative'>
            <img src={photoOne} />
            <p className='absolute bottom-8 left-4'>Sundarbans</p>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src={photoTwo} />
            <p className='absolute bottom-8 left-4'>Sreemangal</p>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src={photoThree} />
            <p className='absolute bottom-8 left-4'>Cox's Bazar</p>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src={photoFour} />
            <p className='absolute bottom-8 left-4'>Sajek Valley</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  );
};

export default Home;
