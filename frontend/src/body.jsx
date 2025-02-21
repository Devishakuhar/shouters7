import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./body.css";

const Body = () => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="/digital-marketing">
                        <img src="/dm.jpg" alt="Slide 1" className="carousel-img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/app-development">
                        <img src="/appD.jpg" alt="Slide 2" className="carousel-img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/web-development">
                        <img src="/webD.jpg" alt="Slide 3" className="carousel-img" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Body;
