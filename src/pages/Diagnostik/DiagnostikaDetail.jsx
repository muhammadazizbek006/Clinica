import React from 'react'
import { useParams } from 'react-router-dom';
import { Diagnostik } from '../../Data';
// pages
import KopSavollar from "../../components/Home/KopSavollar";
import Cta from "../../components/Home/Cta";
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
            <div className=" flex  justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img className="  px-5 py-3 " src={maslahatlashuv} alt={e.yonalishi} />
              </div>
              <h2 className="text-32 font-medium border-b-4 border-b-header w-full pb-5 ">
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

      <Cta />
    </>
  )
}

export default DiagnostikaDetail