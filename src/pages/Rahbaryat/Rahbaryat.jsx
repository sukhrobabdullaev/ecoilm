import React from "react";
import { useTranslation } from "react-i18next";

export default function Rahbaryat() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#eee]">
      <div className="container">
        <p className="text-center text-blue-950 mb-3 mt-8  text-4xl font-semibold">
          {t("rahbariyat")}
        </p>
        <p className="text-center text-base md:text-[20px] text-black/60">
          {t("rahbariyatDesc")}
        </p>
        <div className="flex items-center flex-col gap-2 mt-6 ">
          <div className="flex gap-10 md:flex-row flex-col md:px-0 px-4 rounded-tl-lg rounded-br-lg bg-white justify-center pb-10 shadow-lg mb-4">
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
                  <span className="font-bold">{t("receptionDay")}</span>
                  <span>Dushanba</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">{t("receptionTime")}</span>
                  <span>10:00-12:00</span>
                </div>
                <p>
                  <strong>{t("receptionLoc")}</strong>
                  :&nbsp; Toshkent shahri, Chilonzor tumani, Bunyodkor shoh
                  ko‘chasi, 7-A uy
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold">{t("phone")}</span>
                  <span>(998-71)123-45-67 (ichki: 1001#)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">{t("emaile")}</span>
                  <span>info@ecoilm.uz</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                {t("brief")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
