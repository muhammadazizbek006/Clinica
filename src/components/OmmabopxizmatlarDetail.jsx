import React from 'react'
import {ommabop} from '../Data'
import { useParams } from 'react-router-dom';
const OmmabopxizmatlarDetail = () => {
    const { xizmat } = useParams();
    const Ommabopxizmat = ommabop.filter((e) => e.xizmat == xizmat);
    return (
        <>


        <section className='pt-6'>
            {
                Ommabopxizmat.map((e)=>{
                    return(
                        <div className="containerb">
                            <h2 className='text-42 font-medium mb-8'>{e.xizmat}</h2>
                        </div>
                    )
                })
            }
        </section>

            <section className='py-8'>
                {
                    Ommabopxizmat.map((e)=>{
                        return(
                            <div key={e.id} className='containerb flex  '>
                                <img className='mr-12' src={e.img} alt={e.xizmat} />
                                <div>
                                    
                                    <div className='flex  justify-between items-center mb-12'>
                                        <p className='text-3xl'>{e.boshlanishN} rubldan</p>
                                        <button className='px-10 py-4 bg-header hover:bg-online-zakaz hover:text-white duration-300'>Ro'yxatdan O'tish</button>
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