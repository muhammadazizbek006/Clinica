import React from 'react'
// img
import maslaxat from '../img/maslahatlashuv.png' 
const Shifokormaslaxat = () => {
  return (
    <section>
      <div className="containerb">
        {/* top */}
        <div className='mb-12 flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-14 bg-akva  mr-6 '>
              <img className='  p-4  ' src={maslaxat} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Tish shifokori bilan maslahatlashuv</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
        </div>

        {/*   */}
      </div>
    </section>
  )
}

export default Shifokormaslaxat