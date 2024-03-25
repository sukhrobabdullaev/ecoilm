import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { Pagination } from "antd";

export default function Kengash() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    // console.log(page);
    setCurrent(page);
  };
  return (
    <div className="">
      <h1 className="lg:text-[60px]  md:text-[25px] sm:text-[20px] font-bold text-[#58c77fe3] text-center py-5">
        Ilmiy kengash
      </h1>
      <div className="px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="ml-[20%] md:w-[460px] md:h-[430px] w-[415px] h-[450px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer">
          <img
            className="w-full rounded-tl-md rounded-tr-md-md rounded-tr-md"
            src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png"
            alt="assets"
          />
          <p className="lg:text-[17px]  md:text-[15px] sm:text-[14px] pt-2 px-2 font-semibold">
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi –
            PhD.18/30.11.2022.T.153.01 raqamli ixtisosligini beruvchi ilmiy
            kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between py-3">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={25} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="ml-[20%]  md:w-[460px] md:h-[430px] w-[415px] h-[430px]  rounded-md rounded-tr-md bg-white  shadow-2xl hover:shadow-xl cursor-pointer">
          <img
            className="w-full rounded-tl-md rounded-tr-md-md rounded-tr-md"
            src="./assets/img/photo_2023-08-16_13-16-11-Xr23bArNs-transformed (1) 2 (1).png"
            alt="assets"
          />
          <p className="lg:text-[17px]  md:text-[15px] sm:text-[14px] pt-2 px-2 font-semibold">
            Texnika fanlari boʼyicha falsafa doktori (PhD) ilmiy darajasi –
            PhD.18/30.11.2022.T.153.01 raqamli ixtisosligini beruvchi ilmiy
            kengash faoliyati yoʼlga qoʼyildi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between py-3">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={25} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[80px] h-[40px] text-[18px] text-center pt-2 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
      </div>
      <Pagination
        current={current}
        onChange={onChange}
        total={50}
        className="py-5 text-center"
      />
    </div>
  );
}
