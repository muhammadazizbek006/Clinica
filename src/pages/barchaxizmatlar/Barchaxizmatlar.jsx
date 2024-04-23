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
    {/* title */}
    
            {/* top */}
      <section className='py-8'>
      <div className="containerb">
        {/* title */}
        <h2 className='text-42 mb-7'>Xizmatlar va narxlar</h2>
        {/* top */}
        <div className=' flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={maslaxat} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Tish shifokori bilan maslahatlashuv</h2>
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
                  <Link to={`/mdetail/${e.yonalishi}`} className='flex justify-between items-center p-5'>
                    {/* left */}
                    <div className='flex flex-col'>
                      <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                      <div className='flex items-center'>
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
              <section className='mb-11'>
         <div className="containerb">
        {/* top */}
        <div className=' flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={bollar} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Bolalar stomatologiyasi</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
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
                                <Link to={`/bolalar/${e.yonalishi}`}  className='flex justify-between items-center p-5'>
                                    {/* left */}
                                    <div className='flex flex-col'>
                                    <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
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
        <div className=' flex items-center justify-between  pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={terapevtik} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Terapevtik xizmatlar</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
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
                                <Link to={`/terapevt/${e.yonalishi}`}  className='flex justify-between items-center p-5'>
                                    {/* left */}
                                    <div className='flex flex-col'>
                                    <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                                    <div className='flex items-center  '>
                                        <p className='mr-6 text-xl text-next border-b border-b-cyan-700'>Batafsil</p>
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
        <div className=' flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={estetik} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Estetik stomatologiya</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
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
                                <Link  to={`/estetika/${e.yonalishi}`} className='flex justify-between items-center p-5'>
                                    {/* left */}
                                    <div className='flex flex-col'>
                                    <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                                    <div className='flex items-center  '>
                                        <p className='mr-6 text-xl text-next border-b border-b-cyan-700'>Batafsil</p>
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
          <div className=" flex items-center justify-between pt-5">
            {/* left */}
            <div className="flex items-center">
              <div className="w-28 bg-akva  mr-6 ">
                <img className="  px-5 py-3  " src={peri} alt="#" />
              </div>
              <h2 className="text-32 font-medium border-b-4 border-b-header w-full ">
              Peri Adanatalogiya
              </h2>
            </div>
            {/* right */}
            <button className="bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700">
              Ro'yxatdan o'tish
            </button>
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


           {/* title */}
           <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex items-center justify-between pt-5">
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
            <button className="bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700">
              Ro'yxatdan o'tish
            </button>
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
                    to={`/protez/${e.yonalishi}`}
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

                   {/* title */}
                   <section>
        <div className="containerb">
          {/* top */}
          <div className=" flex items-center justify-between pt-5">
            {/* left */}
            <div className="flex items-center">
              <div className="w-28 bg-akva  mr-6 ">
                <img className="  px-5 py-3  " src={implantatsya} alt="#" />
              </div>
              <h2 className="text-32 font-medium border-b-4 border-b-header w-full ">
               Implantatsiya va jarrohlik
              </h2>
            </div>
            {/* right */}
            <button className="bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700">
              Ro'yxatdan o'tish
            </button>
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
                    to={`/implant/${e.yonalishi}`}
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
    </div>
  )
}

export default Barchaxizmatlar