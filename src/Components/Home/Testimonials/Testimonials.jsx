import SectionHeading from "../../SharedComponent/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                // const popular = data.filter(data => data.category === 'popular')
                setReviews(data)
            })
    }, [])
  

    return (
        <div>
            <SectionHeading p={'---What Our Client Say---'} h1={'TESTIMONIALS'}></SectionHeading>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-20">
                 {
                    reviews.map((review,Index)=>   <SwiperSlide 
                    className="text-center "
                     key={Index}>

                     <div className="w-6/12 gap-6 mx-auto flex justify-center flex-col items-center">
                        <h1><Rating style={{ maxWidth: 250 }} value={review.rating}  /></h1>
                        <h1 className="text-6xl ">,,</h1>
                     <p>{review.details}</p>
                        <h1 className="text-3xl uppercase text-yellow-600 ">{review.name}</h1>
                     </div>
                        </SwiperSlide>)
                 }
                   
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;