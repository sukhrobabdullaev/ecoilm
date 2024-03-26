import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://idrisov.uz/api");
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

  console.log(data);

  return (
    <div className="flex md:flex-row flex-col md:gap-20 gap-10">
      <div className="flex gap-4 flex-wrap">
        {data.map((el) => (
          <div
            className="md:w-[400px] h-auto rounded-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer p-4 flex flex-col gap-2"
            key={el.id}
          >
            <img
              className="md:w-[400px] md:h-[250px] object-cover"
              src={el.image}
              alt={el.title}
            />
            <h3 className="text-lg font-semibold line-clamp-1">{el.title}</h3>
            <p className="text-[12px] pt-2 line-clamp-2">{el.content}</p>
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
              >
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
