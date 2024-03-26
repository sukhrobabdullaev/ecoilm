import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./root.css";
import News from "./News";
import Jurnallar from "../Jurnallar/Jurnallar";
import LatestNews from "./LatestNews";

// import PrimeCarousell from "../SwiperHome/PrimeCarousell";
// import axios from "axios";

const matn = `Toshkent suv ta’minoti, kanalizatsiya, gidrotexnika inshootlari
va muhandislik gidrogeologiyasi (ToshNII "VODGEO") instituti,
1960 yilda Markaziy Osiyo arxitektura va qurilish ilmiy-tadqiqot
institutida aholi punktlari sanoatining suv xo‘jaligi
laboratoriyasi sifatida tashkil etilgan, 1964 yilda U "VODGEO"
Butunittifoq ilmiy-tadqiqot institutida suv xo‘jaligi bo‘limi,
1978 yilda esa "VODGEO" Butunittifoq ilmiy-tadqiqot
institutining Toshkent filialiga aylantirildi. 1992 yil dekabr
oyidan boshlab institut O‘zbekiston Respublikasi Tabiatni
muhofaza qilish davlat qo‘mitasining tarkibiy bo‘linmasi
hisoblanadi. O‘zbekiston Respublikasi Prezidentining 2017 yil 21
apreldagi PQ-2915-sonli "O‘zbekiston Respublikasi Ekologiya va
atrof-muhitni muhofaza qilish davlat qo‘mitasi faoliyatini
tashkil etishni ta’minlash chora-tadbirlari to‘g‘risida" gi
farmonini bajarish maqsadida, shuningdek, 2017 yil 26 apreldagi
146-sonli va 17-sonli, 91-son buyruqlariga muvofiq.
Guvohnomaning 2017 yil 21 avgustdagi 538681-sonli ma’lumotiga
ko‘ra, O‘zbekiston Respublikasi Ekologiya va atrof-muhitni
muhofaza qilish davlat qo‘mitasi, O‘zbekiston Respublikasi
Ekologiya va atrof-muhitni muhofaza qilish ilmiy-tadqiqot
instituti ish faoliyatini boshladi.`;

export default function Root() {
  return (
    <div>
      <div className="">
        <img
          className="object-cover w-full h-[82vh]"
          src="./assets/img/glavniy.JPG"
          alt=""
        />
      </div>
      <div className="yangiliklar mt-9">
        <div className="mx-7 flex flex-row items-center justify-between my-4">
          <p className="text-[20px] md:text-[40px] font-semibold font-mono ">
            Yangiliklar
          </p>
          <button className="bg-lime-700 px-7 py-2 hidden lg:flex text-white rounded-md w-[180px] h-[40px]">
            Ko'proq yangiliklar
          </button>
        </div>
        <div className="flex h-full md:flex-row flex-col gap-4 md:max-w-[1400px] mx-auto">
          <LatestNews />
          <News />
        </div>
      </div>
      {/* Biz haqimizda */}
      <div className="about_section bg3 mt-[100px] px-3 py-6 shadow-lg rounded-xl w-full">
        <p className="text-[#fefefe] text-center text-3xl font-bold">
          Biz haqimizda
        </p>
        <p className="text-[#fefefe] text-xl text-center font-semibold pt-5">
          Atrof muhit va atbiatni muhofaza qilish texnologiyalari ilmiy tadqiqot
          instituti haqida qisqacha ma'lumot
        </p>
        <div className="grid lg:grid-cols-2 gap-10 text-xl">
          <div className="col-span-1">
            <img
              className="px-1 rounded-tl-[20px] hidden lg:flex rounded-bl-[20px] w-[600px] h-[450px] pt-4"
              src="./assets/img/glavniy.JPG"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <p className="text-[#fefefe] pt-5 text-xl hidden lg:flex text-center font-semibold">
              Atrof muhit va atbiatni muhofaza qilish texnologiyalari ilmiy
              tadqiqot instituti haqida
            </p>
            <p className="text-[#fefefe] text-[13px] lg:pt-5 text-justify pr-3">
              {matn.slice(0, 1300)}
            </p>
          </div>
        </div>
      </div>
      <div className="md:max-w-[1200px] mx-auto mt-10 ">
        <p className="text-[30px] text-center">Hamkorlar</p>
        <div className="mt-[40px] flex md:flex-row flex-col items-center py-10  gap-8">
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/misteo.png"
            alt=""
          />
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/superMap.png"
            alt=""
          />
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/hamkor.png"
            alt=""
          />
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/geostry.png"
            alt=""
          />
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/GIZ_Uzbekistan.png"
            alt=""
          />
          <img
            className="md:w-[180px] md:h-[180px] w-[200px] object-cover"
            src="./assets/img/Uzbek-Japanese.png"
            alt=""
          />
        </div>
      </div>
      <div className="jurnallar_section mt-[50px]">
        <p className="font-normal text-center text-[30px] md:text-[40px] mt-3">
          Jurnallar
        </p>
        <Jurnallar />
      </div>

      <div className="flex  flex-col items-center justify-center my-10 gap-5">
        <p className="text-[40px] mt-10">Loyihalar</p>
        <p className="text-[20px] md:w-1/2 text-center">
          Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy tadqiqot
          institutida olib borilayotgan loyihalar
        </p>
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
              to‘planish meʼyorlarini aniqlash bo‘yicha eksperimental
              xronometraj ishlarini olib borish” loyihasi amalga oshirildi.
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
            <p className="text-[20px] px-3">
              Atmosfera havosini muhofaza qilish
            </p>
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
      </div>
    </div>
  );
}
