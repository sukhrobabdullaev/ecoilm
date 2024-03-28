import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { Pagination } from "antd";
export default function Yangiliklar() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    setCurrent(page);
  };
  return (
    <div className="md:max-w-[1440px] mx-auto max-w-[300px] flex flex-col items-center container">
      <div className="flex flex-col md:gap-4 gap-1 py-10">
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t border-black"></div>
          <p class="text-center px-4 lg:text-[32px] text-[20px]">E'LONLAR</p>
          <div class="flex-grow border-t border-black"></div>
        </div>
        <span className="text-center md:text-lg text-black/50 block">
          ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI ILMIY-TADQIQOT
          INSTITUTIDA OLIB BORILAYOTGAN E'LONLARI
        </span>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[390px]  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            className="w-full rounded-tl-tl rounded-tr-md-md rounded-tr-md"
            src="./assets/img/glavniy.JPG"
            alt="assets"
          />
          <p className="text-[17px] pt-2 pl-3 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            rem recusandae possimus excepturi.
          </p>
          <div className="flex flex-row px-3 items-center justify-between pt-5">
            <div className="flex flex-row items-center">
              <IoTimeOutline className="text-gray-500" size={20} />
              <p className="text-gray-500 font-semibold pl-2">21.11.2024</p>
            </div>
            <p className="bg-[#00df9a] text-white rounded-lg w-[60px] h-[30px] text-center pt-1 hover:scale-105 duration-300">
              <Link to={"/news"}>Batafsil</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
