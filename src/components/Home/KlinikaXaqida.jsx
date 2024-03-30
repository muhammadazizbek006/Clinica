import React from 'react'
// import clinika from '../../video/clinika.mp4'
const KlinikaXaqida = () => {
  return (
    <section className='xaqida py-16'>
        <div className="containerb">
        <h2 className='text-42 mb-12'>Klinika haqida</h2>

        <ul className='flex justify-between items-center'>
            
            {/* left */}
            <li className='text-base max-w-[633px]'>
                <p className='mb-10'>
                Clinica Native terapevtik, protez va profilaktik stomatologiyani o'z ichiga olgan keng ko'lamli stomatologik xizmatlarni taklif etadi. Biz  bemorlarimizga har qanday vaziyatda yordam berish uchun zamonaviy materiallar va davolash usullaridan foydalanamiz.</p>
                <p>Kariyes, kariyesning murakkab shakllari, karioz bo'lmagan shikastlanishlar, tishlarni tiklash, endodontik davolash, tishlarni oqartirish va yallig'lanishli periodontal kasalliklarni konservativ davolash.
                Zamonaviy diagnostika usullari (EXTARO 300 stomatologik mikroskopi va radiovizografik va rentgenologik stomatologik intraoral apparatlar)
                Flash tizimi bilan professional tishlarni oqartirish
                Vektor Paro Pro qurilmalari va Doctor Smile diodli lazer yordamida yallig'lanishli periodontal kasalliklarni davolash.</p>
                <p>Davolash rejasi kasallikning klinik ko'rinishlariga, bemorning yoshiga va boshqa omillarga qarab mutaxassis tomonidan individual ravishda tanlanadi.</p>
            </li>
            <li>
                 <video controls className="mt-4 w-[656px] h-[369px] inline-block">
                  <source src="your-video-url.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* <video width="656" preload="false" playsinline="true" controls="true">
                    <source src={clinika} type="video/mp4;">
                </video> */}
            </li>
        </ul>
        </div>
        
    </section>
  )
}

export default KlinikaXaqida