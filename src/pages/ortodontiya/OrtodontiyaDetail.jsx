import React from "react";
import { useParams } from "react-router-dom";
// pages
import KopSavollar from "../../components/Home/KopSavollar";
import Chegirma from "../chegirma/Chegirma";
import { Ortadon } from "../../Data";
// img
import protezlar from '../../img/protezlash.png'
import terapevtm from '../../img/terapevt/terapevt.svg'
import ortodontiya from '../../img/ortodontiya.png'


const OrtodontiyaDetail = () => {
  const { yonalishi } = useParams();
  const ortadontalog = Ortadon.filter((e) => e.yonalishi == yonalishi);
  return (
    <>
          {/* title */}
          <section className="py-8">
        {ortadontalog.map((e) => {
          return (
            <div className=" flex flex-col sm:flex-row text-center sm:text-start justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img className="  px-5 py-6 " src={ortodontiya} alt={e.yonalishi} />
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
          {ortadontalog.map((e) => {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                <img width={400} height={600} className=" w-[600px] md:w-[400px] h-[500px] md:mr-20 object-cover mb-4 md:mb-0" src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full max-w-[701px]">
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
                    <h4 className="mb-9 text-base font-medium flex items-center space-x-3">
                      <img src={terapevtm} alt="" />
                      {e.malumotTitle}
                    </h4>

                    <div className="space-y-3">
                    
                      <p>{e.malumot}</p>
                      <p>{e.malumot2}</p>
                      <p>{e.malumot3}</p>
                      <p>{e.malumotT4}</p>
                      <p>{e.malumotT5}</p>
                      <p>{e.malumotT6}</p>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      <Chegirma />

      <KopSavollar />
    </>
  )
}

export default OrtodontiyaDetail