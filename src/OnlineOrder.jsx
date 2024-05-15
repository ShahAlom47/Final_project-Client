
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import slid1 from './assets/home/slide1.jpg'
import slid2 from './assets/home/slide2.jpg'
import slid3 from './assets/home/slide3.jpg'
import slid4 from './assets/home/slide4.jpg'
import slid5 from './assets/home/slide5.jpg'
import SectionHeading from './Components/SharedComponent/SectionHeading';



const OnlineOrder = () => {
    return (
        <div >
          
            <SectionHeading h1={'ORDER ONLINE'} p={'---From 11:00am to 10:00pm---'}></SectionHeading>

            <div className="content mb-10 text-white italic">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full' src={slid1} alt="" />
                        <h1 className='text-center text-4xl font-bold -mt-20 pb-6  '>SALADS</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={slid2} alt="" />
                        <h1 className='text-center text-4xl font-bold -mt-20'>PIZZAS</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={slid3} alt="" />
                        <h1 className='text-center text-4xl font-bold -mt-20'>SOUPS</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={slid4} alt="" />
                        <h1 className='text-center text-4xl font-bold -mt-20'>DESSERTS</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={slid5} alt="" />
                        <h1 className='text-center text-4xl font-bold -mt-20'>SALADS</h1>
                        </SwiperSlide>




                </Swiper>



            </div>

        </div>
    );
};

export default OnlineOrder;