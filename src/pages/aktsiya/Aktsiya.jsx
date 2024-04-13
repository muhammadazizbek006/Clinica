import React from 'react'
import { Link } from 'react-router-dom'
import { Aksiya } from '../../Data'
import Cta from '../../components/Home/Cta'
const Aktsiya = () => {
  return (
    <>
        <section  className='py-12'>
            <div className="containerb">
                <h2 className='mb-10 text-42'>Aksiya</h2>
                <ul className='grid grid-cols-2 gap-x-12 gap-y-12 '>
                    { Aksiya.map((e)=>{
                        return(
                            <li key={e.id}>
                               <Link className='flex'  to={`/Aktsiyam/${e.yonalishi}`}>
                                   <img width={208} height={240} className='w-52  h-60  mr-10  object-cover' src={e.img} alt="#" />

                                   <div>
                                        <h3 className='text-lg font-medium mb-3'>{e.nomi}</h3>
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

        <Cta/>
    </>
  )
}

export default Aktsiya