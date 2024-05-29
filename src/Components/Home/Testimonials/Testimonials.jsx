import SectionHeading from "../../SharedComponent/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import Loading from "../../SharedComponent/Loading/Loading";

const Testimonials = () => {


    const axiosSecure = useAxios()

    const {data:reviews,isLoading} = useQuery({
        queryKey: ['reviews'], queryFn: async () => {
        const loadedData= await axiosSecure.get('/reviews')
        return loadedData.data

        }
    })

    // console.log(reviews)




    return (
        <div>
            <SectionHeading p={'---What Our Client Say---'} h1={'TESTIMONIALS'}></SectionHeading>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-20">
                    {
                      isLoading?<Loading></Loading>:
                      reviews.map((review, Index) => <SwiperSlide
                      className="text-center "
                      key={Index}>

                      <div className="w-6/12 gap-6 mx-auto flex justify-center flex-col items-center">
                          <h1><Rating style={{ maxWidth: 250 }} value={review.rating} /></h1>
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