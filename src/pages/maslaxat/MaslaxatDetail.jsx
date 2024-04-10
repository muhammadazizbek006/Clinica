import React from 'react'
import { useParams } from 'react-router-dom'
import { maslaxatlar } from '../../Data';

// img
import title from '../../img/maslahatlashuv.png'
import KopSavollar from '../../components/Home/KopSavollar';
import Cta from '../../components/Home/Cta';



const MaslaxatDetail = () => {

    const {yonalishi} = useParams();
    const mDetail = maslaxatlar.filter((maslaxat)=> maslaxat.yonalishi == yonalishi);

  return (
    <>
     {/* title */}
        <section className="py-12">
           
                {
                mDetail.map((e)=>{
                    return(
                       <div className='flex items-center containerb'>
                        
                        <div className='w-28 bg-akva  mr-6 '>
                         <img className='  px-5 py-3 ' src={title} alt={e.yonalishi} />
                        </div>
                        <h2 className='text-32 font-medium border-b-4 border-b-header w-full pb-5 '>{e.yonalishi}</h2>
                        </div>
                    )
                })
                }
                

        </section>
        {/* yonalish map  */}
        <section className='py-11'>
          <div className="containerb">
              {
                mDetail.map((e)=>{
                  return(
                    <div className='flex justify-between'>
                      {/* img */}
                      <div>
                        <img width={482} height={600} className='w-[492px] h-[500px]' src={e.img} alt="" />
                      </div>
                      {/* right */}
                      <div className='w-full max-w-[710px]'>
                        {/* top */}
                        <div className='flex items-center justify-between mb-8'>
                          <p className='text-3xl font-medium'>{e.boshlangichnarxi} rubldan</p>
                          <button className='px-8 py-3 bg-header hover:bg-online-zakaz hover:text-white duration-700 font-medium'>ro'yxatdan o'tish</button>
                        </div>
                        {/* maslaxat */}
                        <div className='border-b-2 border-b-gray-300 pb-8'>
                          <p className='text-base '>{e.vazifasi}</p>
                        </div>
                        {/* sabab */}
                        <div className='py-8'>
                          <h3 className='text-xl mb-9'>{e.sababnomi}</h3>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </section>

        <KopSavollar/>

        <Cta/>
    </>
  )
}

export default MaslaxatDetail