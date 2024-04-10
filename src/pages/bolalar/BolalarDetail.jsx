import React from 'react'
// img
import bollar from '../../img/bolalar.png'
import { useParams } from 'react-router-dom'
import { bolalar } from '../../Data';

const BolalarDetail = () => {
    const {yonalishi} = useParams();
    const Bolalar = bolalar.filter((e)=> e.yonalishi == yonalishi);

    return (
    <>
    <section className='py-8'>

            {
                Bolalar.map((e)=>{
                    return(
                        <div className=' flex  justify-between items-center containerb'>
                            <div className='w-28 bg-akva  mr-6'>
                              <img className='  px-5 py-3 ' src={bollar} alt={e.yonalishi} />
                            </div>
                            <h2 className='text-32 font-medium border-b-4 border-b-header w-full pb-5 ' >{e.yonalishi}</h2>
                        </div>
                        
                    )
                })
            }
    </section>

    <section className='py-10'>
        <div className="containerb">
            {
                Bolalar.map((e)=>{
                    return(
                        <div className='flex justify-between'>
                            <img className='w-[546px]' src={e.img} alt={e.yonalishi} />
                        {/* right */}
                            <div className='w-full max-w-[733px]'>
                                <div className='flex items-center justify-between space-x-2 mb-8'> 
                                 <p className='text-3xl font-medium'>{e.narxi} rubldan</p>
                                 <button className='bg-header px-8 py-3 hover:bg-online-zakaz hover:text-white duration-300'>Ro'yxatdan o'tish</button>
                                </div>
                                {/* sharx */}
                                <p className='text-base tracking-wide leading-8'>{e.sharxi}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>

    </>
  )
}

export default BolalarDetail