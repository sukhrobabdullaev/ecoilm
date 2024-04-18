import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { lang } from "../../Components/Navbar/Navbarr";

export default function Rahbaryat() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecoilm.uz/api/rahbariyat");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
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
          {data.map((el) => (
            <div
              className="flex gap-10 md:flex-row flex-col md:px-0 px-4 rounded-tl-lg rounded-br-lg bg-white justify-center pb-10 shadow-lg mb-4"
              key={el.title}
            >
              <img
                src={el.image}
                alt={el.full_name}
                className=" h-[400px] bg-cover rounded-tl-lg rounded-br-lg"
              />
              <div className="flex flex-col gap-10 justify-end text-[18px] pr-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">
                    {lang == "en"
                      ? el?.translations?.en?.full_name
                      : el?.translations?.uz?.full_name}
                  </h3>
                  <p>
                    {lang == "en"
                      ? el?.translations?.en?.title
                      : el?.translations?.uz?.title}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{t("receptionDay")}</span>
                    <span>
                      {lang == "en"
                        ? el?.translations?.en?.reception_day
                        : el?.translations?.uz?.reception_day}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{t("receptionTime")}</span>
                    <span>
                      {lang == "en"
                        ? el?.translations?.en?.reception_time
                        : el?.translations?.uz?.reception_time}
                    </span>
                  </div>
                  <p>
                    <strong>{t("receptionLoc")}</strong>
                    {lang == "en"
                      ? el?.translations?.en?.location
                      : el?.translations?.uz?.location}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{t("phone")}</span>
                    <span>{el.p_number}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{t("emaile")}</span>
                    <span>{el.email}</span>
                  </div>
                </div>

                <button
                  className="text-blue-500"
                  onClick={() => navigate(`/raxbaryat/${el.id}`)}
                >
                  {t("brief")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
