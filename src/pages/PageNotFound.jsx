import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
      <section  className='flex flex-col items-center py-10'>
          <h2 className='text-6xl font-bold text-online-zakaz mb-6'>404</h2>
            <p className='text-32 font-medium  mb-5'>Bu sahifa mavjud emas</p>
            <Link path='/' className='bg-header text-base hover:bg-online-zakaz hover:text-white duration-500 px-8 py-3'>Asosiy sahifaga qaytish</Link>
      </section>
    </>
  )
}

export default PageNotFound