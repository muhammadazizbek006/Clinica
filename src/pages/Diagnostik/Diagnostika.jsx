import React from 'react'

import { Link } from 'react-router-dom';

import { Diagnostik } from '../../Data';


import Chegirma from '../chegirma/Chegirma'
// img
import next from '../../img/next.svg'
import maslahatlashuv from '../../img/maslahatlashuv.png'
import KopSavollar from '../../components/Home/KopSavollar';
import Cta from '../../components/Home/Cta';
const Diagnostika = () => {
  return (
    <>
       {/* title */}
       <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex items-center  pt-5">
            {/* left */}
            <div className="flex items-center">
              <div className="w-28 bg-akva  mr-6 ">
                <img className="  px-5 py-3  " src={maslahatlashuv} alt="#" />
              </div>
              <h2 className="text-32 font-medium border-b-4 border-b-header w-full ">
              Protezlash
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
            {Diagnostik.map((e) => {
              return (
                <li
                  key={e.id}
                  className="border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300"
                >
                  <Link
                    to={`/diga/${e.yonalishi}`}
                    className="flex justify-between items-center p-5"
                  >
                    {/* left */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-medium mb-3 max-w-[900px]">
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
                      <p className="mr-12 text-lg ">{e.narxi} rubldan</p>
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

      <KopSavollar/>
      <Cta />
      
      </>
  )
}

export default Diagnostika