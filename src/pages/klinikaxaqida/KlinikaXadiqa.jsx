import React from 'react'
import { klinika } from '../../Data'

const KlinikaXadiqa = () => {
  return (
    <>
        <section className='py-8'>
            <div className="containerb">
                <h2 className='text-42 mb-6'>KLINIKA NATIVE</h2>

                <ul className='space-y-5'>
                    {
                        klinika.map((e)=>{
                            return(
                                <li>
                                    <h3 className='text-base font-medium mb-4'>{e.mtitile}</h3>
                                    <p className='mb-3'>{e.info}</p>
                                    <p className='mb-3'>{e.malumotT}</p>
                                    <p>{e.malumotT2}</p>
                                    <p>{e.malumotT3}</p>
                                    <p>{e.malumotT4}</p>
                                    <p>{e.malumotT5}</p>
                                    <p>{e.malumotT6}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>

    </>
  )
}

export default KlinikaXadiqa