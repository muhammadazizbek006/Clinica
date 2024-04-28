import React from 'react'
import { Link } from 'react-router-dom'
import { shifokorlar } from '../../Data'

// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const KlinikaShfokorlari = () => {
  return (
    <section className='py-16'>
        <div className="containerb">
          {/* title */}
          <h2 className='text-center text-42 font-medium mb-8'>Klinika shifokorlari</h2>
            {/* shifokorlar map */}
            <ul className='grid grid-cols-1  md:grid-cols-2 gap-y-16 mb-10 '>
              {
                shifokorlar.map((e)=>{
                  return(
                    <li className='flex  justify-center lg:justify-start' data-aos="fade-up" data-aos-duration="1000" key={e.id}>
                      <Link className='flex flex-col md:flex-row     h-full'>
                        <img className='md:mr-6 xl:mr-12 md:w-32 lg:w-52 object-cover  h-56 inline-block lg:h-full mb-4 md:mb-0 ' src={e.img} alt={e.name} />
                       {/* right */}
                        <div className='flex flex-col text-center md:text-start h-full justify-between md:max-w-[200px] xl:max-w-[624px]'>
                          <h3 className=' md:text-base lg:text-lg font-medium lg:mb-3'>{e.name}</h3>

                          <div className=' flex flex-col mb-5 text-base md:text-sm lg:text-base   md:mb-8'>
                            <p className=''>{e.ixtisosligi}</p>
                            <p>{e.ixtisosligi2}</p>
                            <p>{e.ixtisosligi3}</p>
                          </div>

                          <div className='flex justify-center md:justify-start'>
                           <Link to={`/detail/${e.name}`} className=' text-lg font-medium bg-header py-3 px-6 inline-block  hover:text-white hover:bg-online-zakaz duration-500'>Batafsil</Link>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            {/* hamma shifokorlar */}
            <div className='flex justify-center'>
                <Link to='/ShifokorlarX' className='text-lg font-medium bg-header py-3 px-6  hover:text-white hover:bg-online-zakaz duration-500'>Hamma shifokorlar</Link>
            </div>
        </div>
    </section>
  )
}

export default KlinikaShfokorlari