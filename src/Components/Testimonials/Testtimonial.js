import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import "swiper/css";
const Testimonial = () => {
    const clients = [
        {
            img1: profile1,
            review:
                "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in the area of web, technology and training."
        },
        {
            img1: profile2,
            review:
                "I have worked with Will and the eLab Communications team for several years. Unflinchingly reliable, professional and proactive from a technology and security standpoint. Over the years, eLab Communications has streamlined our communications so that any of our website updates or other needs are handled seamlessly."
        },
        {
            img1: profile3,
            review:
                "Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab Communciations as our online marketing partner!"
        },
        {
            img1: profile4,
            review:
                "You have been absolutely wonderful for Kinship Center, and I can't thank you enough for all your tremendous skills, support and patience specially during our merger. You will always be Kinship Center's vendor of choice!"
        },
    ]
    return (
        <div className="t-wrapper" id='Testimonial'>
            <div className=" t-heading">
                <span>Clients Always Get</span>
                <span> Exceptional Work</span>
                <span> From Me... 🙂</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                grabCursor={true}
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img1} alt="cdcw" />
                            <span className="font" >{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};
export default Testimonial;