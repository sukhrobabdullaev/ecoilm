import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lang } from "../../Components/Navbar/Navbarr";
import { useTranslation } from "react-i18next";

const LatestNews = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoilm.uz/api/news/latest/one"
        );
        setData(response.data[0]);
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
  console.log(data);
  return (
    <>
      {data && (
        <div
          className="md:w-[800px] h-auto rounded-xl bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
          key={data.id}
        >
          <img
            className="md:w-[800px]  rounded-tr-xl rounded-tl-xl object-cover"
            src={data.image}
            alt={
              lang == "en"
                ? data?.translations?.en?.title
                : data?.translations?.uz?.title
            }
          />
          <h3 className="text-lg font-semibold line-clamp-2">
            {lang == "en"
              ? data?.translations?.en?.title
              : data?.translations?.uz?.title}
          </h3>
          <p className="text-[14px] line-clamp-3">
            {lang == "en"
              ? data?.translations?.en?.content
              : data?.translations?.uz?.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold">
                {formatDate(data.created_at)}
              </p>
            </div>
            <button
              type="button"
              className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => navigate(`/news/${data.id}`)}
            >
              {t("batafsil")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LatestNews;
