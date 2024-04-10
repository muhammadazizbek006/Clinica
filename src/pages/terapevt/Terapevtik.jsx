import React from 'react'

// img
import terapevtik from '../../img/terapevtik.png'
const Terapevtik = () => {
  return (
    <>
    {/* title */}
    <section className='mb-11'>
         <div className="containerb">
        {/* top */}
        <div className=' flex items-center justify-between  pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={terapevtik} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Bolalar stomatologiyasi</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default Terapevtik