import React from 'react'
import { Link } from 'react-router-dom'

import { maslaxatlar, bolalar, Terapevt, Estetik, PeriAdanatalogik, Protezlashi, implantatsiya } from '../../Data'
// img
import maslaxat from '../../img/maslahatlashuv.png' 
import next from '../../img/next.svg'
import chegirma from '../../img/chegirma.svg'
import bollar from '../../img/bolalar.png'
import terapevtik from '../../img/terapevtik.png'
import estetik from '../../img/estetik.png'
import peri from '../../img/periodanatalogiya.png'
import protezlar from '../../img/protezlash.png'
import  implantatsya  from '../../img/implantatsya.png';


const Barchaxizmatlar = () => {
  return (
    <div className='space-y-8'>
    {/* top */}
    <section>
      <div className="containerb">
        {/* top */}
        <div className=' flex justify-center md:justify-start items-center  pt-5'>
          {/* left */}
          <div className='flex flex-col md:flex-row text-center md:text-start items-center'>
            <div className='w-28 bg-akva  justify-center   sm:mr-6 '>
              <img className='  px-5 py-3  ' src={maslaxat} alt='#' />
            </div>
            <h2 className=' text-2xl lg:text-32 font-medium border-b-4 border-b-header w-full '>Tish shifokori bilan maslahatlashuv</h2>
          </div>
          {/* right */}
        </div>
      </div>
      </section>

      {/* map maslaxatlar */}
      <section className='py-12'>
        <ul className='containerb'>
          {
            maslaxatlar.map((e)=>{
              return(
                <li  key={e.id} className='border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300'>
                  <Link to={`/Tish shifokori bilan maslahatlashuv/${e.yonalishi}`} className='flex flex-col justify-between md:items-center md:flex-row p-5'>
                    {/* left */}
                    <div className='flex flex-col'>
                      <h3 className=' md:max-w-[400px] text-sm xl:text-xl font-medium mb-3 xl:max-w-[900px]'>{e.yonalishi}</h3>
                      <div className='flex items-center mb-3 md:mb-0'>
                        <p className='mr-2 text-xl text-next'>Batafsil</p>
                        <img src={next} alt="#" />
                      </div>
                    </div>  
                    {/* right */}
                    <div className='flex items-center'>
                      <p className='mr-12 text-lg '>{e.narxi} rub</p>
                      <div className='flex items-center text-lg'>
                       <p className='mr-2'>{e.tashrif}</p>
                       <p>tashrif</p>
                      </div>
                      
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>

      {/* bolarlar */}

                      {/* top */}
                      <section className='md:mb-11'>
             <div className="containerb">
            {/* top */}
            <div className=' flex justify-center sm:justify-start items-center  pt-5'>
              {/* left */}
              <div className='flex flex-col sm:flex-row  items-center'>
                <div className='w-28 bg-akva  sm:mr-6 '>
                  <img className='  px-5 py-3  ' src={bollar} alt='#' />
                </div>
                <h2 className=' text-xl sm:text-32 font-medium border-b-4 border-b-header w-full '>Bolalar stomatologiyasi</h2>
              </div>

            </div>
          </div>
          </section>
    
        {/* 1 section */}
        <section className='py-12'>
            <div className="containerb">
                <ul>
                    {
                        bolalar.map((e)=>{
                            return(
                                <li key={e.id} className='border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300'>
                                    <Link to={`/BolalarStamatalogiyasi/${e.yonalishi}`}  className='flex  flex-col md:justify-between md:items-center md:flex-row p-5 '>
                                        {/* left */}
                                        <div className='flex flex-col'>
                                        <h3 className=' text-lg md:text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                                        <div className='flex items-center'>
                                            <p className='mr-2 text-xl text-next'>Batafsil</p>
                                            <img src={next} alt="#" />
                                        </div>
                                        </div>  
                                        {/* right */}
                                        <div className='flex items-center'>
                                        <p className='mr-12 text-lg '>{e.narxi} rubldan</p>
                                        <div className='flex items-center text-lg'>
                                        <p className='mr-2'>{e.soni}</p>
                                        <p>soni</p>
                                        </div>
                                        
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>


    {/* title */}
    <section className='mb-11'>
         <div className="containerb">
        {/* top */}
        <div className=' flex justify-center sm:justify-start items-center   pt-5'>
          {/* left */}
          <div className='flex flex-col sm:flex-row  items-center'>
            <div className='w-28 bg-akva  sm:mr-6 '>
              <img className='  px-5 py-3  ' src={terapevtik} alt='#' />
            </div>
            <h2 className='text-32 text-center sm:text-start font-medium border-b-4 border-b-header w-full '>Terapevtik xizmatlar</h2>
          </div>
          {/* right */}
        </div>
      </div>
      </section>
      {/* map terapevt data */}
      <section className='py-12'>
        <div className="containerb">
            <ul>
                {
                    Terapevt.map((e)=>{
                        return(
                            <li key={e.id} className='border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300'>
                                <Link to={`/terapevtik/${e.yonalishi}`}  className='flex flex-col md:flex-row justify-between md:items-center p-5'>
                                    {/* left */}
                                    <div className='flex flex-col'>
                                    <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                                    <div className='flex items-center  '>
                                        <p className=' mb-3 md:mb-0 mr-6 text-xl text-next border-b border-b-cyan-700'>Batafsil</p>
                                        <img src={next} alt="#" />
                                    </div>
                                    </div>  
                                    {/* right */}
                                    <div className='flex items-center'>
                                    <p className='mr-12 text-lg '>{e.narxi} rubldan</p>
                                    <div className='flex items-center text-lg'>
                                    <p className='mr-2'>{e.soni}</p>
                                    </div>
                                    
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>


        {/* title */}
        <section>
      <div className="containerb">
        {/* top */}
        <div className=' flex items-center justify-center sm:justify-start  pt-5'>
          {/* left */}
          <div className='flex flex-col sm:flex-row items-center'>
            <div className='w-28 bg-akva  sm:mr-6 '>
              <img className='  px-5 py-3  ' src={estetik} alt='#' />
            </div>
            <h2 className=' text-xl sm:text-32 font-medium border-b-4 border-b-header w-full '>Estetik stomatologiya</h2>
          </div>
          {/* right */}
        </div>
      </div>
    </section>

    {/*  */}
    <section className='py-12'>
        <div className="containerb">
            <ul>
                {
                    Estetik.map((e)=>{
                        return(
                            <li key={e.id} className='border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300'>
                                <Link  to={`/EstetikStamatalogika/${e.yonalishi}`} className='flex flex-col sm:flex-row justify-between sm:items-center p-5'>
                                    {/* left */}
                                    <div className='flex flex-col'>
                                    <h3 className=' text-lg sm:text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                                    <div className='flex items-center  '>
                                        <p className='mr-6 text-xl text-next border-b border-b-cyan-700'>Batafsil</p>
                                        <img src={next} alt="#" />
                                    </div>
                                    </div>  
                                    {/* right */}
                                    <div className='flex items-center'>
                                    <p className='mr-12 text-lg  hidden md:block '>{e.narxi} rubldan</p>
                                    <div className='flex items-center text-lg'>
                                    <p className='mr-2'>{e.soni}</p>
                                    </div>
                                    
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>



      {/* title */}
      <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex justify-center sm:justify-start items-center  pt-5">
            {/* left */}
            <div className="flex flex-col sm:flex-row  items-center">
              <div className="w-28 bg-akva  sm:mr-6 ">
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
                    to={`/PeriAdanatalogiya/${e.yonalishi}`}
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


     {/* title */}
     <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex items-center  pt-5">
            {/* left */}
            <div className="flex items-center">
              <div className="w-28 bg-akva  mr-6 ">
                <img className="  px-5 py-3  " src={protezlar} alt="#" />
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
            {Protezlashi.map((e) => {
              return (
                <li
                  key={e.id}
                  className="border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300"
                >
                  <Link
                    to={`/Protezlash/${e.yonalishi}`}
                    className="flex flex-col sm:flex-row justify-between p-5"
                  >
                    {/* left */}
                    <div className="flex flex-col">
                      <h3 className=" text-base md:text-xl font-medium mb-3 max-w-[900px]">
                        {e.yonalishi}
                      </h3>
                      <div className="flex items-center mb-4 sm:mb-0  ">
                        <p className="mr-6 text-xl text-next border-b border-b-cyan-700">
                          Batafsil
                        </p>
                        <img src={next} alt="#" />
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex items-center">
                      <p className="mr-12 text-lg sm:hidden md:block ">{e.narxi} rubldan</p>
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

             {/* title */}
             <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex justify-center md:justify-start items-center pt-5">
            {/* left */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-28 bg-akva  sm:mr-6 ">
                <img className="  px-5 py-3  " src={implantatsya} alt="#" />
              </div>
              <h2 className=" text-2xl md:text-32 font-medium border-b-4 border-b-header w-full ">
               Implantatsiya va jarrohlik
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
            {implantatsiya.map((e) => {
              return (
                <li
                  key={e.id}
                  className="border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300"
                >
                  <Link
                    to={`/implantatsiya/${e.yonalishi}`}
                    className="flex flex-col md:flex-row  justify-between md:items-center p-5"
                  >
                    {/* left */}
                    <div className="flex flex-col">
                      <h3 className=" text-base xl:text-xl font-medium mb-3 max-w-[900px]">
                        {e.yonalishi}
                      </h3>
                      <div className="flex items-center  ">
                        <p className="mr-6 text-xl text-next border-b border-b-cyan-700 mb-3 md:mb-0">
                          Batafsil
                        </p>
                        <img src={next} alt="#" />
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex items-center">
                      <p className="mr-12 text-lg  md:hidden lg:block ">{e.narxi} rubldan</p>
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
    </div>
  )
}

export default Barchaxizmatlar