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

const LoyihalarThree = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoilm.uz/api/loyihalar/latest/three"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
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
              Batafsil
            </button>
          </div>
          <div />
        </div>
      ))}
    </div>
  );
};

export default LoyihalarThree;
