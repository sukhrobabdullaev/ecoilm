import axios from "axios";
import React, { useEffect, useState } from "react";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
  const year = date.getUTCFullYear();
  return `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
};

const JurnallarThree = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://45.55.64.16:8001/api/journals/latest/four"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10 py-4">
      {data &&
        data.map((el) => (
          <div
            className="shadow-lg hover:scale-[1.01] transition-all delay-100 border border-black/30 rounded-md"
            key={el.id}
          >
            <img
              className="md:w-[300px] h-auto object-cover mx-auto rounded-t-md"
              src={el.image}
              alt=""
            />
            <p className="md:text-base text-center  m-2 font-semibold">
              {el.title}
            </p>
            <div className="flex justify-end mb-2 mr-2">
              <a
                class="font-bold py-2 px-4 rounded flex items-center text-white bg-green-500 hover:bg-green-600"
                href={el.file}
                download
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Yuklash</span>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JurnallarThree;
