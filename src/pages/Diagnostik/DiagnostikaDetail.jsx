import React from 'react'
import { useParams } from 'react-router-dom';
import { Diagnostik } from '../../Data';
// pages
import KopSavollar from "../../components/Home/KopSavollar";
import Chegirma from "../chegirma/Chegirma";
// img

import maslahatlashuv from '../../img/maslahatlashuv.png'

const DiagnostikaDetail = () => {
    const { yonalishi } = useParams();
    const diagnostik = Diagnostik.filter((e) => e.yonalishi == yonalishi);
  return (
    <>
    {/* title */}
      <section className="py-8">
        {diagnostik.map((e) => {
          return (
            <div className=" flex flex-col text-center sm:text-start sm:flex-row justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img className="  px-5 py-3 " src={maslahatlashuv} alt={e.yonalishi} />
              </div>
              <h2 className=" text-2xl md:text-32 font-medium border-b-4 border-b-header w-full pb-5 ">
                {e.yonalishi}
              </h2>
            </div>
          );
        })}
      </section>

      <section className="py-10">
        <div className="containerb">
          {diagnostik.map((e) => {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                <img className=" md:w-96 sm:h-[400px] lg:w-[546px] md:mr-14 mb-4 md:mb-0 object-cover " src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full max-w-[701px]">
                  {/* narx ro'yxat */}
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-3xl font-medium">
                      {e.boshlanishN} rubldan
                    </p>

                  </div>
                  {/* sharx */}
                  <div className="border-b-2 border-b-gray-500">
                    <p className="mb-4">{e.sharx}</p>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      <KopSavollar />

      <Chegirma />

    </>
  )
}

export default DiagnostikaDetail