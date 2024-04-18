import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lang } from "../../Components/Navbar/Navbarr";

export default function Loyhalar() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecoilm.uz/api/loyihalar");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex  flex-col items-center justify-center my-10 gap-5">
      <div className="container">
        <div className="flex flex-col md:gap-4 gap-1">
          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              {t("projects")}
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <span className="text-center md:text-lg text-black/50 block">
            {t("proDesc")}
          </span>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col gap-6 mt-10 items-center md:justify-between">
          {data.map((el) => (
            <div
              className="shadow-xl w-[350px] rounded-tr-[20px] rounded-bl-[20px] flex flex-col items-center justify-around hover:scale-105 duration-300"
              key={el.id}
            >
              <img
                className="w-full h-[300px] object-cover rounded-tr-[20px]"
                src={el.image}
                alt={
                  lang == "en"
                    ? el?.translations?.en?.title
                    : el?.translations?.uz?.title
                }
              />
              <div className="flex flex-col gap-4 p-4">
                <p className="md:text-[20px] font-semibold line-clamp-2">
                  {lang == "en"
                    ? el?.translations?.en?.title
                    : el?.translations?.uz?.title}
                </p>
                <p className="text-sm line-clamp-3">
                  {lang == "en"
                    ? el?.translations?.en?.content
                    : el?.translations?.uz?.content}
                </p>
                <button
                  type="button"
                  className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => navigate(`/loyihalar/${el.id}`)}
                >
                  {t("batafsil")}
                </button>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
