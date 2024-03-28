import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { formatDate } from "../Root/News";

export default function Kengash() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoilm.uz/api/ilmkengashi"
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
        <div className="flex flex-col md:gap-4 gap-1 mb-6">
          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              ILMIY KENGASH
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col gap-4 items-center">
          {data.map((el) => (
            <div
              className="md:w-[550px] mx-auto h-auto rounded-xl bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
              key={el.id}
            >
              <img
                className="md:w-[500px] mx-auto md:h-[250px] rounded-tr-xl rounded-tl-xl object-cover"
                src={el.image}
                alt={el.title}
              />
              <p className="text-[14px] line-clamp-3">{el.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <IoTimeOutline className="text-gray-500" size={20} />
                  <p className="text-gray-500 font-semibold">
                    {formatDate(el.created_at)}
                  </p>
                </div>
                <button
                  type="button"
                  className=" text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => navigate(`/kengash/${el.id}`)}
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
}
