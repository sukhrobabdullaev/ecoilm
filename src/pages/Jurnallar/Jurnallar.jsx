import axios from "axios";
import { useEffect, useState } from "react";

export default function Jurnallar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecoilm.uz/api/journals");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex py-8 justify-center flex-wrap flex-col gap-4 items-center">
      <div className="flex flex-col md:gap-4 gap-1 pt-10">
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t border-black"></div>
          <p class="text-center px-4 lg:text-[32px] text-[20px]">JURNALLAR</p>
          <div class="flex-grow border-t border-black"></div>
        </div>
        <span className="text-center md:text-lg text-black/50 block">
          EKOLOGIYA XABARNOMASI JURNALINING SO'NGI SONLARI
        </span>
      </div>
      <div className="flex flex-wrap  gap-10">
        {data &&
          data.map((el) => (
            <div
              className="shadow-lg hover:scale-[1.01]  rounded-md"
              key={el.id}
            >
              <img
                className="shadow-lg md:w-[300px] h-full rounded-md"
                src="/assets/img/Image [img-fluid] (3).png"
                alt=""
              />
              <p className="md:text-lg flex items-center justify-between text-center  p-2 ">
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
    </div>
  );
}
