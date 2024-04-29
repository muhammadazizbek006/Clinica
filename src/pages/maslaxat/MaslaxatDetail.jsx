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
                       <div className='flex flex-col 1129:flex-row text-center  1129:text-start items-center containerb'>
                        
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
                    <div className='flex flex-col 1129:flex-row justify-center 1129:justify-between'>
                      {/* img */}
                      <div>
                        <img width={482} height={600} className=' w-[690px] 1129:w-[330px] 1129:h-[400px] xl:w-[492px] xl:h-[500px] xl:mr-8 object-cover mb-5 1129:mb-0' src={e.img} alt="" />
                      </div>
                      {/* right */}
                      <div className='w-full   1129:max-w-[560px] xl:max-w-[700px]'>
                        {/* top */}
                        <div className='flex items-center  mb-8'>
                          <p className='text-3xl font-medium'>{e.boshlangichnarxi} rubldan</p>
                        </div>
                        {/* maslaxat */}
                        <div className='  border-b-2 border-b-gray-300 pb-8'>
                          <p className=' text-sm xl:text-base '>{e.vazifasi}</p>
                        </div>
                        {/* sabab */}
                        <div className='py-8 space-y-3'>
                          <h3 className='text-xl mb-9'>{e.sababnomi}</h3>
                          <p>{e.malumot}</p>
                          <p>{e.malumot2}</p>
                          <p>{e.malumot3}</p>
                          <p>{e.malumot4}</p>

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