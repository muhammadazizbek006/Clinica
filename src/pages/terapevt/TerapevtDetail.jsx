import React from "react";
import { useParams } from "react-router-dom";
import { Terapevt } from "../../Data";

// img
import terapevti from '../../img/terapevtik.png'
import terapevtm from '../../img/terapevt/terapevt.svg'
import Cta from "../../components/Home/Cta";
import Chegirma from "../chegirma/Chegirma";
const TerapevtDetail = () => {

  const { yonalishi } = useParams();
  const terapevt = Terapevt.filter((e) => e.yonalishi == yonalishi);

  return (
    <>
      <section className="py-8">
        {terapevt.map((e) => {
          return (
            <div className=" flex flex-col sm:flex-row text-center sm:text-start  sm:justify-between items-center containerb">
              <div className="w-28 bg-akva  mr-6">
                <img className="  px-5 py-3 " src={terapevti} alt={e.yonalishi} />
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
          {terapevt.map((e) => {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                <img className="  md:w-[299px] sm:h-[350px] object-cover mb-4 md:mb-0 lg:w-[399px]" src={e.img} alt={e.yonalishi} />
                {/* right */}
                <div className="w-full md:max-w-[400px] lg:max-w-[501px] xl:max-w-[701px]">
                {/* narx ro'yxat */}
                <div className="flex items-center  mb-8">
                    <p className="text-3xl font-medium">{e.boshlanishN} rubldan</p>
                </div>
                {/* sharx */}
                <div className="border-b-2 border-b-gray-500">
                    <p className="mb-4">{e.sharx}</p>
                    <p className="mb-4">{e.sharx2}</p>
                    <p className="mb-8">{e.sharx3}</p>
                </div>
                {/* maslaxat */}
                <div className="pt-8">
                    <h4 className="mb-9 text-base font-medium">{e.malumotTitle}</h4>

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
          <Chegirma/>
      <Cta/>
    </>
  );
};

export default TerapevtDetail;
