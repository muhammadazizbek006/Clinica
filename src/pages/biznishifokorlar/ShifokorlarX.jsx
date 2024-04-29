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
          <div className="containerb ">
            <h2 className=' text-center md:text-start text-3xl md:text-32  lg:text-42 font-medium mb-5'>Bizning shifokorlarimiz</h2>
            <div className='flex justify-center  md:justify-between'>
            {/* map shifokorlar */}
            <ul className='grid grid-cols-1 md:grid-cols-2   gap-x-6 gap-y-8'>
              {
                shifokorlar.map((e)=>{
                  return(
                    <li key={e.id} className='flex'>
                          <Link  to={`/detail/${e.name}`} className='flex flex-col items-center w-full text-center md:text-start md:items-start  md:flex-row   '>
                            <img className=' w-60  md:w-40 h-48 md:mr-2 lg:mr-4 object-cover' width={150} height={190} src={e.img} alt="" />
                            {/* right */}
                            <div className='flex flex-col max-w-72'>
                              <h3 className=' text-base lg:text-lg font-medium lg:mb-3 '>{e.name}</h3>
                              <div className=' '>
                                <p className='text-sm lg:text-base mb-1'>{e.ixtisosligi}</p>
                                <p className='text-sm lg:text-base mb-1'>{e.ixtisosligi2}</p>
                                <p className='text-sm lg:text-base mb-1'>{e.ixtisosligi3}</p>
                              </div>
                                                      
                              <div className='mt-auto inline-block w-full '>
                                  <Link to={`/detail/${e.name}`} className='text-lg font-medium bg-header py-3 md:px-3 lg:px-5 max-md:w-full inline-block  hover:bg-online-zakaz hover:text-white duration-300'>Batafsil ma'lumot</Link>
                                </div>
                            </div>
                          </Link>
                        </li>
                  )
                })
              }

            </ul>

              <div className=' hidden xl:block'>
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