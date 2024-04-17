import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LatestNews from "../Root/LatestNews";

import "./news.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { lang } from "../../Components/Navbar/Navbarr";

const Yangiliklar = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://45.55.194.72:8000/api");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
    const year = date.getUTCFullYear();
    return `${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}`;
  };

  return (
    <div className="container">
      <div className="flex flex-col md:gap-4 gap-1 pt-4">
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t border-black"></div>
          <p class="text-center px-4 lg:text-[32px] text-[20px]">
            {t("latestNews")}
          </p>
          <div class="flex-grow border-t border-black"></div>
        </div>
        <span className="text-center md:text-lg text-black/50 block">
          {t("newsDesc")}
        </span>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-10 my-10">
        <LatestNews />
        <div className="flex flex-col bg-white gap-4 overflow-x-scroll md:overflow-y-scroll custom-scrollbar md:h-screen">
          {data &&
            data.map((el) => (
              <div
                className="md:w-[350px] w-[350px] h-auto rounded-xl bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
                key={el.id}
              >
                <img
                  className="md:w-full md:h-[250px]   rounded-tr-xl rounded-tl-xl object-cover"
                  src={el.image}
                  alt={
                    lang == "en"
                      ? el?.translations?.en?.title
                      : el?.translations?.uz?.title
                  }
                />
                <h3 className="text-lg font-semibold line-clamp-1">
                  {lang == "en"
                    ? el?.translations?.en?.title
                    : el?.translations?.uz?.title}
                </h3>
                <p className="text-[14px] line-clamp-2">
                  {lang == "en"
                    ? el?.translations?.en?.content
                    : el?.translations?.uz?.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <IoTimeOutline className="text-gray-500" size={20} />
                    <p className="text-gray-500 font-semibold">
                      {formatDate(el.created_at)}
                    </p>
                  </div>
                  <button
                    type="button"
                    className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                    onClick={() => navigate(`/news/${el.id}`)}
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Yangiliklar;
