import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { lang } from "../../Components/Navbar/Navbarr";

const BolimBoshliqlari = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecoilm.uz/api/bulimlar");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#eee]">
      <div className="container">
        <p className="text-center text-blue-950 mb-3 mt-8 text-2xl md:text-4xl font-semibold">
          {t("team2")}
        </p>
        <p className="text-center text-sm md:text-[20px] text-black/60">
          {t("team2Desc")}
        </p>
        <div className="flex items-center flex-col gap-2 mt-6 ">
          {data.map((el) => (
            <div
              key={el.title}
              className="flex gap-10 md:flex-row flex-col rounded-tr-lg justify-between lg:w-[1000px] md:w-full rounded-bl-lg bg-white pb-10 items-start shadow-lg mb-4"
            >
              <div className="flex flex-col gap-10 justify-end text-[18px] pl-6 pt-6">
                <div className="flex flex-col gap-2">
                  <p className="md:text-2xl text-blue-500 ">
                    {lang == "en"
                      ? el?.translations?.en?.title
                      : el?.translations?.uz?.title}
                  </p>
                  <h3 className="font-bold">
                    {lang == "en"
                      ? el?.translations?.en?.full_name
                      : el?.translations?.uz?.full_name}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <span>{t("phone")}</span>
                    <span>{el.p_number}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{t("emaile")}</span>
                    <span>{el.email}</span>
                  </div>
                </div>

                <button
                  className="text-blue-500"
                  onClick={() => navigate(`/bolimlar/${el.id}`)}
                >
                  {t("brief")}
                </button>
              </div>
              <img
                src={el.image}
                alt={
                  lang == "en"
                    ? el?.translations?.en?.title
                    : el?.translations?.uz?.title
                }
                className="w-[300px] h-[400px] bg-cover rounded-tr-lg rounded-bl-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BolimBoshliqlari;
