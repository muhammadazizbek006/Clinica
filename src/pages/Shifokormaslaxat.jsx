import React from 'react'
import { Link } from 'react-router-dom'
import { maslaxatlar } from '../Data'
import Cta from '../components/Home/Cta'
// img
import maslaxat from '../img/maslahatlashuv.png' 
import next from '../img/next.svg'
import chegirma from '../img/chegirma.svg'
import Shifokorlar from '../components/Shifokorlar'
const Shifokormaslaxat = () => {
  return (
    <>
    {/* top */}
      <section>
      <div className="containerb">
        {/* top */}
        <div className=' flex items-center justify-between pt-5'>
          {/* left */}
          <div className='flex items-center'>
            <div className='w-28 bg-akva  mr-6 '>
              <img className='  px-5 py-3  ' src={maslaxat} alt='#' />
            </div>
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Tish shifokori bilan maslahatlashuv</h2>
          </div>
          {/* right */}
          <button className='bg-header px-7 py-4 text-xl font-medium  hover:bg-online-zakaz hover:text-white duration-700'>Ro'yxatdan o'tish</button>
        </div>
      </div>
      </section>

      {/* map maslaxatlar */}
      <section className='py-12'>
        <ul className='containerb'>
          {
            maslaxatlar.map((e)=>{
              return(
                <li  key={e.id} className='border-b-2 border-b-akva border-dashed hover:bg-sky-50 duration-300'>
                  <Link className='flex justify-between items-center p-5'>
                    {/* left */}
                    <div className='flex flex-col'>
                      <h3 className='text-xl font-medium mb-3 max-w-[900px]'>{e.yonalishi}</h3>
                      <div className='flex items-center'>
                        <p className='mr-2 text-xl text-next'>Batafsil</p>
                        <img src={next} alt="#" />
                      </div>
                    </div>  
                    {/* right */}
                    <div className='flex items-center'>
                      <p className='mr-12 text-lg '>{e.narxi} rub</p>
                      <div className='flex items-center text-lg'>
                       <p className='mr-2'>{e.tashrif}</p>
                       <p>tashrif</p>
                      </div>
                      
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>

      {/* chegirma olish */}
      <section className='py-8'>
        <div className="containerb">
          {/* top */}
          <div className='flex items-center mb-8'>
            <img className='bg-header p-4 rounded-full mr-4' src={chegirma} alt="#" />
            <h2 className='text-32 font-medium border-b-4 border-b-header w-full '>Qanday chegirma olish mumkin</h2>
          </div>
          {/* chegirma */}
        <ul className='grid grid-cols-2 gap-5'>
            {/* 1 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Bahor tabassumi"</Link>
              <p>"Aksiya davrida (22 martdan 30, 24 aprelgacha) braketlarni o'rnatish uchun 20% chegirma."</p>
            </li>
            {/* 2 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Gippokrat qasamyodi"</Link>
              <p>"Tibbiyot xodimlari - birinchi tashrif uchun 5% chegirma"</p>
            </li>
            {/* 3 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Do'stingizni olib keling"</Link>
              <p>"Biz sizga ham, siz bizning klinikamizni tavsiya qilgan do'stingizga ham yoqimli bonuslar beramiz."</p>
            </li>
            {/* 4 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Fikr-mulohazangiz uchun rahmat"</Link>
              <p>"Klinikaga tashrifingiz haqida ma'lumot portallaridan birida sharh qoldiring - va keyingi uchrashuvda 5% chegirmaga ega bo'ling!"</p>
            </li>
            {/* 5 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Tug `ilgan kuning bilan!"</Link>
              <p>"Dam olish kunidan 7 kun oldin va keyin 7 kun ichida biz sizga 2000 rubl chegirma beramiz. barcha klinika xizmatlari uchun."</p>
            </li>
            {/* 6 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Baxtli soatlar"</Link>
              <p>"Klinikaga ish kunida soat 09.00 dan 12.00 gacha tashrif buyurgan bolalar va pensionerlarga 5% chegirma beriladi."</p>
            </li>
            {/* 7 */}
            <li className='p-7 border-4 border-gray-300 text-base'>
              <Link className='font-medium mb-3 '>"Oilaviy chegirma"</Link>
              <p>"Birgalikda davolash foydaliroq! Oilangizning barcha a'zolari uchun 5 dan 7% gacha chegirma."</p>
            </li>
        </ul>
        </div>
      </section>
      {/* Shifokorlar */}
      <Shifokorlar/>
      {/* cta */}
      <Cta/>
    </>

  )
}

export default Shifokormaslaxat