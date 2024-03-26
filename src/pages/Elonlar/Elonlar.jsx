import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { Pagination } from "antd";
export default function Yangiliklar() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    // console.log(page);
    setCurrent(page);
  };
  return (
    <div className="md:max-w-[1440px] mx-auto max-w-[300px] flex flex-col items-center container">
      <h1 className="lg:text-[60px] md:text-[50px] text-[30px] font-semibold text-[#000300]  lg:top-[90px] lg:left-[130px] md:top-[70px] md:left-[120px] top-[100px] left-[40px]">
        E'lonlar
      </h1>
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
      <Pagination
        current={current}
        onChange={onChange}
        total={50}
        className="py-5"
      />
    </div>
  );
}
