import React from 'react'
import { useParams } from 'react-router-dom';
import { shifokorlar } from '../../Data';

// pages

import Cta from "../../components/Home/Cta";

const ShifokorlarXDetail = () => {
    const { name } = useParams();
    const shifokor = shifokorlar.filter((e) => e.name == name);
  return (
    <>
        <section className='py-12'>
            <div className="containerb">
               {
                shifokor.map((e)=>{
                    return(
                        <h2 className='text-42  mb-8'>{e.name}</h2>
                    )
                })
               }

               {/* map  shifokorlar */}
               <ul>
                {
                    shifokor.map((e)=>{
                        return(
                            <li className='flex flex-col justify-between  '>
                                {/* left */}
                                <img className=' h-[600px] mb-4 md:mb-0    w-[774px] md:w-[305px] lg:w-[405px] md:h-[559px] mr-0 md:mr-10 lg:mr-24 object-cover' src={e.img} alt={e.name} />

                                <div>
                                    <h4 className='text-base font-medium text-header mb-3'>Doktor ixtisosligi</h4>
                                        {/* ixtisosligi */}
                                    <div className='space-y-2 mb-4'>
                                        <p className='text-base list-disc'>{e.ixtisosligi}</p>
                                        <p className='text-base'>{e.ixtisosligi2}</p>
                                        <p className='text-base'>{e.ixtisosligi3}</p>
                                    </div>
                                    {/* talim va malaka */}
                                    <div className='space-y-3'>
                                        <p className='text-base font-medium text-header'>{e.talimmalaka}</p>
                                        <p className='text-base'>{e.tm}</p>
                                        <p className='text-base'>{e.tm2}</p>
                                        <p className='text-base'>{e.tm3}</p>
                                        <p className='text-base'>{e.tm4}</p>
                                        <p className='text-base'>{e.tm5}</p>
                                        <p className='text-base'>{e.tm6}</p>
                                        <p className='text-base'>{e.tm7}</p>
                                        <p className='text-base'>{e.tm8}</p>
                                        <p className='text-base'>{e.tm9}</p>

                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
               </ul>
            </div>
        </section>

        <Cta/>
    </>
  )
}

export default ShifokorlarXDetail