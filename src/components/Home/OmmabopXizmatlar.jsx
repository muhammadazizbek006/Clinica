import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { Link } from 'react-router-dom'

// img
import soat from '../../img/soat.svg'
import next from '../../img/next.svg'
import { ommabop } from '../../Data'
const OmmabopXizmatlar = () => {
  return (
        <section className='liner py-14'>
            <div className="containerb flex flex-col justify-start md:flex-row items-center md:justify-between">
              {/* ommabop xizmatlar */}
              <div className=' md:max-w-xs mb-6  text-center'>
                <h2 className=' text-3xl md:text-42 font-medium mb-8'>Ommabop xizmatlar</h2>
                <Link to='/barchaxizmatlar' className='font-medium mb-3 inline-block text-lg px-5 py-3 bg-white hover:bg-online-zakaz hover:text-white duration-500'>Barcha xizmatlar</Link>
              </div>
              {/* davolash turlari */}
              <div className='bg-white py-6 '  data-aos="fade-up" data-aos-duration="1000">
                <ul>
                  {
                    ommabop.map((e)=>{
                      return(
                        
                        <li key={e.id} className='   hover:bg-link  '>
                          <Link to={`/${e.xizmat}`}  className='flex justify-between items-center py-3 px-6'>
                            {/* // left */}
                            <div className='flex items-center w-full max-w-[581px]'> 
                              <img className='mr-3' src={soat} alt="note" />
                              <p className='text-base mr-4 lg:mr-0  md:text-xl'>{e.xizmat}</p>
                            </div>
                            {/* right */}
                            <div className='flex items-center' >
                              <span className=' hidden lg:inline-block lg:mr-3'>{e.narxi}</span>
                              <img className='' src={next} alt="o'tish" />
                            </div>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
        </section>
  )
}

export default OmmabopXizmatlar