import React from 'react'
import { Link } from 'react-router-dom'
// img
import Logo from '../img/footerLogo.svg'
import tel from '../img/tel.svg'
import email from '../img/email.svg'
import manzil from '../img/manzil.svg'

import week from '../img/wekkfoot.svg'
import telegram from '../img/telegramfoot.svg'
import whatsapp from '../img/whatsappfoot.svg'

const Footer = () => {
  return (
   <footer className='bg-akva pt-11 pb-10'>
    <div className="containerb">
      {/* logo */}
      <div className='mb-9'>
        <img src={Logo} alt="" />
      </div>
      {/* link va bog'lanish  */}
      <ul className='flex justify-between text-base font-medium '>
        {/* link */}
        <li className='flex  space-x-10'>
          {/* left */}
          <div className='flex flex-col space-y-2'>
            <Link>Xizmatlar va narxlar</Link>
            <Link>Klinika haqida</Link>
            <Link>Hujjatlar va litsenziyalar</Link>
          </div>
          {/* center */}
          <div className='flex flex-col space-y-2'>
            <Link>Mutaxassislar</Link>
            <Link>Sharhlar</Link>
            <Link>Nazorat qiluvchi organlar</Link>
          </div>
          {/* right */}
          <div className='flex flex-col space-y-2'>
            <Link>Yangiliklar</Link>
            <Link>Kontaktlar</Link>
          </div>
        </li>
          {/* center */}
          <li className='w-full max-w-96'>
            <p>MChJ "Native Denta Clinic</p>
            <Link>2023 yil 23 iyundagi L041-01021-66/00659255-sonli litsenziya. </Link>
            <Link>Shaxsiy ma'lumotlarni qayta ishlash siyosati </Link>
          </li>
        {/* right */}
        <li className='space-y-3'>
          <Link className='flex items-center'>
            <img className='mr-3' src={tel} alt="#" />
            <p>+998 91 475 06 12</p>
          </Link>

          <Link className='flex items-center'>
            <img  className='mr-3' src={email} alt="#" />
            <p>umarovmuxammadaziz20@gmail.com</p>
          </Link>

          <Link className='flex items-center'>
            <img className='mr-3' src={manzil} alt="#" />
            <p>Ekaterinburg, st. Azina, 31</p>
          </Link>
          {/* ish vaqti */}
          <p>Ish vaqti: dushanbadan yakshanbagacha <br /> 09:00 dan 21:00 gacha </p>
          {/* ijtimoiy tarmoqlar */}
          <div className='flex space-x-5  items-center'>
            {/* week */}
              <Link className='p-1 bg-white rounded-3xl'>
                <img src={week} alt="#" />
              </Link>
              {/* telegram */}
              <Link className='p-2.5 bg-white rounded-3xl'>
                <img src={telegram} alt="#" />
              </Link>
              {/* whatsapp */}
              <Link className='p-2 bg-white rounded-3xl'>
                <img src={whatsapp} alt="#" />
              </Link>
          </div>
        </li>
      </ul>
    </div>
   </footer>
  )
}

export default Footer