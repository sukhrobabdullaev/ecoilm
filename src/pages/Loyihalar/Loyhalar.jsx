import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Loyhalar() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://45.55.64.16:8001/api/loyihalar"
        );
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
            <p class="text-center px-4 lg:text-[32px] text-[20px]">LOYIHALAR</p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <span className="text-center md:text-lg text-black/50 block">
            ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI
            ILMIY-TADQIQOT INSTITUTIDA OLIB BORILAYOTGAN LOYIHALAR
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
                alt="loyiha"
              />
              <div className="flex flex-col gap-4 p-4">
                <p className="md:text-[20px] font-semibold line-clamp-2">
                  {el.title}
                </p>
                <p className="text-sm line-clamp-3">{el.content}</p>
                <button
                  type="button"
                  className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => navigate(`/loyihalar/${el.id}`)}
                >
                  Batafsil
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
