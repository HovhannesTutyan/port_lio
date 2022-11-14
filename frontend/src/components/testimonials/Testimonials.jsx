 import React from 'react';
import './testimonials.css';
import AVT1 from '../../assets/img/project-img1.png';

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVT1,
        name: 'Tina Snow',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                 Iusto quod nam impedit soluta odio possimus! Lorem ipsum dolor sit amet consectetur adipisicing \
                  elit. Iusto quod nam impedit soluta odio possimus!"
    },
    {
        avatar: AVT1,
        name: 'Shatta Wale',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                 Iusto quod nam impedit soluta odio possimus! Lorem ipsum dolor sit amet consectetur adipisicing \
                  elit. Iusto quod nam impedit soluta odio possimus!"
    },
    {
        avatar: AVT1,
        name: 'Kwame Despite',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                 Iusto quod nam impedit soluta odio possimus! Lorem ipsum dolor sit amet consectetur adipisicing \
                  elit. Iusto quod nam impedit soluta odio possimus!"
    },
    {
        avatar: AVT1,
        name: 'Nana Ama McBrown',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                 Iusto quod nam impedit soluta odio possimus! Lorem ipsum dolor sit amet consectetur adipisicing \
                  elit. Iusto quod nam impedit soluta odio possimus!"
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials"> 
            <h5> Review from clients </h5>
            <h2> Testimonials </h2>
            <Swiper className="container testimonials__container"
                modules = {[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable:true}}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )                        
                    })
                }                
            </Swiper>
        </section>
    )
        
}

export default Testimonials;