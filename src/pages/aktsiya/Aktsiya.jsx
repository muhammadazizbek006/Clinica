import React from 'react'
import { Link } from 'react-router-dom'
import { Aksiya } from '../../Data'

const Aktsiya = () => {
  return (
    <>
        <section  className='py-12'>
            <div className="containerb">
                <h2 className='mb-10 text-3xl md:text-32 lg:text-42 text-center sm:text-start'>Aksiya</h2>
                <ul className='grid grid-cols-1  sm:grid-cols-2 gap-x-12 gap-y-12 '>
                    { Aksiya.map((e)=>{
                        return(
                            <li key={e.id}>
                               <Link className='flex flex-col  items-center text-center sm:items-start sm:text-start lg:flex-row'  to={`/Aktsiya/${e.nomi}`}>
                                   <img width={208} height={240} className='w-52 mb-4 sm:mb-0  h-60  sm:mr-10  object-cover' src={e.img} alt="#" />

                                   <div>
                                        <h3 className='text-lg font-medium sm:mb-3'>{e.nomi}</h3>
                                        <p className='text-base'>{e.muddat}</p>
                                   </div>
                               </Link>
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

export default Aktsiya