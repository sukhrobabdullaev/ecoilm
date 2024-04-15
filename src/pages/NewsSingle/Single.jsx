import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../Root/News";
import { IoTimeOutline } from "react-icons/io5";

export default function NewsSingle() {
  const paramss = useParams();
  let param = paramss.id;

  const [single, setSingle] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://45.55.64.16:8001/api/${param}`,
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
              <div class="flex items-center justify-center my-8 md:px-36">
                <div class="flex-grow border-t border-black"></div>
                <p class="text-center px-4 lg:text-[32px] text-[20px]">
                  BATAFSIL
                </p>
                <div class="flex-grow border-t border-black"></div>
              </div>
              <div className="rounded-md bg-white shadow-2xl hover:shadow-xl  p-4 flex flex-col gap-2 md:max-w-[1000px] mx-auto my-10">
                <img
                  className="object-cover md:h-[500px]"
                  src={single.image}
                  alt={single.title}
                />
                <h3 className="md:text-[30px] text-lg font-semibold leading-5 md:leading-[30px]">
                  {single.title}
                </h3>
                <p className="md:text-lg text-sm pt-2">{single.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <IoTimeOutline className="text-gray-500" size={20} />
                    <p className="text-gray-500 text-lg font-semibold">
                      {formatDate(single.created_at)}
                    </p>
                  </div>
                  {/* <button
                  type="button"
                  className=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Batafsil
                </button> */}
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
