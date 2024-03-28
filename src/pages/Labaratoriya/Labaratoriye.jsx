import React from "react";
import { Collapse } from "antd";
import "./lab.css";

export default function Labaratoriye() {
  return (
    <div className="md:mx-[20%] my-10 grid grid-cols-1 gap-5">
      <h1 className="text-[30px] font-semibold text-center">
        Laboratoriya va bo'limlar haqida ma'lumot
      </h1>
      <Collapse
        className="w-[300px] mx-auto md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  Bioxilmaxillikni saqlash labaratoriyasining faoliyati
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  Bioxilmaxillikni saqlash labaratoriyasining faoliyati:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Bioxilmaxillikni saqlash labaratoriyasining faoliyati
                  Laboratoriya quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Hayvonot va o‘simlik olami bioxilmaxilligini o‘rganish orqali
                  ekologik xavfsizlikni ta’minlaydi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Noyob o‘simlik va hayvon turlarini yo‘q bo‘lib ketishini
                  oldini olishni ta’minlovchi mutlaqo yangi va samarali uslub,
                  ilg‘or xorijiy texnologiyalar va innovatsiyalarni o‘rganish
                  hamda tahlil qilish, olingan natijalarni amaliyotga tadbiq
                  etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Biologik xilmaxillikni saqlash masalalari bo‘yicha talab va
                  standartlarni ishlab chiqishda ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Tabiiy bioxilmaxillikni saqlash sohasida xorijiy
                  ilmiy-tadqiqot muassasalari va markazlari bilan hamkorlikni
                  rivojlantirishda, ilmiy konferensiyalarda, seminarlarda,
                  qo‘shma tadqiqotlarda, loyihalarni amalga oshirishda ishtirok
                  etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Xalqaro standartlar darajasida yuqori malakali kadrlar
                  tayyorlash, ekologiya va atrof-muhitni muhofaza qilish
                  sohasidagi oliy o‘quv muassasalari o‘qituvchilari hamda
                  mutaxassislari bilan hamkorlikda tadqiqotlar olib boradi.
                </p>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  Suv resurslarini muhofaza qilish texnalogiyalari
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  Laboratoriya quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Suv resurslarini muhofaza qilish borasida istiqbolli
                  tadqiqotlar bilan shug‘ullanadi.
                </p>
                <p className="font-normal text-[16px] py-3">
                  Suv havzalarini asrashda rivojlangan mamlakatlar tajribalarini
                  o‘rganadi va mavjud usullarni qo‘llash ustida ilmiy
                  tadqiqotlar olib boradi.
                </p>
                <p className="font-normal text-[16px] py-3">
                  Respublikaning ishlab chiqarish tarmoqlarida xosil bo‘ladigan
                  turli oqova suvlar tarkibini o‘rganadi, tozalash
                  texnologiyalarini yaratadi va shartnoma asosida qayta ishlash
                  bo‘yicha tavsiyalar beradi.
                </p>
                <p className="font-normal text-[16px] py-3">
                  Turli sanoat korxonalari tozalash inshootlarini loyihalash
                  jarayonlari uchun shartnoma asosida tavsiyalar ishlab chiqadi.
                </p>
                <p className="font-normal text-[16px] py-3">
                  Sanoat oqova suvlarini zamonaviy va kombinirlangan usullarda
                  tozalash texnologiyalari ustida ilmiy tadqiqotlar olib boradi,
                  tadqiqot natijalarini ilmiy jurnallarda nashr etadi.
                </p>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  Atmosfera havosini muhofaza qilish
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  Laboratoriya quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Atmosfera havosining ifloslanishini kamaytirishni ta’minlovchi
                  mutlaqo yangi va samarali uslub va texnologiyalarni ishlab
                  chiqadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Atmosfera havosini muhofaza qilish sohasidagi ilg‘or xorijiy
                  texnologiyalar va innovatsiyalarni moslashtirish va amaliyotga
                  tatbiq etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Atmosfera havosini muhofaza qilish masalalari bo‘yicha talab
                  va standartlarni ishlab chiqishda ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Atmosfera havosini muhofaza qilish sohasida xorijiy
                  ilmiy-tadqiqot muassasalari va markazlari bilan hamkorlikni
                  rivojlantirishda, ilmiy konferensiyalarda, seminarlarda,
                  qo‘shma tadqiqotlarda, loyihalarda, xodimlarning malakasini
                  oshirish va ularni o‘qitishni tashkil etishda ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Xalqaro standartlar darajasida yuqori malakali kadrlar
                  tayyorlash, ekologiya va atrof-muhitni muhofaza qilish
                  sohasidagi oliy o‘quv muassasalari o‘qituvchilari hamda
                  mutaxassislarini qayta tayyorlash va ularning malakasini
                  oshirishda ishtirok etadi.
                </p>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  Chiqindilarni qayta ishlash va utilizatsiya qilish
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  Laboratoriya quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Chiqindilarni hosil bo‘lishini oldini olish, kamaytirish qayta
                  ishlash, utilizatsiya qilish, ularning atrof-muhit va tabiatga
                  ta’sirini oldini olish bo‘yicha innovatsion va amaliy
                  tadqiqotlarni amalga oshiradi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Chiqindilarini qayta ishlash va utilizatsiya qilishni
                  ta’minlovchi yangi samarali uslub va texnologiyalarni ishlab
                  chiqadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Ishlab chiqarish va ist’emol chiqindilarini qayta ishlash
                  sohasini tartibga solish tajribasini o‘rganish va ilg‘or
                  xorijiy texnologiyalar asosida tadqiqotlarni amalga oshirish
                  va amaliyotga tadbiq etish bo‘yicha tavsiyalar ishlab chiqadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Atrof muhitni muhofaza qilish va ekologik xavfsizlikni
                  ta’minlash bo‘yicha maqsadli dasturlarni amalga oshiradi,
                  davlat dasturlarini ishlab chiqishda ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Chiqindilarini qayta ishlash va utilizatsiya qilish sohasiga
                  qaratilgan ilmiy seminarlar, konferensiyalar, qo‘shma
                  tadqiqotlar ishtirok etadi va tadbirlarni amalga oshiradi.
                </p>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  Ekotizim xizmatlari va normativ hujjatlarni ishlab chiqish
                  bo'limi
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  Bo'lim quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Respublikada ekologik holatni yaxshilash, ekologik
                  xavfsizlikni ta’minlash maqsadida ilmiy-tadqiqot ishlari
                  natijalarni amaliy tajribalar bilan muvofiqlashtirish orqali
                  ekotizim xizmatlari bo‘yicha va sohaga oid normativ hujjatlar
                  loyihalarini tayyorlaydi.
                </p>
                <p className="font-normal text-[16px] py-3">
                  Ekotizim xizmatlarini amalga oshirish orqali atrof-muhitni
                  muhofaza qiladi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Ekotizim xizmatlarini amalga oshirishni xalqaro talablar
                  darajasiga yetkazish choralarini ko‘radi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Tizimga aloqador bo‘lgan va Institut zimmasiga yuklatilgan
                  uzoq muddatli, o‘rta va qisqa muddatli ichki va davlat
                  maqsadli dasturlari hamda davlatlararo maqsadli dasturlarni
                  shakllantirishga ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Tabiatni muhofaza qilish va ulardan oqilona foydalanish va
                  ekotizim xizmatlari sohasiga oid qo‘llanma, metodolgiya hamda
                  normativ-huquqiy hujjatlarni ishlab chiqishda ishtirok etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Tabiatni muhofaza qilish va ulardan oqilona foydalanish va
                  ekotizim xizmatlari sohasidagi ma’lumotlar bazasini va
                  axborotlashtirish tizimining uzluksizligini ta’minlash, shu
                  jumladan, bu boradagi loyihalarni ishlab chiqilishida hamda
                  amaliyotga tadbiq etilishida faol ishtirok etadi.
                </p>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  "Ekologik ta'lim va targ'ibot" bo'limi
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  LBo'lim quyidagi vazifalarni bajaradi:
                </p>
                <p className="font-normal text-[16px] py-3">
                  Aholining ekologik madaniyatini yanada oshiradigan istiqbolli
                  tadqiqotlar bilan shug‘ullanadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Tabiiy resurslardan oqilona foydalanish muammolari bo‘yicha
                  ilmiy-amaliy konferensiyalar tashkil etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Hududiy ekologiya va atrof muhitni muhofaza qilish
                  boshqarmalari bilan hamkorlikda joylardagi maktabgacha ta’lim
                  tashkilotlari hamda umumiy o‘rta va o‘rta maxsus ta’lim
                  muassasalarida ekologik ta’limni rivojlantitish bo‘yicha
                  seminar va davra suhbatlarini tashkil qiladi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Muhim ekologik sanalarga bag‘ishlangan tadbirlarni tashkil
                  etadi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Ekologik muammolar va ularning yechimlari bilan bog‘liq
                  mavzular bo‘yicha materiallar tayyorlaydi;
                </p>
                <p className="font-normal text-[16px] py-3">
                  Ekologik madaniyat va ekologik savodxonlikni baholovchi
                  ilmiy-tadqiqotlar olib boradi.
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
