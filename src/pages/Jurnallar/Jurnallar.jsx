import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { lang } from "../../Components/Navbar/Navbarr";

export default function Jurnallar() {
  const { t } = useTranslation();
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
      <div className="container">
        <div className="flex flex-col md:gap-4 gap-1 pt-10">
          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              {t("journalsH")}
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <span className="text-center md:text-lg text-black/50 block">
            {t("journalsDesc")}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 pb-10 py-4">
          {data.map((el) => (
            <div
              className="shadow-lg hover:scale-[1.01] transition-all delay-100 border border-black/30 rounded-md"
              key={el.id}
            >
              <img
                className="md:w-[300px] h-auto object-cover mx-auto rounded-t-md"
                src={el.image}
                alt={
                  lang == "en"
                    ? el?.translations?.en?.title
                    : el?.translations?.uz?.title
                }
              />
              <p className="md:text-base text-center  m-2 font-semibold">
                {lang == "en"
                  ? el?.translations?.en?.title
                  : el?.translations?.uz?.title}
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
                  <span>{t("yuklash")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
