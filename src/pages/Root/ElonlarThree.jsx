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
const ElonlarThree = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoilm.uz/api/elonlar/latest/three"
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
  );
};

export default ElonlarThree;
