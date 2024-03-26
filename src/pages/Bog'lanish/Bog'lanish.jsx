import React from "react";
import {
  FaMap,
  FaFacebookSquare,
  FaPhone,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Boglanish() {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col md:p-10 justify-between md:w-[1200px] mx-auto">
        <div className="w-[300px] mx-auto">
          <p className="text-blue-950 sm:text-3xl text-2xl font-semibold mt-4 md:text-xl lg:text-[25px]">
            Aloqa
          </p>
          <p className="text-black/60 text-sm">Dushanba - Juma</p>
          <p className="text-black/60 text-sm">09:00 dan 18:00 gacha</p>
          <hr className="mt-5" />
          <p className="text-blue-950   lg:text-[25px] font-[600] text-xl mt-5">
            Manzil
          </p>
          <div className="flex items-center mt-2 gap-2 w-[300px]">
            <FaMap size={40} />
            <p className="text-black/60 text-sm">
              O'zbekiston Respublikasi Toshkent shaxri Chilonzor tumani ,
              Bunyodkor shoh ko'chasi,7-A uy
            </p>
          </div>
          <p className="text-xl text-blue-950 lg:text-[25px] font-[600]   mt-5">
            Telefon raqam
          </p>
          <div className="flex items-center mt-2 gap-2 w-[300px]">
            <FaPhone size={20} />
            <div className="md:block ms-2 flex">
              <p className="ms-2 text-sm   text-black/60">+998 71 207 11 07</p>
              <p className="ms-2 text-sm   text-black/60">+998 71 207 07 70</p>
            </div>
          </div>
          <p className="text-xl text-blue-950 lg:text-[25px] font-[600]   mt-5">
            E-mail
          </p>
          <div className="flex items-center mt-2 gap-2 w-[300px]">
            <IoMail size={20} />
            <p className="text-black/60 ms-2">info@eco.gov.uz</p>
          </div>
          <p className="text-xl text-blue-950 lg:text-[25px] font-[600]  mt-5">
            Ijtimoiy tarmoqlar
          </p>
          <div className="flex mt-5">
            <FaInstagram className="text-3xl   hover:text-[35px]" />
            <FaFacebookSquare className="ms-7  text-3xl hover:text-[35px]" />
            <FaYoutube className="ms-7 text-3xl  hover:text-[35px]" />
            <FaTelegram className="ms-7 text-3xl  hover:text-[35px]" />
          </div>
        </div>
        <div className="w-[300px] md:w-[500px] mx-auto rounded-lg py-3 bg-slate-200">
          <p className="text-2xl mt-4 mb-5 text-blue-950 ms-6 font-semibold">
            Bog'lanish
          </p>
          <p className="text-blue-950 ms-6 md:text-lg text-base mb-4">
            Agarda sizda taklif yoki shikoyatlar bo'lsa <br /> ushbu formani
            to'ldiring va biz siz bilan bog'lanamiz
          </p>
          <div className="flex gap-2 flex-col">
            <input
              className="md:w-[300px] sm:w-[400px] lg:w-[400px] lg:mt-5 lg:ms-10 md:ms-20 md:mt-4 py-3 px-3 ms-6 mt-[30px]"
              type="text"
              placeholder="Ismingiz"
            />
            <input
              className="md:w-[300px] sm:w-[400px] lg:w-[400px] lg:mt-5 lg:ms-10 md:ms-20 md:mt-4 py-3 px-3 ms-6 mt-[30px]"
              type="text"
              placeholder="Familyangiz"
            />
            <input
              className="md:w-[300px] sm:w-[400px] lg:w-[400px] lg:mt-5 lg:ms-10 md:ms-20 md:mt-4 py-3 px-3 ms-6 mt-[30px]"
              type="email"
              placeholder="Emailingiz"
            />
            <input
              className="md:w-[300px] sm:w-[400px] lg:w-[400px] lg:mt-5 lg:ms-10 md:ms-20 md:mt-4 py-3 px-3 ms-6 mt-[30px]"
              type="text"
              placeholder="Murojat turi"
            />
            <textarea
              className="ms-6 py-3 px-3 mt-11 sm:w-[400px] lg:w-[400px] lg:mt-5 lg:ms-10  md:w-[328px] md:ms-16 md:mt-4"
              name="message"
              rows={4}
              cols={87}
              placeholder="Murojatni to'liq shaklini"
            ></textarea>
          </div>
          <button className="bg-blue-500 lg:ms-[357px] py-1 px-3 sm:ms-[336px] text-white rounded-lg mt-3 md:ms-[310px]">
            Jo'natish
          </button>
        </div>
      </div>
    </div>
  );
}

// jsbds
