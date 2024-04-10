import React from "react";
import { PeriAdanatalogik } from "../../Data";
import { useParams } from "react-router-dom";
import Cta from "../../components/Home/Cta";
import Chegirma from "../chegirma/Chegirma";
// img
import terapevtm from '../../img/terapevt/terapevt.svg'
import estetik from '../../img/estetik.png'
import KopSavollar from "../../components/Home/KopSavollar";
import peria from '../../img/periodanatalogiya.png'


const PeriAdanatalogiyaDetail = () => {

    const { yonalishi } = useParams();
    const peri = PeriAdanatalogik.filter((e) => e.yonalishi == yonalishi);

    return (
    <>
             <section className="py-8">
        {peri.map((e) => {
          return (
            <div className=" flex  justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img
                  className="  px-5 py-3 "
                  src={peria}
                  alt={e.yonalishi}
                />
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
          {peri.map((e) => {
            return (
              <div className="flex justify-between">
                <img className="w-[399px]" src={e.img} alt={e.yonalishi} />
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
                    <p className="mb-4">{e.sharx2}</p>
                  </div>
                  {/* maslaxat */}
                  <div className="pt-8">
                    <h4 className="mb-9 text-base font-medium">
                      {e.malumotTitle}
                    </h4>

                    <div className="flex items-center mb-3 ">
                      <img className="mr-4" src={terapevtm} alt={e.malumot} />
                      <p>{e.malumot}</p>
                    </div>
                    <div className="flex items-center mb-3 ">
                      <img className="mr-4" src={terapevtm} alt={e.malumot} />
                      <p>{e.malumot2}</p>
                    </div>
                    <div className="flex items-center mb-3 ">
                      <img className="mr-4" src={terapevtm} alt={e.malumot} />
                      <p>{e.malumot3}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

          <KopSavollar/>

      <Chegirma />
      
      <Cta />
    </>
  )
}

export default PeriAdanatalogiyaDetail