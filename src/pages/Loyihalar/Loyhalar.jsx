import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

export default function Loyhalar() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    // console.log(page);
    setCurrent(page);
  };
  return (
    <div className="flex  flex-col items-center justify-center my-10 gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="shadow-xl w-[350px] h-[500px] rounded-tr-[20px] rounded-bl-[20px] flex flex-col items-center justify-around hover:scale-105 duration-300">
          <img
            className="w-full h-[300px] object-cover rounded-tr-[20px]"
            src="./assets/img/loyiha1.png"
            alt="loyiha"
          />
          <p className="text-[20px] px-3">
            Chiqindilarni qayta ishlash va utilizatsiya qilish
          </p>
          <p className="px-3">
            O‘zbekiston Respublikasi hududida qattiq maishiy chiqindilarni
            to‘planish meʼyorlarini aniqlash bo‘yicha eksperimental xronometraj
            ishlarini olib borish” loyihasi amalga oshirildi.
          </p>
          <div className="border-2 ml-[230px] rounded-xl mb-2 w-[100px] bg-[#00df1e] flex flex-col items-center justify-center">
            <Link className="text-[18px] text-[#fefefe]" to={"/loyhalar"}>
              Batafsil
            </Link>
          </div>
        </div>
        <div className="shadow-xl w-[350px] h-[500px] rounded-tr-[20px] rounded-bl-[20px] flex flex-col items-center justify-around hover:scale-105 duration-300">
          <img
            className="w-full h-[300px] object-cover rounded-tr-[20px]"
            src="./assets/img/loyiha2.jpg"
            alt="loyiha"
          />
          <p className="text-[20px] px-3">Atmosfera havosini muhofaza qilish</p>
          <p className="px-3">
            Aholi va yuridik shaxslarning QMCHlarni saralashda ekologik
            madaniyatini oshirishga qaratilgan ilmiy-tadqiqot ishlarini amalga
            oshirish
          </p>
          <div className="border-2 ml-[230px] rounded-xl mb-2 w-[100px] bg-[#00df1e] flex flex-col items-center justify-center">
            <Link className="text-[18px] text-[#fefefe]" to={"/loyhalar"}>
              Batafsil
            </Link>
          </div>
        </div>
        <div className="shadow-xl w-[350px] h-[500px] rounded-tr-[20px] rounded-bl-[20px] flex flex-col items-center justify-around hover:scale-105 duration-300">
          <img
            className="w-full h-[300px] object-cover rounded-tr-[20px]"
            src="./assets/img/loyiha3.jpg"
            alt="loyiha"
          />
          <p className="text-[20px] text-start">Bioxilmaxillikni saqlash</p>
          <p className="px-3">
            Atrof muhit va tabiatni muhofaza qilish texnalogiyalari ilmiy
            tadqiqot institutida olib borilayotgan loyihalar
          </p>
          <div className="border-2 ml-[230px] rounded-xl mb-2 w-[100px] bg-[#00df1e] flex flex-col items-center justify-center">
            <Link className="text-[18px] text-[#fefefe]" to={"/loyhalar"}>
              Batafsil
            </Link>
          </div>
        </div>
      </div>
      <Pagination current={current} onChange={onChange} total={50} />
    </div>
  );
}
