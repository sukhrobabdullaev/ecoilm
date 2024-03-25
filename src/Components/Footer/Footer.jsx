import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaCopyright,
  FaTelegram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="py-16 px-10 grid md:grid-cols-4 gap-8 bg2 border-t border-t-[#00df9a]">
      <div>
        <ul className="md:w-[230px]">
          <p className="text-[#00df9a] md:text-[15px]  font-normal">
            ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI
            ILMIY-TADQIQOT INSTITUTI
          </p>
          <li className="text-[#807c7c] gap-2 pt-5 flex">
            <FaCopyright className="mt-1" />
            <p className="flex pl-[2px] items-center w-[240px] justify-between tracking-tight">
              2024 ecoilm.uz Barcha huquqlar himoyalangan
            </p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="">
          <p className="text-[#00df9a] text-[30px] font-normal">
            Institut tarixi
          </p>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5">Tuzilma</Link>
          </li>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5">Rahbaryat</Link>
          </li>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5">Vazifalar</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <p className="text-[#00df9a] text-[30px] font-normal">
            So'ngi yangiliklar
          </p>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link className="text-[20px] md:text-[20px] text-base ">
              E'lonlar
            </Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link className="text-[20px] md:text-[20px] text-base ">
              Loyihlar
            </Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link className="text-[20px] md:text-[20px] text-base ">
              Ilmiy jurnallar
            </Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link className="text-[20px] md:text-[20px] text-base ">
              Xalqaro jurnallar
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <p className="text-[#00df9a] text-[30px] font-normal">Bog'lanish</p>
        <ul>
          <li className="text-[#fefefe] ms-1 pt-5 flex items-center">
            <FaTelegram
              className="text-[#00df9a] hover:scale-105 duration-300 neon_btn pr-1"
              size={25}
            />
            <Link className="text-[20px]">Telegram</Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5 flex items-center">
            <FaInstagramSquare
              className="text-[#00df9a] hover:scale-105 duration-300 neon_btn pr-1"
              size={25}
            />
            <Link className="text-[20px]">Instagram</Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5  flex items-center">
            <FaFacebookSquare
              className="text-[#00df9a] hover:scale-105 duration-300 neon_btn pr-1"
              size={25}
            />
            <Link className="text-[20px]">Facebook</Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
}
