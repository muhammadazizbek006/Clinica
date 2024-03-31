import React, { useRef, useState } from 'react';

// data
import { shifokorlar } from '../Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// img
import biznishifokorlar from '../img/biznishifokorlar.svg'


const Shifokorlar = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };
  
  return (
    <section className='py-10'>
        <div className="containerb">
            <div className='flex '>
                <img className='bg-header p-4 rounded-full mr-3 mb-7' src={biznishifokorlar} alt="#" />
                <h2 className='text-32 font-medium'>Bizning shifokorlarimiz</h2>
            </div>
    <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        {
            shifokorlar.map((e)=>{
                return(
                <SwiperSlide key={e.id} className='flex flex-col items-center py-4 px-12 border-akva border-2  border-dashed'>
                    <img className='mb-5 h-96' src={e.img} alt="#" />
                    <h3>{e.name}</h3>
                    <p className='mb-12'>{e.ixtisosligi}</p>
                    <button className='text-xl font-medium hover:text-white hover:bg-online-zakaz bg-header duration-500 w-full py-3 items-end'>Batafsil</button>
                </SwiperSlide>
                )
            })
        }


    </Swiper>


        </div>
        <>

    </>
    </section>
  )
}

export default Shifokorlar