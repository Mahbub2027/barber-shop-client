// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";
import { useState, useEffect } from "react";
import './testimonial.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('../../../../public/testimonials.json')
            .then(res => {
                setReviews(res.data);
            })

    }, [])
    return (
        <div className='w-10/12 mx-auto my-20'>
            <h2 className='my-20 text-4xl font-bold text-center'> Testimonials </h2>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <div key={review.id}>
                            <SwiperSlide>
                                <div className='text-left '>
                                    <div className='flex gap-5'>
                                        <p className='w-10 h-10  rounded-full'><img src={review.img} alt="img" /></p>
                                        <div>
                                            <h1 className='font-bold'>{review.name}</h1>
                                            <h1 className='text-sm font-semibold'>{review.position}</h1>
                                        </div>
                                    </div>
                                    <p className='text-sm w-3/4 my-1'>{review.review}</p>
                                    <p className=' mb-16'>
                                        <Rating value={review.rating}
                                            style={{ maxWidth: 96 }}
                                            readOnly />
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>)
                    }

                </Swiper>
            </div>
        </div>

    )
}

export default Testimonials;