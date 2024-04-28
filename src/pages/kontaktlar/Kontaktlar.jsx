import React from 'react'

const Kontaktlar = () => {
  return (
    <>
        <section className='py-8'>
            <div className="containerb">
                {/* title */}
                <h2 className='text-42 mb-8'>Kontaktlar</h2>
                <ul className='space-y-2'>
                    <li className='flex items-center space-x-2'>
                        <strong>Manzil:</strong>
                        <p>Ekaterinburg, st. Azina, 31</p>
                    </li>
                    <li  className='flex items-center space-x-2'>
                        <strong>Ish vaqti:</strong>
                        <p>dushanba-yaks 09:00 - 21:00</p>
                    </li>
                    <li  className='flex items-center space-x-2'>
                        <strong>Telefon:</strong>
                        <p> +7 (343) 343 77 00</p>
                    </li>
                    <li  className='flex flex-col text-start justify-start items-start sm:flex-row sm:space-x-2'>
                        <strong>Pochta:</strong>
                        <a href="email">umarovmuxammadazizbek20@gmail.com</a>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Kontaktlar