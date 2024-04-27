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
                        <div className=' flex flex-col  text-center lg:text-start lg:flex-row  lg:justify-between items-center containerb'>
                            <div className='  w-28 bg-akva  mr-6'>
                              <img className='  px-5 py-3 object-cover ' src={bollar} alt={e.yonalishi} />
                            </div>
                            <h2 className=' text-2xl lg:text-32 font-medium border-b-4 border-b-header w-full pb-5 ' >{e.yonalishi}</h2>
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
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <img className=' mb-5 lg:mb-0 lg:w-[340px] xl:w-[481px] h-[300px] lg:h-[500px] object-cover' src={e.img} alt={e.yonalishi} />
                        {/* right */}
                            <div className='w-full lg:max-w-[603px] xl:max-w-[733px]'>
                                <div className='flex items-center mb-8'> 
                                 <p className='text-3xl font-medium'>{e.narxi} rubldan</p>
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