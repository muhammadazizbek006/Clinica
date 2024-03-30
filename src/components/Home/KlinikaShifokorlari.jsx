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
            <ul className='grid grid-cols-2 gap-y-16 mb-10 '>
              {
                shifokorlar.map((e)=>{
                  return(
                    <li data-aos="fade-up" data-aos-duration="1000" key={e.id}>
                      <Link className='flex'>
                        <img className='mr-12 w-48 h-56 object-cover' src={e.img} alt={e.name} />
                        <div className=''>
                          <h3 className='text-lg font-medium mb-3'>{e.name}</h3>
                          <div className='flex items-center mb-24 '>
                            <span className='mr-3 text-2xl font-extrabold'>.</span>
                            <p className='max-w-48 text-base'>{e.ixtisosligi}</p>
                          </div>
                          <Link className='text-lg font-medium bg-header py-3 px-6 inline-block  hover:text-white hover:bg-online-zakaz duration-500'>Batafsil</Link>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            {/* hamma shifokorlar */}
            <div className='flex justify-center'>
                <Link className='text-lg font-medium bg-header py-3 px-6  hover:text-white hover:bg-online-zakaz duration-500'>Hamma shifokorlar</Link>
            </div>
        </div>
    </section>
  )
}

export default KlinikaShfokorlari