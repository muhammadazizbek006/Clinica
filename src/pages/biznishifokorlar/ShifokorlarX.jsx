import React from 'react'
import { shifokorlar } from '../../Data'
import { Link } from 'react-router-dom'


// img

import cn from '../../img/bzsh/cn.png'
import cn2 from '../../img/bzsh/cn2.png'

const ShifokorlarX = () => {
  return (
    <>
      <section className='py-10'>
          <div className="containerb">
            <h2 className='text-42 font-medium mb-5'>Bizning shifokorlarimiz</h2>
            <div className='flex'>
            {/* map shifokorlar */}
            <ul className='grid grid-cols-2  gap-x-6 gap-y-8'>
              {
                shifokorlar.map((e)=>{
                  return(
                    <li key={e.id}>
                          <Link to={`/detail/${e.name}`} className='flex'>
                            <img className='w-40 h-48 mr-4' width={150} height={190} src={e.img} alt="" />
                            
                            <div className='flex flex-col'>
                              <h3 className='text-lg font-medium mb-3 '>{e.name}</h3>
                              <div className=''>
                                <p className='text-base mb-1'>{e.ixtisosligi}</p>
                                <p className='text-base mb-1'>{e.ixtisosligi2}</p>
                                <p className='text-base mb-1'>{e.ixtisosligi3}</p>
                              </div>
                                                      
                              <div className='mt-auto inline-block '>
                                  <Link className='text-lg font-medium bg-header py-3 px-5 inline-block  hover:bg-online-zakaz hover:text-white duration-300'>Batafsil ma'lumot</Link>
                                </div>
                            </div>
                          </Link>
                        </li>
                  )
                })
              }

            </ul>

              <div>
                <img className='w-80 h-[420px] mb-8' width={310} height={420} src={cn} alt="" />
                <img  className='w-80 h-[420px]' width={310} height={420} src={cn2} alt="" />
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default ShifokorlarX