import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the Swiper styles
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import './styles.css'; // Import your custom styles if needed

// Install the modules
SwiperCore.use([Pagination, Navigation]);

export default function Swiperslider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={require("./pexels-ge-yonk-1152077.jpg")} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("./pexels-tamara-elnova-12916314.jpg")} alt="" />
                </SwiperSlide>
            </Swiper>

            {/* Custom navigation at the bottom */}
            <div className="custom-navigation">
                <div className="prev"></div>
                <div className="next"></div>
            </div>
        </>
    );
}
