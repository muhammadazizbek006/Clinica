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


// tish shifokori bilan maslaxatlashuv

export const maslaxatlar = [
    // {
    //     id:1,
    //     img:karusel5,
    //     yonalishi:"Stomatolog-terapevt bilan maslahatlashuv",
    //     narxi:600,
    //     tashrif:1,
    //     boshlangichnarxi:300,
    //     vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
    //     sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    // },
    {
        id:2,
        img:karusel5,
        yonalishi:"tibbiyot fanlari doktori bilan maslahatlashuv",
        narxi:1000,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:3,
        img:karusel5,
        yonalishi:"Ortodontist bilan maslahatlashish",
        narxi:600,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:4,
        img:karusel5,
        yonalishi:"Parodontolog, tibbiyot fanlari doktori bilan maslahatlashuv	",
        narxi:1000,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:5,
        img:karusel5,
        yonalishi:"Stomatolog-terapevt bilan maslahatlashuv",
        narxi:600,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:6,
        img:karusel5,
        yonalishi:"Tish shifokori bilan batafsil maslahatlashuv (barcha mutaxassisliklar): tekshiruv, maslahat (agar kerak bo'lsa, boshqa mutaxassislarni jalb qilish), qo'lda etkazib berish bilan davolash rejasini tuzish",
        narxi:1500,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:7,
        img:karusel5,
        yonalishi:"Tish jarroh bilan maslahatlashuv",
        narxi:600,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },
    {
        id:8,
        img:karusel5,
        yonalishi:"Pediatrik stomatolog bilan maslahatlashuv",
        narxi:0,
        tashrif:1,
        boshlangichnarxi:300,
        vazifasi:"Har qanday tish davolash tish shifokori bilan maslahatlashuvdan boshlanadi. Bu shifokor og'iz bo'shlig'ini tekshiradigan, qo'shimcha testlarni tayinlaydigan, anamnezni to'playdigan, kontrendikatsiyalar va cheklovlarni aniqlaydigan va tavsiyalar beradigan dastlabki uchrashuvdir.Tishlar va tish go'shtini sog'lom saqlash uchun muntazam ravishda stomatologik tekshiruvdan o'tish muhimdir. Tishlaringiz bilan hamma narsa yaxshi bo'lsa ham, har olti oyda bir marta tish shifokoriga tashrif buyurish tavsiya etiladi. Agar siz ovqat paytida og'riq, noqulaylik haqida tashvishlansangiz yoki kariesga shubha bo'lsa, birinchi uchrashuvda shifokor tashxis qo'yadi, davolash rejasini ishlab chiqadi va keyingi uchrashuvga tayinlanadi. Agar kerak bo'lsa, tish shifokori sizni boshqa mutaxassislarga ham yuboradi.",
        sababnomi:"Tish shifokoriga tashrif buyurish uchun TOP 10 ta sabab:",
    },

]

// chegirma olish usullari
import brekit from './img/aksiyaD/brekit.jpg'
export const chegirmalar = [
    {
        id:1,
        img:brekit,
        chegrmanomi:`"Bahor tabassumi"`,
        muddat:`"Aksiya davrida (22 martdan 30, 24 aprelgacha) braketlarni o'rnatish uchun 20% chegirma."`,
        taklif:`22 martdan 30 aprelgacha Clinica Native qavslarni o'rnatish uchun juda qulay shart-sharoitlarni taklif qiladi:`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`- ligatur qavslar =34 400 rubl  27 600 rubl  - Ligaturasiz qavslar =52 400 rubl  42 000 rub.`,
        yozilish:`Braketlarni o'rnatish bo'yicha batafsil maslahat olish uchun 343-77-00 raqamiga qo'ng'iroq qilib yoki onlayn ravishda ortodontologning bepul maslahatiga yoziling. Sizni ko'rishdan xursand bo'lamiz!`,
    },
    {
        id:2,
        img:brekit,
        chegrmanomi:`"Kangaroo salonlari tarmog'i mijozlari uchun maxsus taklif"`,
        muddat:`"Aksiya davrida (22 martdan 30, 24 aprelgacha) braketlarni o'rnatish uchun 20% chegirma."`,
        taklif:`Kangaroo salonida xarid qilganingizda, siz bizning klinikamiz xizmatlari uchun sovg'a sertifikatiga ega bo'lasiz`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`Ushbu sertifikat reklama sertifikatidir va klinikada boshqa aksiyalar bo'yicha xizmatlar uchun to'lovga taalluqli emas. Sertifikatlar soni cheklangan, aksiya tirajidagi barcha sertifikatlar topshirilgandan keyin tugaydi.`,
    },
    {
        id:3,
        img:brekit,
        chegrmanomi:`"Kalit taslim tish" aksiyasi`,
        taklif:`Tibbiyot xodimlari - birinchi tashrif uchun 5% chegirma`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`• metall-keramika toj = 52 000 rubl. • zirkonyum toji = 55 000 rub.`,
        yozilish:`2024-yil 30-aprelgacha aksiya bo‘yicha bepul maslahat olish uchun ro‘yxatdan o‘ting va narxni mahkamlang!
        Sizga shuni eslatib o'tamizki, klinikamizning barcha xizmatlari uchun siz 2 yilgacha`,

    },
    {
        id:4,
        img:brekit,
        chegrmanomi:`Gippokrat qasamyodi`,
        taklif:`Tibbiyot muassasalari xodimlari va tibbiyot oliy o'quv yurtlari va kollejlari talabalari uchun -`,
        aksiya:`birinchi pullik tashrif uchun 5% chegirma.`,
    },
    {
        id:5,
        img:brekit,
        chegrmanomi:`Bahorgi dentakur`,
        taklif:`Endi har hafta ish kuni soat 9.00 dan 14.00 gacha bizning klinikamiz og'iz bo'shlig'i gigienasi uchun maxsus narxga ega - atigi 3500 rubl.`,
        yozilish:`Boshqa chegirmalar va reklama sovg'a sertifikatlari ushbu reklama uchun mavjud. amal qilmaydi.`,

    },
    {
        id:6,
        img:brekit,
        chegrmanomi:`Professional og'iz gigienasiga 35% chegirma`,
    
        taklif:`5500 rublga professional og'iz gigienasi protsedurasini oling. –
        keyingi rejalashtirilgan protsedura uchun 35% chegirmaga ega bo'ling!`,
        maslaxat:`Hatto eng ehtiyotkorlik bilan g'amxo'rlik bilan ham, tish blyashka hosil bo'lishining oldini olish mumkin emas. Asta-sekin, erishish qiyin bo'lgan joylarda blyashka, keyin esa tatar hosil bo'ladi. Undan keyin karies paydo bo'lishining oldini olish uchun siz har olti oyda bir marta tish shifokoriga tashrif buyurishingiz kerak.`,
        aksiya:`
        Aksiyaga ko'ra takroriy professional og'iz gigienasi narxi 3500 rublni tashkil qiladi.
        Har 6 oyda bir marta bajarish tavsiya etiladi.`,

    }
] 

// header links nav detail

export const linklar = [
    {
        id:1,
        yonalishi:`Tish shifokori bilan maslahatlashuv`,
    },
    {
        id:2,
        yonalishi:`Bolalar stomatologiyasi`,
    },
    {
        id:3,
        yonalishi:`Terapevtik xizmatlar`,
    },
    {
        id:4,
        yonalishi:`Estetik stamatalogiya`,
    },
    {
        id:5,
        yonalishi:`Peri Adanatalogiya`,
    },
    {
        id:6,
        yonalishi:`Pratezlash`,
    },
    {
        id:7,
        yonalishi:`Diagnostika jarayoni`,
    }
]

// bolalar stamatalogiyasi
import img1 from './img/aksiyaD/muxrlash.png'

import img2 from './img/aksiyaD/kares.png'
import img3 from './img/aksiyaD/pulpit.png'
import img5 from './img/aksiyaD/gigiena.png'
import img4 from './img/aksiyaD/sut.png'
import img6 from './img/aksiyaD/gigiena.png'

export const bolalar = [
    {
        id:1,
        img:img1,
        yonalishi:`Tish yoriqlarini muhrlash`,
        narxi:1450,
        soni:1,

    },
    {
        id:2,
        img:img2,
        yonalishi:`Bolalarda kariyesni davolash`,
        soni:1,
        narxi:2900,
        sharxi:`Bolalarda kariesni davolash Clinica Native ning asosiy protseduralaridan biridir. Bizning pediatrik stomatologlarimiz bolalardagi kariesni davolashda katta tajriba va bilimga ega - asosiy va doimiy tishlar.] 
        Sut tishlari bolaning rivojlanishidagi eng muhim bosqichdir. "Dastlabki" tishlarning holati doimiy tishlarning rivojlanishini belgilaydi. Shuning uchun bolalarda birlamchi tishlarning kariyesini davolash juda zarur, bu tishlarning sog'lig'ini tiklashga yordam beradi va ularni keyingi nobud bo'lishdan himoya qiladi.
        Klinikamiz Ekaterinburgdagi bolalarda kariyesni juda hamyonbop narxlarda davolashni ta'minlaydi . Sifat esa eng so'nggi jihozlar va, albatta, mutaxassislarning mahorati bilan ta'minlangan yuqori darajada. Hech kim moliyaviy sabablarga ko'ra tish shifokoriga borishni kechiktirmasligi uchun sifat va arzonlik o'rtasidagi optimal muvozanatga erishishga intilamiz.
        Klinikada biz eng qulay muhitni yaratishga harakat qildik, shunda tish shifokoriga tashrif buyurish bolaga hech qanday stress tug'dirmaydi. Bizning shifokorlarimiz har bir kichik bemorga qanday yondashishni bilishadi, uning yoshi, psixologik tayyorgarligi va tish tizimining xususiyatlarini hisobga oladilar.`,

    },
    {
        id:3,
        img:img3,
        yonalishi:`Sut tishini olib tashlash`,
        narxi:1450,
        soni:1,
    },
    {
        id:4,
        img:img4,
        yonalishi:`Sut tishining pulpitini davolash`,
        narxi:1450,
        soni:1,

        sharxi:`Pulpit - tish bo'shlig'idagi neyrovaskulyar to'plamning (pulpa) yallig'lanishi. Odatda bolalarda pulpitning sababi rivojlangan kariesdir. Sut tishlarida karies birlamchi tishlarga qaraganda tezroq rivojlanadi, chunki ulardagi emal yumshoqroq va ingichka bo'ladi. Davolashsiz, karies pulpitga aylanadi, og'riq va issiq va sovuqqa reaktsiyaga sabab bo'ladi.

        Sut tishlarini davolashning hojati yo'q degan noto'g'ri fikr bor, chunki molarlar o'sib boradi, lekin ko'p hollarda ota-onalar unga unchalik ahamiyat bermasa ham, tishni davolash kerak.
        
        Bundan tashqari, Clinica Native stomatologlari faqat ekstremal holatlarda ekstraktsiyaga murojaat qilishadi va har doim bolalarda sut tishlari pulpitini davolashni talab qiladilar, chunki:
        
        ba'zi tishlarning yo'qligi malokluziya xavfini oshiradi;
        davolanmagan sut tishidan infektsiya molarlarning kurtaklariga tarqalishi mumkin.
        Agar chaqalog'ingiz og'riqdan shikoyat qilsa, tishlari sovuq va issiqqa reaksiyaga kirishsa va siz kariesni sezsangiz, Clinica Native bilan uchrashuvga yoziling. Biz konsultatsiya o'tkazamiz, tashrifingiz uchun qulay vaqtni belgilaymiz va og'riq va ko'z yoshlarsiz tegishli davolanishni tanlaymiz.`,

    },
    {
        id:5,
        img:img5,
        yonalishi:`Bola uchun professional og'iz gigienasi`,
        narxi:2000,
        soni:1,
    },
    {
        id:6,
        img:img6,
        yonalishi:`Pediatrik stomatolog bilan maslahatlashuv`,
        narxi:0,
        soni:1,
        sharxi:`Tish salomatligiga g'amxo'rlik bolalikdan boshlanishi kerak. Clinica Native-da bolalar stomatologiyasi sohasi yosh bemorlarga, zamonaviy jihozlarga va yuqori sifatli materiallarga e'tibor berishni anglatadi. Bolalar uchun stomatologik davolanish har doim pediatrik stomatolog bilan maslahatlashuvdan boshlanadi - shifokor tekshiruv o'tkazadigan va og'iz bo'shlig'i kasalliklarini davolash va oldini olish bo'yicha chora-tadbirlar rejasini tuzadigan dastlabki uchrashuv.`,

    }
]

// terapevtik
import kares from './img/terapevt/kares.png'
import pulpiton from './img/terapevt/pulpiton.png'
import mikroskop from './img/terapevt/mikroskop.png'
import perodantint from './img/terapevt/perodantint.png'
export const Terapevt = [
    {
        id:1,
        yonalishi:`Kariyesni davolash`,
        narxi:5500-10500,
        soni:`1 tish`,
        img:kares,
        boshlanishN:5500,
        sharx:`Tish kariesining oldini olish uchun tish shifokoriga tashrif buyurish, muntazam tekshiruvlardan o'tish va profilaktik tozalash kerak. Agar karies paydo bo'lsa, tishlarning parchalanishi va asoratlarni oldini olish uchun uni imkon qadar erta davolash kerak. Tish chirishini davolash ta'sirlangan to'qimalarni olib tashlash va tishni to'ldirishni yoki og'irroq holatlarda inley yoki toj kabi boshqa usullarni qo'llashni o'z ichiga olishi mumkin. Tish kariesining oldini olish uchun siz shakar va shakarli ichimliklarni iste'mol qilishni ham nazorat qilishingiz kerak, tishlaringizni qattiq narsalar bilan urishdan saqlaning va emalni mustahkamlash uchun ftoridli mahsulotlardan foydalaning. Tishlarni kariyesga qarshi maxsus xususiyatlarga ega pastalar va chayishlar yordamida ham himoya qilish mumkin.`,
        malumotTitle:`Kariyes sabablari:`,
        malumot:`Tuprik tarkibining o'zgarishi va pH ning kislotali tomonga siljishi kariyes rivojlanishi uchun qulay sharoit yaratadi, chunki kislotali muhit tish emalining demineralizatsiyasiga yordam beradi.`,
        malumot2:`Streptokokklar, laktobakteriyalar va aktinomitsetlarning mavjudligi ham og'iz bo'shlig'iga ta'sir qilishi mumkin, chunki bu mikroorganizmlar gingivit yoki periodontit kabi turli yuqumli kasalliklarning qo'zg'atuvchisi hisoblanadi.`,
        malumot3:`Ratsionda qaynatilgan va pyuresi bo'lgan ovqatlarning ustunligi bilan vitaminlar va minerallarning etishmasligi yuzaga kelishi mumkin, bu tish va og'iz shilliq qavatining sog'lig'iga ta'sir qiladi, chunki ular sog'lig'ini saqlashda muhim rol o'ynaydi.`
    },
    {
        id:2,
        yonalishi:`Pulpitni davolash`,
        narxi:`12000-34000 `,
        soni:`1 tish`,
        img:pulpiton,
        boshlanishN:12000,
        sharx:`Pulpit bilan, sovuq va issiqqa sezgirlikning oshishi bilan bir qatorda, pulpit ovqatni tishlash yoki chaynash paytida og'riq, zararlangan tish atrofidagi milklarning shishishi, tishning rangi o'zgarishi va pulpit yorig'ining paydo bo'lishi bilan birga bo'lishi mumkin (vertikal yorilish). tish yuzasi). Agar siz pulpitga shubha qilsangiz, tashxis va davolash uchun tish shifokoriga murojaat qilish tavsiya etiladi.`,
        sharx2:`Semptomlar o'tkir pulpitga, tish pulpasini ta'sir qiladigan yallig'lanish jarayoniga xos bo'lishi mumkin. Tish pulpasida nerv uchlari va qon tomirlari mavjud bo'lib, yallig'lanish kuchli og'riqlarga olib kelishi mumkin.`,
        malumot:`O'tkir pulpit odatda to'satdan paydo bo'ladi va hech qanday ko'rinadigan tirnash xususiyatisiz paydo bo'lishi mumkin. Og'riq ayniqsa kechasi yoki issiq yoki sovuq narsalar bilan aloqa qilganda sezilishi mumkin. Tirnashtiruvchi bartaraf etilgandan so'ng, og'riq biroz vaqt davom etishi mumkin.`,
        malumot2:`Og'riqning lokalizatsiyasi noaniq bo'lishi mumkin va bemor uni butun jag'ida his qilishi mumkin. Pulpit o'sib borishi bilan og'riq kuchayib, zonklama bo'lishi mumkin, hujumlar orasidagi og'riqsiz intervallar qisqaroq bo'lishi mumkin.`
    },
    {
        id:3,
        yonalishi:`Periodontitni davolash`,
        narxi:`5500-10500 `,
        soni:`1 tish`,
        img:perodantint,
        boshlanishN:12000,
        sharx:`Periodontit - bu zudlik bilan davolashni talab qiladigan yallig'lanishli tish kasalligi. Agar nazorat qilinmasa, infektsiya atrofdagi to'qimalarga tarqalishi va xo'ppoz, osteomielit (suyaklarning yallig'lanishi) yoki sepsis (umumiy infektsiya) kabi jiddiy asoratlarni keltirib chiqarishi mumkin. Shuning uchun asoratlar rivojlanishining oldini olish va tishlar va atrofdagi to'qimalarning sog'lig'ini saqlash uchun o'tkir periodontitning dastlabki belgilarida tish shifokoriga murojaat qilish muhimdir.`,
        malumotTitle:`Periodontitning mumkin bo'lgan sabablari va belgilari:`,
        malumot:`Sifatsiz ildiz kanallarini to'ldirish, rivojlangan pulpit, davolanmagan chuqur karies va periodontal anomaliyalar periodontitning rivojlanishiga olib kelishi mumkin.`,
        malumot2:`O'tkir periodontit to'satdan kuchli og'riq bilan tavsiflanadi, bu issiq yoki sovuq tirnash xususiyati beruvchi yoki kechasi paydo bo'lishi mumkin. Og'riq jag'ning bo'ylab tarqalishi va pulsatsiyalanishi mumkin. Tirnashtiruvchi bartaraf etilgandan so'ng, og'riq biroz vaqt davom etishi mumkin.`,
        malumot3:`Surunkali periodontit davriy og'riqlar bilan namoyon bo'lishi yoki asemptomatik bo'lishi mumkin. Bunday hollarda infektsiya suyak to'qimasini yo'q qilishda davom etishi va tish va uning atrofidagi to'qimalarning yomonlashishiga olib kelishi mumkin.`
    },
    {
        id:4,
        yonalishi:`Mikroskop yordamida davolash`,
        narxi:`3000`,
        soni:`1 xizmat`,
        img:mikroskop,
        boshlanishN:3000,
        sharx:`Operatsion mikroskop zamonaviy stomatologiyaning ilg'or yutuqlaridan biri bo'lib, shifokorlarga yuqori darajada ishlash imkonini beradi. Mikroskopdan foydalanish tish shifokoriga ildiz kanallarini tozalash va to'ldirish sifatini sezilarli darajada yaxshilash imkonini beradi.`,
        sharx2:`Optik qurilma tasvirni kattalashtiradi, hatto eng kichik nuqsonlarni aniqlashga yordam beradi va ta'sirlangan to'qimalarni yanada aniqroq olib tashlashni ta'minlaydi.`,
        sharx3:`Mikroskop yordamida tish shifokori jarayonni yaxshiroq ko'rishi va nazorat qilishi mumkin, bu esa natijalarning sifati va chidamliligini oshiradi. Sizni Clinica Native da mikroskop ostida stomatologik davolanishga taklif qilamiz! Uchrashuvga yozilish uchun veb-saytda so'rov qoldiring yoki 343-77-00 raqamiga qo'ng'iroq qiling.`,
        malumotTitle:`Tishlarni mikroskop bilan davolashning afzalliklari`,
        malumot:`Maksimal diagnostika aniqligi: bu tekshirish vaqtida ko'rinmaydigan nuqsonlarni aniqlashning bir usuli.`,
        malumot2:`Kariyesni davolash va tishlarni tiklash vaqtida yaxshi vizualizatsiya`,
        malumot3:`Davolash paytida tish shikastlanishi bilan bog'liq asoratlar xavfini kamaytirish`
    },
    {
        id:5,
        yonalishi:`Tashxis uchun mikroskopdan foydalanish`,
        narxi:1500,
        soni:`1 xizmat`,
        img:mikroskop,
        boshlanishN:3000,
        sharx:`Operatsion mikroskop zamonaviy stomatologiyaning ilg'or yutuqlaridan biri bo'lib, shifokorlarga yuqori darajada ishlash imkonini beradi. Mikroskopdan foydalanish tish shifokoriga ildiz kanallarini tozalash va to'ldirish sifatini sezilarli darajada yaxshilash imkonini beradi.`,
        sharx2:`Optik qurilma tasvirni kattalashtiradi, hatto eng kichik nuqsonlarni aniqlashga yordam beradi va ta'sirlangan to'qimalarni yanada aniqroq olib tashlashni ta'minlaydi.`,
        sharx3:`Mikroskop yordamida tish shifokori jarayonni yaxshiroq ko'rishi va nazorat qilishi mumkin, bu esa natijalarning sifati va chidamliligini oshiradi. Sizni Clinica Native da mikroskop ostida stomatologik davolanishga taklif qilamiz! Uchrashuvga yozilish uchun veb-saytda so'rov qoldiring yoki 343-77-00 raqamiga qo'ng'iroq qiling.`,
        malumotTitle:`Tishlarni mikroskop bilan davolashning afzalliklari`,
        malumot:`Maksimal diagnostika aniqligi: bu tekshirish vaqtida ko'rinmaydigan nuqsonlarni aniqlashning bir usuli.`,
        malumot2:`Kariyesni davolash va tishlarni tiklash vaqtida yaxshi vizualizatsiya.`,
        malumot3:`Davolash paytida tish shikastlanishi bilan bog'liq asoratlar xavfini kamaytirish.`,
    }
]