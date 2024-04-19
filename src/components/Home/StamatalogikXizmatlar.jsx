import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import React from "react";
import { Link } from 'react-router-dom';
import { xizmatlar } from '../../Data';
const StamatalogikXizmatlar = () => {
  return (
        <section className='py-9'  data-aos="fade-up" data-aos-duration="1000" >  
            <div className="containerb">
              {/* title */}
              <h2 className='mb-8 text-2xl font-semibold text-center'>Bizning stomatologik klinikamiz xizmatlari</h2>
              {/* detail link */}
              <ul className=' flex flex-wrap  justify-center  text-center gap-9    '>
                {
                  xizmatlar.map((e)=>{
                    return(
                      <li key={e.id} className='w-full max-w-[180px]'>
                        <Link  >
                              <div className=' hover:bg-header duration-300 w-44 mb-2  h-40'>
                                <img width={160} height={160} className='bg-akva     w-44 h-40  px-5 py-2 object-center object-contain transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-90 hover:bg-header duration-300' src={e.img} alt={e.title} />
                              </div>
                             <h3 className=''>{e.title}</h3>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </section>
  );
};

export default StamatalogikXizmatlar;
