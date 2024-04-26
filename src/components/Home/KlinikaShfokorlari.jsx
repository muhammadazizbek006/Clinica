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
                    <li className=' h-56 ' data-aos="fade-up" data-aos-duration="1000" key={e.id}>
                      <Link className='flex flex-col items-center md:items-start text-center  md:text-start md:flex-row h-full'>
                        <img className='md:mr-12 w-52 object-cover h-full' src={e.img} alt={e.name} />
                        <div className='flex flex-col text-center h-full justify-between'>
                          <h3 className='text-lg font-medium mb-3'>{e.name}</h3>

                          <div className=' flex flex-col mb-5 text-center items-center md:mb-8'>
                            <p className='max-w-48 text-base'>{e.ixtisosligi}</p>
                            <p>{e.ixtisosligi2}</p>
                            <p>{e.ixtisosligi3}</p>
                          </div>

                          <div className='mt-auto inline-block'>
                          <Link to={`/detail/${e.name}`} className='text-lg font-medium bg-header py-3 px-6 inline-block  hover:text-white hover:bg-online-zakaz duration-500'>Batafsil</Link>
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