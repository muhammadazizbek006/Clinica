import React from "react";
import { PeriAdanatalogik } from "../../Data";
import { useParams } from "react-router-dom";
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
            <div className=" flex flex-col text-center md:text-start md:flex-row  justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img
                  className="  px-5 py-3 "
                  src={peria}
                  alt={e.yonalishi}
                />
              </div>
              <h2 className="text-2xl md:text-32 font-medium border-b-4 border-b-header w-full pb-5 ">
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
              <div className="flex flex-col md:flex-row justify-between">
                <img className=" h-96  md:w-[280px] lg:w-[399px] md:h-[600px] object-cover mb-4 md:mb-0" src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full md:max-w-[440px] lg:max-w-[520px] xl:max-w-[701px]">
                  {/* narx ro'yxat */}
                  <div className="flex items-center  mb-8">
                    <p className="text-3xl font-medium">
                      {e.boshlanishN} rubldan
                    </p>

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
      
    </>
  )
}

export default PeriAdanatalogiyaDetail