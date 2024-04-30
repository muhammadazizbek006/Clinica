import React from 'react'
import { Link } from 'react-router-dom'
import { yangilik } from '../../Data'

const Yangiliklar = () => {
  return (
    <>
        <section className='py-6'>
            <div className="containerb">
                <h2 className='text-42 mb-8'>Yangiliklar</h2>
                <ul className='grid grid-cols-1 sm:grid-cols-2  gap-x-10 gap-y-8'>
                    {
                        yangilik.map((e)=>{
                            return(
                                <li key={e.id}>
                                    <Link to={`/Yangiliklar/${e.nomi}`} className='flex '>
                                        <img className='w-40 xl:w-48 h-56 object-cover mr-6' src={e.img} alt={e.nomi} />
                                        <div className='w-full max-w-80'>
                                            <h3 className=' text-sm sm:text-base xl:text-lg font-medium mb-3'>{e.nomi}</h3>
                                            <p>{e.sana}</p>
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

export default Yangiliklar