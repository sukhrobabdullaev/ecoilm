import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { lang } from "../../Components/Navbar/Navbarr";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
  const year = date.getUTCFullYear();
  return `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
};
const News = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoilm.uz/api/news/latest/three"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center md:flex-row flex-wrap flex-col gap-4 items-center">
      {data.map((el) => (
        <div
          className="md:w-[400px] h-auto rounded-xl bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
          key={el.id}
        >
          <img
            className="md:w-[400px] md:h-[250px] rounded-tr-xl rounded-tl-xl object-cover"
            src={el.image}
            alt={
              lang == "en"
                ? el?.translations?.en?.title
                : el?.translations?.uz?.title
            }
          />
          <h3 className="text-lg font-semibold line-clamp-2">
            {lang == "en"
              ? el?.translations?.en?.title
              : el?.translations?.uz?.title}
          </h3>
          <p className="text-[14px] line-clamp-3">
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
  );
};

export default News;
