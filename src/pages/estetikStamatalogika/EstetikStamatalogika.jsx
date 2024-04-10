import React from 'react'


// img
import estetik from '../../img/estetik.png'
const EstetikStamatalogika = () => {
  return (
    <>
        {/* title */}
    <section>
      <div className="containerb">
        {/* top */}
        <div className=' flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={estetik} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Estetik stomatologiya</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default EstetikStamatalogika