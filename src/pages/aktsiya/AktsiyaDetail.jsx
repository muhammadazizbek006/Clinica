import React from 'react'
import { useParams } from 'react-router-dom';
import { Aksiya } from '../../Data';
// pages
import KopSavollar from "../../components/Home/KopSavollar";
import Cta from "../../components/Home/Cta";


// img


const AktsiyaDetail = () => {
    const { nomi } = useParams();
    const Aksya = Aksiya.filter((e) => e.nomi == nomi);
    console.log(Aksya);
  return (
    <>
            {/* title */}
      <section className="py-8">
        {Aksya.map((e) => {
          return (
            <div className="containerb">

              <h2 className="text-32 font-medium border-b-4 border-b-header w-full pb-5 ">
                {e.nomi}
              </h2>
            </div>
          );
        })}
      </section>

      <section className="py-10">
        <div className="containerb">
          {Aksya.map((e) => {
            return (
              <div className="flex">
                <img className="w-[546px] mr-14" src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full max-w-[701px]">
                  {/* narx ro'yxat */}
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-3xl font-medium">
                      {e.boshlanishN} rubldan
                    </p>
                    <button className="text-lg font-medium bg-header hover:bg-online-zakaz hover:text-white duration-300 py-3 px-5">
                      Ro'yxatdan o'tish
                    </button>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <KopSavollar />


      <Cta />
    </>
  )
}

export default AktsiyaDetail