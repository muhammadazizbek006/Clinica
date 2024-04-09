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
        chegrimanomi:`"Bahor tabassumi"`,
        muddat:`"Aksiya davrida (22 martdan 30, 24 aprelgacha) braketlarni o'rnatish uchun 20% chegirma."`,
        taklif:`22 martdan 30 aprelgacha Clinica Native qavslarni o'rnatish uchun juda qulay shart-sharoitlarni taklif qiladi:`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`- ligatur qavslar =34 400 rubl  27 600 rubl  - Ligaturasiz qavslar =52 400 rubl  42 000 rub.`,
        yozilish:`Braketlarni o'rnatish bo'yicha batafsil maslahat olish uchun 343-77-00 raqamiga qo'ng'iroq qilib yoki onlayn ravishda ortodontologning bepul maslahatiga yoziling. Sizni ko'rishdan xursand bo'lamiz!`,
    },
    {
        id:2,
        img:brekit,
        chegrimanomi:`"Kangaroo salonlari tarmog'i mijozlari uchun maxsus taklif"`,
        muddat:`"Aksiya davrida (22 martdan 30, 24 aprelgacha) braketlarni o'rnatish uchun 20% chegirma."`,
        taklif:`Kangaroo salonida xarid qilganingizda, siz bizning klinikamiz xizmatlari uchun sovg'a sertifikatiga ega bo'lasiz`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`Ushbu sertifikat reklama sertifikatidir va klinikada boshqa aksiyalar bo'yicha xizmatlar uchun to'lovga taalluqli emas. Sertifikatlar soni cheklangan, aksiya tirajidagi barcha sertifikatlar topshirilgandan keyin tugaydi.`,
    },
    {
        id:3,
        img:brekit,
        chegrimanomi:`"Kalit taslim tish" aksiyasi`,
        taklif:`Tibbiyot xodimlari - birinchi tashrif uchun 5% chegirma`,
        maslaxat:`Ortodontist bilan birinchi maslahat - bepul`,
        aksiya:`• metall-keramika toj = 52 000 rubl. • zirkonyum toji = 55 000 rub.`,
        yozilish:`2024-yil 30-aprelgacha aksiya bo‘yicha bepul maslahat olish uchun ro‘yxatdan o‘ting va narxni mahkamlang!
        Sizga shuni eslatib o'tamizki, klinikamizning barcha xizmatlari uchun siz 2 yilgacha`,

    },
    {
        id:4,
        img:brekit,
        chegrimanomi:`Gippokrat qasamyodi`,
        taklif:`Tibbiyot muassasalari xodimlari va tibbiyot oliy o'quv yurtlari va kollejlari talabalari uchun -`,
        aksiya:`birinchi pullik tashrif uchun 5% chegirma.`,
    },
    {
        id:5,
        img:brekit,
        chegrimanomi:`Bahorgi dentakur`,
        taklif:`Endi har hafta ish kuni soat 9.00 dan 14.00 gacha bizning klinikamiz og'iz bo'shlig'i gigienasi uchun maxsus narxga ega - atigi 3500 rubl.`,
        yozilish:`Boshqa chegirmalar va reklama sovg'a sertifikatlari ushbu reklama uchun mavjud. amal qilmaydi.`,

    },
    {
        id:6,
        img:brekit,
        chegrimanomi:`Professional og'iz gigienasiga 35% chegirma`,
    
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