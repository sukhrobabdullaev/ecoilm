import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://idrisov.uz/api/news/latest/one"
        );
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
    <div>
      {data[0] && (
        <div className="flex flex-col gap-4 md:max-w-[850px]">
          <h3 className="text-xl text-center font-semibold text-green-500 font-serif">
            So'ngi yangiliklar
          </h3>
          <div className="rounded-md bg-white shadow-2xl hover:shadow-xl cursor-pointer p-4">
            <img
              className="md:w-[500px] md:h-[300px] w-[300px] h-[300px]  mx-auto  object-cover"
              src={data[0].image}
              alt={data[0].title}
            />
            <h3 className="text-[20px] font-semibold">{data[0].title}</h3>
            <p className="py-2 ">{data[0].content}</p>
            <div className="flex items-center justify-between md:pt-[170px]">
              <div className="flex gap-1 items-center">
                <IoTimeOutline className="text-gray-500" size={20} />
                <p className="text-gray-500 font-semibold">
                  {formatDate(data[0].created_at)}
                </p>
              </div>
              <button
                type="button"
                className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                onClick={() => navigate(`/news/${data[0].id}`)}
              >
                Batafsil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
