import axios from "axios";
import { useEffect, useState } from "react";

export default function Jurnallar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.idrisov.uz/api/journals");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="grid lg:grid-cols-12 md:grid-cols-8 pb-20 mt-3 px-6 lg:gap-20 md:gap-14 gap-10">
        {data.map((el) => (
          <div className="col-span-4" key={el.id}>
            <img
              className="mt-6 shadow-lg lg:h-[460px] md:h-[453px]"
              src="./assets/img/Image [img-fluid] (3).png"
              alt=""
            />
            <a
              href={el.file}
              target="_blank"
              className="ms-[110px] inline-block mt-5 bg-blue-500 shadow-lg  lg:ms-[106px] md:ms-[100px]  text-white px-3 rounded-lg py-1"
            >
              Yuklab olish
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
