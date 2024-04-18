import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../Root/News";
import { IoTimeOutline } from "react-icons/io5";
import { lang } from "../../Components/Navbar/Navbarr";

export default function IlmiyKengashSingle() {
  const paramss = useParams();
  let param = paramss.id;

  const [single, setSingle] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ecoilm.uz/api/ilmkengashi/detail/${param}`,
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
      <>
        {!!single ? (
          <>
            <div className="container">
              <div className="flex items-center justify-center md:my-8 my-4 md:px-36">
                <div className="flex-grow border-t border-black"></div>
                <p className="text-center px-4 lg:text-[32px] text-[20px]">
                  BATAFSIL
                </p>
                <div className="flex-grow border-t border-black"></div>
              </div>
              <div className="rounded-md bg-white shadow-2xl hover:shadow-xl  p-4 flex flex-col gap-2 md:max-w-[1000px] mx-auto md:my-10 my-6">
                <img
                  className="object-cover md:h-[500px]"
                  src={single.image}
                  alt={
                    lang == "en"
                      ? single.translations?.en?.title
                      : single.translations?.uz?.title
                  }
                />
                <h3 className="md:text-[30px] text-lg font-semibold leading-5 md:leading-[30px]">
                  {lang == "en"
                    ? single.translations?.en?.title
                    : single.translations?.uz?.title}
                </h3>
                <p className="md:text-lg text-sm pt-2">
                  {lang == "en"
                    ? single?.translations?.en?.content
                    : single?.translations?.uz?.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <IoTimeOutline className="text-gray-500" size={20} />
                    <p className="text-gray-500 text-lg font-semibold">
                      {formatDate(single.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </>
    </div>
  );
}
