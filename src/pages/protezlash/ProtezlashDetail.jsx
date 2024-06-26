import React from "react";
import { useParams } from "react-router-dom";
// pages
import KopSavollar from "../../components/Home/KopSavollar";
import Chegirma from "../chegirma/Chegirma";
import { Protezlashi } from "../../Data";
// img
import protezlar from '../../img/protezlash.png'
import terapevtm from '../../img/terapevt/terapevt.svg'
const ProtezlashDetail = () => {
    const { yonalishi } = useParams();
    const pro = Protezlashi.filter((e) => e.yonalishi == yonalishi);
  return (
    <>
    {/* title */}
      <section className="py-8">
        {pro.map((e) => {
          return (
            <div className=" flex flex-col text-center md:flex-row   justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img className="  px-5 py-3 " src={protezlar} alt={e.yonalishi} />
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
          {pro.map((e) => {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                <img className=" md:w-[340px] xl:w-[526px] md:h-[400px] lg:h-[700px] mb-4 md:mb-0 object-cover " src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full md:max-w-[380px] xl:max-w-[701px]">
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
                      <img className="mr-4" src={terapevtm} alt={e.malumot} />
                      {e.malumotTitle}
                    </h4>

                    <div className="flex items-center mb-3 ">
                    
                      <p>{e.malumot}</p>
                    </div>
                    <div className="flex items-center mb-3 ">
                      <p>{e.malumot2}</p>
                    </div>
                    <div className="flex items-center mb-3 ">
                      
                      <p>{e.malumot3}</p>
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
  );
};

export default ProtezlashDetail;
