import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Maqola() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300  px-5 py-3 rounded-lg my-4"
      >
        <div className="flex ">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px]  md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            ETIKA MЕ’YORLARI VA MUALLIFLIK HUQUQI
          </p>
        </div>
        <p className="">
          Tahririyatga taqdim etilgan materiallar ilgari boshqa nashrlarda chop
          etilgan yoki boshqa nashrlarda ko‘rib chiqilayotgan bo‘lmasligi kerak.
          Shuning uchun muallif tahririyatga ushbu shaklda nashr etish uchun
          taqdim etgan materialini barcha hammualliflar va ish bajarilgan
          tashkilot nomidan kafolatlanishi kerak. Nashrga qabul qilingan
          maqolani jurnal tahririyatining yozma roziligisiz ularni boshqa
          tillarga tarjima qilib takroran chop etmaslik kafolatini oladi.
          Shuningdek, muallif jurnalning etika me’yorlari bilan tanishganligi,
          roziligi va keltirilgan barcha mas’uliyatlarni zimmasiga olganligini
          tasdiqlashi kerak. “EKOLOGIK XABARNOMA” ilmiy-ommabop jurnali.
        </p>
      </div>
      <div
         data-aos="fade-right"
         data-aos-offset="150"
         data-aos-easing="ease-in-sine"
        className="bg-slate-300 px-5 py-3 rounded-lg my-4"
      >
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            “EKOLOGIK XABARNOMA” ILMIY-TЕXNIK JURNALIDA YORITILUVCHI MAVZULAR
          </p>
        </div>
        <p className="">
          Ekologiya va atrof muhit muhofazasi, Biologiya fanlari, texnika
          fanlari, qishloq xo‘jaligi fanlari, geografiya fanlari, ximiya
          fanlari, Ekologiya sohasi uchun kadrlar tayyorlash; Ekologiya va atrof
          muhit muxofazasi sohasida amalga oshirilayotgan islohotlar. “EKOLOGIK
          XABARNOMA” ilmiy-ommabop jurnali tahririyati umumiy sharhdan va
          axborot shaklidagi ilmiy maqolalarni nashr uchun qabul qilmaydi.
          Tahririyatga taqdim etilayotgan qo‘lyozma bo‘yicha muallif
          ilmiy-tadqiqot ishi olib borayotgan tashkilot rahbariyatining
          yo‘llanma xati, maqolani chop etish mumkinligi haqidagi ekspert
          xulosasi hamda taqriz bo‘lishi kerak.
        </p>
      </div>
      <div  data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine" className="bg-slate-300 px-5 py-3 rounded-lg my-4">
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            MAQOLANING YOZILISH TILI, TUZILISHI VA TARKIBI.
          </p>
        </div>
        <p className="">
          Maqola o‘zida muayyan ilmiy tadqiqotning tugal yechimlarini yoki uning
          bosqichlarini ifodalashi zarur. Sarlavha maqolaning mazmuni
          to‘g‘risida axborot bera olishi, imkon qadar qisqa bo‘lishi va umumiy
          so‘zlardan iborat bo‘lib qolmasligi kerak. Odatda ilmiy maqolada
          quyidagilar bo‘lishi kerak: universal o‘nlik tasnifi (UO‘T),
          maqolaning sarlavhasi (uch tilda), annotatsiyasi (uch tilda), tayanch
          so‘zlar (uch tilda), kirish, ko‘rib chiqilayotgan muammoning hozirgi
          holatining tahlili va manbaalarga havolalar, masalaning qo‘yilishi,
          yechish usuli (uslublari), natijalar tahlili va misollar, xulosa,
          foydalanilgan adabiyotlar ro‘yxati, muallif(lar) to‘g‘risida ma’lumot.
          Maqolada odatda qabul qilingan atamalardan foydalanish, yangi atama
          kiritganda, albatta uni aniq asoslab berish kerak. Fizik
          kattaliklarning o‘lchov birliklari Xalqaro o‘lchamlar tizimi (SI)ga
          mos bo‘lishi kerak. Jurnalga ilgari e’lon qilinmagan maqolalar qabul
          qilinadi. Maqolada muallif o‘zining ishlariga havolalar soni haddan
          ziyod oshirib yubormasligi, ko‘pi bilan 20-30 foizgacha bo‘lishi
          tavsiya etiladi. Tahririyat ko‘chirmachilik (plagiat), o‘zgalarning
          ishlarini o‘zlashtirib olishga salbiy qaraydi. Shuning uchun
          mualliflardan ishga jiddiy munosabatda bo‘lishi va havola qilish
          qoidalariga bo‘ysunishi: kvadrat qavs ichida bibliografik havolani
          qo‘yishni yoddan chiqarmasligi so‘raladi.
        </p>
      </div>
      <div  data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine" className="bg-slate-300 px-5 py-3 rounded-lg my-4">
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            MAQOLAGA QO‘YILADIGAN TЕXNIK TALABLAR
          </p>
        </div>
        <p className="">
          Maqolaning sarlavhasi, muallif (lar) va u(lar)ning lavozimi, ilmiy
          darajasi va ish joyi, annotatsiya, tayanch so‘zlar (uch tilda) bir
          ustunda yoziladi. Maqolaning qolgan matnlari ikki ustunda yoziladi.
          Maqola MS Word 2003–2010 matn muharririda yozilishi va quyidagi
          ko‘rsatkichlarga muvofiq qat’iy rasmiylashtirilishi kerak: - A4
          formatda, matn sahifasining chekkalarida 2 sm dan joy qoldiriladi,
          Times New Roman shriftida, maqola uchun shrift hajmi - 12 pt,
          jadvallar bundan mustasno, jadvallar uchun shrift hajmi - 10 pt, qator
          oralig‘i - 1,15 interval, matn sahifa kengligi bo‘yicha tekislanadi,
          xat boshi - 1 sm ("Tab" yoki "Probel" tugmalaridan foydalanmasdan).
          Quyidagilarga ruxsat etilmaydi: sahifalarni raqamlash, matnda sahifani
          avtomatik bo‘lishdan foydalanish, matnda avtomatik havolalardan
          foydalanish, avtomatik bo‘g‘in ko‘chirish, kamdan-kam hollarda
          ishlatiladigan yoki qisqartma harflarni qo‘llash. Jadvallar MS Word
          dasturida yoziladi. Jadvalning tartib raqami va nomi jadvalning
          yuqorisida yoziladi. Grafikli materiallar (rangli rasmlar, chizmalar,
          diagrammalar, fotosuratlar) o‘zida tadqiqotning umumlashtirilgan
          materiallarini ifodalashi kerak. Grafikli materiallar yuqori sifatli
          bo‘lishi kerak, agar zarurat tug‘ilsa, tahririyat ushbu materiallarni
          alohida faylda 300 dpi dan kam bo‘lmagan o‘lchamda jpg formatda taqdim
          etishni talab qilishi mumkin. Grafikli materialning nomi va tartib
          raqami pastki qismda keltirilishi zarur. Formulalar va matematik
          belgilar MS Wordda o‘rnatilgan formatli muharrirda yoki MathType
          muharriri yordamida bajarilishi kerak. Jadvallar, grafikli materiallar
          ko‘rsatilgan maydondan chiqib ketmasligi lozim. Tayanch so‘zlar
          (o‘zbek, rus, ingliz tillarida) – 8-10 ta so‘z va iboralardan iborat
          bo‘lishi kerak. Tayanch so‘zlar va iboralar bir-biridan vergul bilan
          ajratiladi. Keltirilgan tanyach so‘zlar tadqiqot mavzusini juda aniq
          aks ettirishi shart. Annotatsiya (o‘zbek, rus, ingliz tillarida) –
          annotatsiya hajmi 100-250 ta so‘zdan iborat bo‘lishi va maqolaning
          tuzilishini qisqacha ifodalovchi, axborot shaklida berilishi kerak.
          Kirish. Kirish qismida tadqiqotlarning dolzarbligi va obyekti
          tavsiflanadi. Dunyo olimlari tomonidan chop etilgan ilmiy
          maqolalarning tahlili keltiriladi. Chop etilgan adabiyot manbalarida
          qo‘yilgan ilmiy izlanishlarning yechimi yo‘qligi tasdiqlangan holda
          muallifning ilmiy ishlari qaysi olimlarning ishiga asoslanganligi
          ko‘rsatiladi. Yechish usuli (yoki uslublari). Bunda tanlangan usul
          batafsil tavsiflanadi. Keltirilgan yoki qo‘llanilgan uslub boshqa
          tadqiqotchilar uchun ham tushunishiga qulay bo‘lishi kerak. Natijalar
          va namunalar. Natijalarni asosan jadvallar, grafiklar va boshqa
          suratlar ko‘rinishida keltirish tavsiya etiladi. Ushbu bo‘lim olingan
          natijalarni tahlil qilish, ularni sharhlash, boshqa mualliflarning
          natijalari bilan solishtirishni o‘z ichiga oladi. Natijalarda
          ilmiy-tadqiqotlar natijalari qisqacha umumlashtiriladi. Natijalar
          tadqiqotning obyekti parametrlari o‘rtasidagi munosabatlar mualliflar
          tomonidan belgilangan maqolaning asosiy ilmiy natijalarini
          umumlashtiruvchi, sonli xulosalarni o‘z ichiga oladi. Natijalar maqola
          boshida qo‘yilgan vazifalar bilan mantiqan bog‘langan bo‘lishi kerak.
          Xulosa. Ilmiy ishlarining qisqa natijalari keltiriladi, ularning
          ichida izlanishning usuli, yangi yechimi, amaliyotda qo‘llanishning
          natijalari iqtisodiy va boshqa ko‘rsatkichlar bo‘lishi kerak.
          Adabiyotlar. Adabiyotlar ro‘yxati 20 tadan kam bo‘lmagan manbalardan
          iborat bo‘lishi kerak, topilishi qiyin bo‘lgan va normativ hujjatlar,
          bundan tashqari internet manbalarida keltirilgan havolalar (davriy
          hujjatlar hisobga olinmaydi) bundan mustasno. Adabiyotlar ro‘yxatiga
          darsliklar, o‘quv qo‘llanmalari kiritish mumkin emas. Ko‘pchilik
          adabiyotlar ingliz tilida so‘zlovchi xalqaro kitobxonlar uchun ochiq
          va tushunarli bo‘lishi kerak. Manbalarning ahamiyatliligiga qattiq
          talablar qo‘yiladi. Barcha manbalar maqolaning ichki qismida
          raqamlangan havola tarzida berilishi kerak. Matndagi havolalar kvadrat
          qavs ichida (masalan, S.Bo‘riyev [7], [9, 10] ) keltiriladi.
        </p>
      </div>
      <div  data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="bg-slate-300 px-5 py-3 rounded-lg my-4">
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          {/* <p className="text-[25px] font-[600]">
            ETIKA MЕ’YORLARI VA MUALLIFLIK HUQUQI
          </p> */}
        </div>
        <p className="">
          Barcha manbalarga matnda havolalar berilishi kerak, aks holda maqola
          qaytariladi. Muallif (lar) haqida ma’lumot: familiyasi, ismi,
          otasining ismi, lavozimi, ilmiy darajasi va ish joyi. Ushbu
          ma’lumotlar maqola taqdim etilgan o‘zbek/rus tilida ham, ingliz tilida
          ham keltirilishi hamda maqolaning oxirida – adabiyotlar ro‘yxatidan
          keyin joylashtirilishi kerak. Yuqoridagi talablarga javob bermaydigan
          maqolalar ko‘rib chiqishga qabul qilinmaydi va chop etishga tavsiya
          qilinmagan maqolalar mualliflarga qaytarilmaydi. Maqolalarda
          keltirilgan ma’lumotlarning haqqoniyligiga muallif(lar) javobgardir
        </p>
      </div>
    </div>
  );
}
