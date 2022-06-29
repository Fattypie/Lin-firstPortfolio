/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/picture.jpg'
import AVTR2 from '../../assets/strawberry.png'
import AVTR3 from '../../assets/2.1-690x460.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styless
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'BIBI',
        review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. '
    },

    {
         avatar: AVTR2,
         name: 'BABA',
         review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. '
    },

    {
        avatar: AVTR3,
         name: 'XXX',
         review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. '
    }

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        {/* swiper CSS effect so dont need DIV class */}
        <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar}/>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </section>
    )
}

export default Testimonials