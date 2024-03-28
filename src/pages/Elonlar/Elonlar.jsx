import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
  const year = date.getUTCFullYear();
  return `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
};

export default function Elonlar() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecoilm.uz/api/elonlar");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:max-w-[1440px] mx-auto max-w-[300px] flex flex-col items-center container">
      <div className="flex flex-col md:gap-4 gap-1 py-10">
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t border-black"></div>
          <p class="text-center px-4 lg:text-[32px] text-[20px]">E'LONLAR</p>
          <div class="flex-grow border-t border-black"></div>
        </div>
        <span className="text-center md:text-lg text-black/50 block">
          ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI ILMIY-TADQIQOT
          INSTITUTIDA OLIB BORILAYOTGAN E'LONLARI
        </span>
      </div>
      <div className="flex justify-center md:flex-row flex-wrap flex-col gap-4 items-center mb-10">
        {data.map((el) => (
          <div
            className="md:w-[400px] h-auto rounded-xl bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
            key={el.id}
          >
            <img
              className="md:w-[400px] md:h-[250px] rounded-tr-xl rounded-tl-xl object-cover"
              src={el.image}
              alt={el.title}
            />
            <h3 className="text-lg font-semibold line-clamp-2">{el.title}</h3>
            <p className="text-[14px] line-clamp-3">{el.content}</p>
            <div className="flex items-center ">
              <button
                type="button"
                className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                onClick={() => navigate(`/elonlar/${el.id}`)}
              >
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
