// carusel img
import karusel1 from './img/karusel1.png'
import karusel2 from './img/karusel2.png'
// import karusel3 from './img/karusel3.png'
// import karusel4 from './img/karusel4.png'
import karusel5 from './img/karusel5.png'
// import karusel6 from './img/karusel6.png'
import karusel7 from './img/karusel7.png'
// import karusel8 from './img/karusel8.png'


// carusels
export const carusels = [
    {
        id:1,
        tavsiya:'Tish shifokorining birinchi uchrashuvi BEPUL!',
        img:karusel5,
    },
    {
        id:2,
        tavsiya:'Tish formulasi',
        formula:"Bolaning og'iz bo'shlig'ini profilaktik tekshirish - 0 rub.",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel2,
    },
    {
        id:3,
        tavsiya:'Baxtli soatlar',
        chegirma:"Bolalar va nafaqaxo'rlar uchun ish kunlari 09:00 dan 12:00 gacha 5% chegirma ",
        img:karusel7,
    },
    {
        id:4,
        tavsiya:'Oilaviy chegirma',
        chegirma:"Do'stona va sog'lom oila uchun 7% gacha chegirma",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel1,
    },
    {
        id:5,
        tavsiya:'Tish formulasi',
        formula:"Bolaning og'iz bo'shlig'ini profilaktik tekshirish - 0 rub.",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel2,
    },
    {
        id:6,
        tavsiya:'Tish formulasi',
        formula:"Bolaning og'iz bo'shlig'ini profilaktik tekshirish - 0 rub.",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel2,
    },
    {
        id:7,
        tavsiya:'Tish formulasi',
        formula:"Bolaning og'iz bo'shlig'ini profilaktik tekshirish - 0 rub.",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel1,
    },
    {
        id:8,
        tavsiya:'Tish formulasi',
        formula:"Bolaning og'iz bo'shlig'ini profilaktik tekshirish - 0 rub.",
        royxat:"Sertifikatni ro'yxatdan o'tkazish - 500 rubl.",
        img:karusel2,
    },
]

// aos stamatalogik xizmatlar

import xizmat1 from './img/maslahatlashuv.png'
import xizmat2 from './img/bolalar.png'
import xizmat3 from './img/profissianal.png'
import xizmat4 from './img/terapevtik.png'
import xizmat5 from './img/estetik.png'
import xizmat6 from './img/periodanatalogiya.png'
import xizmat7 from './img/protezlash.png'
import xizmat8 from './img/implantatsya.png'
import xizmat9 from './img/ortodontiya.png'
export const xizmatlar = [
    {
        id:1,
        img:xizmat1,
        title:"Tish shifokori bilan maslahatlashuv",
    },
    {
        id:2,
        img:xizmat2,
        title:"Bolalar stomatologiyasi",
    },
    {
        id:3,
        img:xizmat3,
        title:"Professional og'iz gigienasi",
    },
    {
        id:4,
        img:xizmat4,
        title:"Terapevtik xizmatlar",
    },
    {
        id:5,
        img:xizmat5,
        title:"Estetik stomatologiya",
    },
    {
        id:6,
        img:xizmat6,
        title:"Periodontologiya",
    },
    {
        id:7,
        img:xizmat7,
        title:"Protezlash",
    },
    {
        id:8,
        img:xizmat8,
        title:"Implantatsiya va jarrohlik",
    },
    {
        id:9,
        img:xizmat9,
        title:"Ortodontiya",
    },
]


// ommabop xizmatlar

export const ommabop = [
    {
        id:1,
        xizmat:'3D intraoral skanerlash',
        narxi:5500,
    },
    {
        id:2,
        xizmat:'Kariyesni davolash',
        narxi:5500,
    },
    {
        id:3,
        xizmat:'Stomatolog-terapevt bilan maslahatlashuv',
        narxi:300 ,
    },
    {
        id:4,
        xizmat:"Og'iz bo'shlig'ining keng qamrovli gigienasi",
        narxi:5500,
    },
    {
        id:5,
        xizmat:'Implantatsiya All-on-4 vaqtinchalik shartli olinadigan protez, mustahkamlovchi akril',
        narxi:'190 000',
    },
    {
        id:6,
        xizmat:"Havo oqimi tishlarini tozalash",
        narxi:1800,
    },
    {
        id:7,
        xizmat:"Pediatrik stomatolog bilan maslahatlashuv",
    },
    {
        id:8,
        xizmat:"Ultrasonik tishlarni tozalash",
        narxi:1800,
    },
    {
        id:9,
        xizmat:"Tish chiqarish",
        narxi:2000,
    },
]


// klinika shifokorlari
import kristina from './img/kristina.jpg'
import yelena from './img/yelena.jpg'
import anjelika from './img/anjelika.jpg'
import anna from './img/anna.jpg'
import aleksandra from './img/aleksandra.jpg'
import ilnur from './img/ilnur.jpg'
// import kristina from './img/Kristina.jpg'
// import kristina from './img/Kristina.jpg'
// import kristina from './img/Kristina.jpg'
// import kristina from './img/Kristina.jpg'

export const shifokorlar =[
    {
        id:1,
        img:kristina,
        name:"Dementieva Kristina Dmitrievna",
        ixtisosligi:["Tish jarrohi", "Stomatolog-terapevt", "Ortoped tish shifokori"],
    },
    {
        id:2,
        img:yelena,
        name:"Svetlakova Elena Nikolaevna",
        ixtisosligi:["Tish shifokori-periodontist", "Tibbiyot fanlari doktori"],
    },
    {
        id:3,
        img:anjelika,
        name:"Mustafina Anjelika Albertovna",
        ixtisosligi:["Stomatolog-ortodontist"],
    },
    {
        id:4,
        img:anna,
        name:"Tutynina Anna Olegovna",
        ixtisosligi:["Pediatrik stomatolog"],
    },
    {
        id:5,
        img:aleksandra,
        name:"Salmina Aleksandra Vadimovna",
        ixtisosligi:["Tish jarrohi"],
    },
    {
        id:6,
        img:ilnur,
        name:"Mustafin Ilnur Mubarikovich",
        ixtisosligi:["Ortoped-tish shifokori", "Tish jarrohi"],
    },
]

// ko'p beriladigan savollar

export const savollar = [
    {
        id:1,
        savol:"Stomatologiyada ro'yxatdan o'tish qanday ishlaydi?",
        javob:"Uchrashuvni veb-saytda yoki 343-77-00 raqamiga qo'ng'iroq qilib belgilashingiz mumkin. Veb-sayt orqali uchrashuvga yozilish uchun “Onlayn uchrashuv” tugmasini bosing, xizmatni, shifokorni, qulay vaqtni tanlang va maʼlumotlaringizni kiriting."
    },
    {
        id:2,
        savol:"Stomatologiya klinikasiga tashrif buyurishga qanday tayyorgarlik ko'rish kerak?",
        javob:"Uchrashuvdan oldin ovqatlanishingizga ishonch hosil qiling. Birinchidan, to'yinganlik hissi psixologik qulaylikni ta'minlaydi. Va ikkinchidan, davolanishdan keyin bir muncha vaqt (odatda 2 soatdan ortiq bo'lmagan) oziq-ovqat iste'mol qilishda cheklovlar bo'lishi mumkin. Tishlaringizni yuving, agar buning iloji bo'lmasa, suv bilan yuving. Shifokorga tashrif buyurishdan bir kun oldin spirtli ichimliklar ichmang, chunki spirtli ichimliklar og'riq qoldiruvchi vositalarning ta'sirini kamaytirishi mumkin."
    },
    {
        id:3,
        savol:"Stomatologiyada ro'yxatdan o'tish qanday ishlaydi?",
        javob:"Uchrashuvni veb-saytda yoki 343-77-00 raqamiga qo'ng'iroq qilib belgilashingiz mumkin. Veb-sayt orqali uchrashuvga yozilish uchun “Onlayn uchrashuv” tugmasini bosing, xizmatni, shifokorni, qulay vaqtni tanlang va maʼlumotlaringizni kiriting."
    },
    {
        id:4,
        savol:"Sizning stomatologiyangiz qanday xizmatlarni taqdim etadi?",
        javob:"Biz bolalar va kattalar uchun stomatologik xizmatlarning to'liq spektrini taqdim etamiz: tishlarni davolash va olib tashlash, tishlashlarni tuzatish, protezlash, implantatsiya, milklarni davolash, oqartirish, professional og'iz gigienasi."
    },
    {
        id:5,
        savol:"Clinica Native stomatologiyasida davolanish narxi qancha?	",
        javob:`Individual stomatologik xizmatlarning narxlari "Xizmatlar va narxlar" bo'limida ko'rsatilgan. Davolashning yakuniy qiymati har doim tashxisdan keyin individual ravishda hisoblanadi.`
    },
    {
        id:6,
        savol:"Xizmatlar bo'yicha aksiyalar va chegirmalaringiz bormi?",
        javob:"Biz yangi va doimiy mijozlarni xursand qilishni yaxshi ko'ramiz, shuning uchun biz muntazam ravishda aktsiyalarni o'tkazamiz va yoqimli chegirmalarni taklif qilamiz. Barcha aktsiyalar alohida bo'limda taqdim etilgan."
    }
]
