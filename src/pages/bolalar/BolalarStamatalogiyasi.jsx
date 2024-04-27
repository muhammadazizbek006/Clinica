import React from 'react'
import { bolalar } from '../../Data'
import { Link } from 'react-router-dom'
// img
import bollar from '../../img/bolalar.png'
import next from '../../img/next.svg'

import Chegirma from '../chegirma/Chegirma'
const BolalarStamatalogiyasi = () => {
    return (
        <>
            {/* top */}
            <section className='md:mb-11'>
             <div className="containerb">
            {/* top */}
            <div className=' flex justify-center sm:justify-start items-center  pt-5'>
              {/* left */}
              <div className='flex flex-col sm:flex-row  items-center'>
                <div className='w-28 bg-akva  mr-6 '>
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
                                    <Link to={`/bolalar-stamatalogiyasi/${e.yonalishi}`}  className='flex  flex-col md:justify-between md:items-center md:flex-row p-5 '>
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
    
        {/* chegirma */}
        <Chegirma/>
        </>
      )
}

export default BolalarStamatalogiyasi