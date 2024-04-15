import React from "react";

export default function Rahbaryat() {
  return (
    <div className="bg-[#eee]">
      <div className="container">
        <p className="text-center text-blue-950 mb-3 mt-8  text-4xl font-semibold">
          Rahbariyat
        </p>
        <p className="text-center text-base md:text-[20px] text-black/60">
          Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot
          instituti rahbaryati
        </p>
        <div className="flex items-center flex-col gap-2 mt-6 ">
          <div className="flex gap-10 rounded-tl-lg rounded-br-lg bg-white justify-center pb-10 shadow-lg mb-4">
            <img
              src="assets/img/rahbariyat.png"
              alt="rahbariyat"
              className=" h-[400px] bg-cover rounded-tl-lg rounded-br-lg"
            />
            <div className="flex flex-col gap-10 justify-end text-[18px] pr-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Pulatov Baxtiyor Alimovich</h3>
                <p>
                  Atrof muhit va tabiatni muhofaza qilish texnologiyalari
                  ilmiy-tadqiqot instituti direktori
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qabul kuni:</span>
                  <span>Dushanba</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qabul vaqti:</span>
                  <span>10:00-12:00</span>
                </div>
                <p>
                  <strong>
                    Qabul quyidagi manzil bo‘yicha amalga oshiriladi
                  </strong>
                  :&nbsp; Toshkent shahri, Chilonzor tumani, Bunyodkor shoh
                  ko‘chasi, 7-A uy
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Telefon: </span>
                  <span>(998-71)123-45-67 (ichki: 1001#)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Elektron pochta: </span>
                  <span>info@ecoilm.uz</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
          </div>
          <div className="flex gap-10 rounded-tl-lg rounded-br-lg bg-white justify-center pb-10 shadow-lg mb-4">
            <img
              src="assets/img/rahbariyat.png"
              alt="rahbariyat"
              className="w- x] h-[400px] bg-cover rounded-tl-lg rounded-br-lg"
            />
            <div className="flex flex-col gap-10 justify-end text-[18px] pr-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Pulatov Baxtiyor Alimovich</h3>
                <p>
                  Atrof muhit va tabiatni muhofaza qilish texnologiyalari
                  ilmiy-tadqiqot instituti direktori
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qabul kuni:</span>
                  <span>Dushanba</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qabul vaqti:</span>
                  <span>10:00-12:00</span>
                </div>
                <p>
                  <strong>
                    Qabul quyidagi manzil bo‘yicha amalga oshiriladi
                  </strong>
                  :&nbsp; Toshkent shahri, Chilonzor tumani, Bunyodkor shoh
                  ko‘chasi, 7-A uy
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Telefon: </span>
                  <span>(998-71)123-45-67 (ichki: 1001#)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Elektron pochta: </span>
                  <span>info@ecoilm.uz</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
