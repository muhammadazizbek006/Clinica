import React from "react";
import { Link } from "react-router-dom";
import { PeriAdanatalogik } from "../../Data";
// img
import next from '../../img/next.svg'
import peri from '../../img/periodanatalogiya.png'
// page
import Chegirma from '../chegirma/Chegirma'
const PeriAdanatalogiya = () => {
  return (
    <>
      {/* title */}
      <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex justify-center sm:justify-start items-center  pt-5">
            {/* left */}
            <div className="flex flex-col sm:flex-row  items-center">
              <div className="w-28 bg-akva  mr-6 ">
                <img className="  px-5 py-3  " src={peri} alt="#" />
              </div>
              <h2 className="text-32 font-medium border-b-4 border-b-header w-full ">
                Peri Adanatalogiya
              </h2>
            </div>
            {/* right */}

          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-12">
        <div className="containerb">
          <ul>
            {PeriAdanatalogik.map((e) => {
              return (
                <li
                  key={e.id}
                  className="border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300"
                >
                  <Link
                    to={`/periadanatalog/${e.yonalishi}`}
                    className="flex  flex-col justify-between md:items-center md:flex-row p-5"
                  >
                    {/* left */}
                    <div className="flex flex-col">
                      <h3 className=" text-base lg:text-xl font-medium mb-3 max-w-[900px]">
                        {e.yonalishi}
                      </h3>
                      <div className="flex items-center  ">
                        <p className="mr-6 text-xl text-next border-b border-b-cyan-700">
                          Batafsil
                        </p>
                        <img src={next} alt="#" />
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex items-center">
                      <p className=" hidden lg:block mr-12 text-lg ">{e.narxi} rubldan</p>
                      <div className="flex items-center text-lg">
                        <p className="mr-2">{e.soni}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Chegirma />
    </>
  );
};

export default PeriAdanatalogiya;
