import React from "react";
import './Protfolio.css';
import calc from '../../img/calc.png';
import calender from '../../img/calender.png';
import personal from '../../img/personal.png';
import grade from '../../img/grade.png';
// import './swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
const Protfolio = () => {
    return (
        <div className="awesome protfolio" id='Protfolio'>
            <span>My Recent Project </span>
            <span>Protfolio 👍</span>

            <Swiper className="protfolio-slider" spaceBetween={30}
                slidesPerView={2} grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                
                <SwiperSlide className="display2">
                    <img className="img2" src={calender} alt="calculator" />
                </SwiperSlide>
                <SwiperSlide className="display3">
                    <img src={grade} alt="calculator" />
                </SwiperSlide>
                <SwiperSlide className="display4">
                    <img src={personal} alt="calculator" />
                </SwiperSlide>
                <SwiperSlide className="display1">
                    <img className="img1" src={calc} alt="calculator" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};
export default Protfolio;