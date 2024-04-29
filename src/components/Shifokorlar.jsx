import React, { useRef, useState } from "react";

// data
import { shifokorlar } from "../Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// img
import biznishifokorlar from "../img/biznishifokorlar.svg";
import { Link } from "react-router-dom";

const Shifokorlar = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  const [costom, setcostom] = useState({});

  const next = () => {
    costom.slideNext();
  };
  const prev = () => {
    costom.slidePrev();
  };

  return (
    <section className="py-10">
      <div className="containerb">
        <div className="flex items-center mb-5 justify-between">
          <div className="flex items-center space-x-3">
            <img
              className="bg-header p-4 rounded-full"
              src={biznishifokorlar}
              alt="note"
            />
            <h2 className="text-32 font-medium">Bizning shifokorlarimiz</h2>
          </div>
          <div className=" space-x-4">
            <button className="text-4xl" onClick={prev}>
              ←
            </button>
            <button className="text-4xl" onClick={next}>
              →
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
          onInit={(ev) => {
            setcostom(ev);
          }}
        >
          {shifokorlar.map((e) => {
            return (
              <SwiperSlide
                key={e.id}
                className="gird  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   items-center p-2 border-akva border-2  rounded-[5px] border-dashed"
              >
                <div className="flex flex-col w-full h-[526px]  ">
                <img width="278" height="354" className="h-80 object-cover  w-full  inline-block aspect-[140/1 rounded-[5px]  " src={e.img} alt={e.name} />
                <div className=" p-3 text-center flex flex-col grow">
                  <h3 className="text-xl font-medium mb-2">{e.name}</h3>
                  <p className="mb-12">{e.ixtisosligi}</p>


                  <div className="mt-auto inline-block  ">
                  <Link to={`/detail/${e.name}`} className="text-xl font-medium w-full  inline-block hover:text-white hover:bg-online-zakaz bg-header duration-500 px-8   py-3">
                    Batafsil
                  </Link>
                  </div>
                </div>
                </div>
         
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <></>
    </section>
  );
};

export default Shifokorlar;

// <li class="swiper-slide js-doctors-section-swiper--slide doctor-item swiper-slide-active" role="group" aria-label="1 / 5" style="width: 322.5px; margin-right: 20px;">
//                             <!-- img -->
//                             <img width="278" height="354" src="./images/doctors/elena-nikolayevna.jpg" alt="Светлакова Елена Николаевна" class="inline-block w-full h-auto aspect-[140/177] mb-5 rounded-[5px] bg-brand-sky-200">
//                             <!-- info -->
//                             <div class="grow space-y-2.5">
//                                 <h3 class="text-[22px] leading-8 font-roboto text-center">Светлакова Елена Николаевна</h3>
//                                 <p class="text-lg text-center leading-[26px] text-[#536763">Врач - пародонтолог, <br> доктор медицинских наук</p>
//                             </div>
//                             <!-- detail-link -->
//                             <a href="#" class="detail-btn mt-5 py-[18px] rounded-none text-[#393939] font-roboto font-normal text-lg hover:text-white hover:bg-[#393939] transition-all">
//                                 <span>Подробнее</span>
//                                 <svg class="size-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M5 16.3333L15.8333 5.5M15.8333 5.5V15.9M15.8333 5.5H5.43333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                                 </svg>
//                             </a>
//                         </li>
