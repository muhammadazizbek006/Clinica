import React from "react";
import { Link } from "react-router-dom";
// swiper
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-fade';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { carusels, Aksiya } from "../../Data";
const Carusel = () => {
  return (
    <>
      <section  className="bg-header">
        <Swiper
          spaceBetween={100}
          pagination={true}
          modules={[ Autoplay,EffectFade, Pagination]}
          autoplay={{
            delay: 2500,
          }}
          effect="fade"
          className="mySwiper"
        >
          {Aksiya.map((e) => {
            return (
              <SwiperSlide key={e.id} className="relative bg-header">
                <div className=" flex  items-center h-[700px] containerb">
                  {/* left */}
                  <div className="flex flex-col w-1/2 gap-y-5">
                    <h2 className="font-bold text-6xl">{e.nomi}</h2>
                    <p className="font-medium">{e.chegrima}</p>
                    <Link to={`/Akt/${e.nomi}`} className="bg-white hover:bg-online-zakaz hover:text-white duration-300 px-5 py-3 inline-block w-1/6 text-center">
                      Batafsil
                    </Link>
                  </div>
                  {/* right */}
                  <div className=" absolute slideCut w-1/2 right-0 top-0">
                    <img className=" w-full h-[700px] object-cover" src={e.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Carusel;
