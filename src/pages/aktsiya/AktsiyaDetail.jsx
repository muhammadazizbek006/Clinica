import React from 'react'
import { useParams } from 'react-router-dom';
import { Aksiya } from '../../Data';
// pages
import KopSavollar from "../../components/Home/KopSavollar";

// img


const AktsiyaDetail = () => {
    const { nomi } = useParams();
    const skidka = Aksiya.filter((e) => e.nomi == nomi);
  return (
    <>
            {/* title */}
      <section className="py-8">
        {skidka.map((e) => {
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
          {skidka.map((e) => {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                <img width={437} height={490} className=" w-[600px] md:w-[337px] lg:w-[437px] h-[490px] mr-0 md:mr-14 mb-4 md:mb-0 object-cover " src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full max-w-[701px]">

                  <div>
                    <p className='mb-3 text-base'>{e.muddat}</p>
                    <div className='mb-3'>
                     <p>{e.taklif}</p>
                     <p>{e.taklif2}</p>
                    </div>
                   
                      <div className='flex space-x-2'>
                        <p>{e.ish} </p>
                        <p className='line-through mr-2'>{e.narx}</p>
                        <p>{e.aksiyaN}</p>
                      </div>

                      <div className='flex space-x-2'>
                        <p>{e.ish2} </p>
                        <p className='line-through mr-2'>{e.narx2}</p>
                        <p>{e.aksiyaN2}</p>
                      </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <KopSavollar />

    </>
  )
}

export default AktsiyaDetail