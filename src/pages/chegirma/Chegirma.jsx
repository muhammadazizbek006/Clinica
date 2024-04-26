import React from 'react'
import { chegirmalar } from '../../Data'


import { Link } from 'react-router-dom'
// img
import chegirma from '../../img/chegirma.svg'

const Chegirma = () => {
  return (
    <>
    <section className='py-10'>
        <div className="containerb flex flex-col text-center md:text-start md:flex-row items-center mb-7">
            <img className='bg-header p-5 rounded-full mr-3' src={chegirma} alt="#" />
            <h2 className=' text-xl md:text-32 font-medium border-b-4 pb-5 border-b-header w-full '>Qanday qilib chegirma olish mumkin</h2>
        </div>
        <ul className='containerb grid grid-cols-1  md:grid-cols-2 gap-x-6 gap-y-8'>
            {
                chegirmalar.map((e)=>{
                    return(
                        <li key={e.id} className='py-3 px-4 border-2 border-gray-300 hover:border-header duration-500 '>
                            <Link to={`/chegirma/${e.nomi}`}>
                                <h3 className='mb-2 text-lg font-medium'>{e.nomi}</h3>
                                <p>{e.muddat}</p>
                                <p>{e.taklif}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </section>
    </>
  )
}

export default Chegirma