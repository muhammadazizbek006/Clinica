import React from 'react'
import {ommabop} from '../Data'
import { useParams } from 'react-router-dom';
import maslahatlashuv from '../img/maslahatlashuv.png'
const OmmabopxizmatlarDetail = () => {
    const { xizmat } = useParams();
    const Ommabopxizmat = ommabop.filter((e) => e.xizmat == xizmat);
    return (
        <>


        <section className='pt-6'>
            {
                Ommabopxizmat.map((e)=>{
                    return(
                        <div className="containerb flex flex-col md:flex-row text-center md:text-start items-center">
                            <div className='w-28 bg-akva  mr-6 '>
                                 <img className='  px-5 py-3 ' src={maslahatlashuv} alt={e.yonalishi} />
                            </div>
                            <h2 className='text-32 font-medium mb-8'>{e.xizmat}</h2>
                        </div>
                    )
                })
            }
        </section>

            <section className='py-8'>
                {
                    Ommabopxizmat.map((e)=>{
                        return(
                            <div key={e.id} className='containerb flex flex-col md:flex-row justify-between'>
                                <img className=' md:w-[350px] lg:w-[400px] xl:w-[500px] md:h-[500px] lg:h-[700px] object-cover mr-0 md:mr-3 mb-4 md:mb-0' src={e.img} alt={e.xizmat} />


                                <div className='md:max-w-[380px] l g:max-w-[500px] xl:max-w-[700px]'>
                                    
                                    <div className='mb-12'>
                                        <p className='text-3xl'>{e.boshlanishN} rubldan</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <p>{e.sharx}</p>
                                        <p>{e.sharx2}</p>
                                        <p>{e.sharx3}</p>
                                    </div>
                                    <div className='space-y-3'>
                                            <h4 className='text-xl mb-4 font-medium'>{e.malumotT}</h4>
                                            <p>{e.malumot}</p>
                                            <p>{e.malumot2}</p>
                                            <p>{e.malumot3}</p>
                                            <p>{e.malumotT4}</p>
                                            <p>{e.malumotT5}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

        </>
      );
}

export default OmmabopxizmatlarDetail