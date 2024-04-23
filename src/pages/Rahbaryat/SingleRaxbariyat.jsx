import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { lang } from "../../Components/Navbar/Navbarr";

export default function SingleRaxbariyat() {
  const paramss = useParams();
  let param = paramss.id;
  const { t } = useTranslation();

  const [single, setSingle] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ecoilm.uz/api/rahbariyat/${param}`,
    })
      .then((res) => {
        setSingle(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {single && (
        <div className="container">
          <div class="flex items-center justify-center my-8 md:px-36">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              {t("briefH")}
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <div className="rounded-md bg-white shadow-2xl hover:shadow-xl  p-4 flex flex-col gap-2 md:max-w-[1000px] mx-auto my-10">
            <img
              className="object-contain md:h-[500px] md:w-[500px] mx-auto"
              src={single.image}
              alt={
                lang == "en"
                  ? single?.translations?.en?.title
                  : single?.translations?.uz?.title
              }
            />
            <h3 className="md:text-[30px] text-lg font-semibold leading-5 md:leading-[30px]">
              {lang == "en"
                ? single?.translations?.en?.full_name
                : single?.translations?.uz?.full_name}
            </h3>
            <p className="md:text-lg text-sm pt-2 text-blue-500">
              {lang == "en"
                ? single?.translations?.en?.title
                : single?.translations?.uz?.title}
            </p>
            <div
              className="md:text-lg text-sm pt-2"
              dangerouslySetInnerHTML={{
                __html:
                  lang == "en"
                    ? single?.translations?.en?.content
                    : single?.translations?.uz?.content,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
