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
        <ul>
          <li>
            <Link
              to={"/"}
              className="flex flex-col md:justify-center justify-start items-center gap-3"
            >
              <img
                className="md:w-20 md:h-20 h-16 w-16"
                src="/assets/img/Ekologiya_ITI_logo.svg"
                alt="img"
              />
              <p className="lg:text-[12px] text-[10px] text-white md:w-[315px] font-normal flex flex-col text-center">
                <span>ATROF-MUHIT VA TABIATNI</span>
                <span>MUHOFAZA QILISH TEXNOLOGIYALARI</span>
                <span>ILMIY-TADQIQOT INSTITUTI</span>
              </p>
            </Link>
          </li>
          <li className="text-[#807c7c] gap-2 pt-5 flex">
            <FaCopyright className="mt-1" />
            <p className="flex pl-[2px] items-center justify-between tracking-tight tex-center">
              2024 ecoilm.uz Barcha huquqlar himoyalangan
            </p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <p className="text-[#00df9a] text-[30px] font-normal">
            Institut tarixi
          </p>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5" to={"/tuzulma"}>
              Tuzilma
            </Link>
          </li>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5" to={"/raxbaryat"}>
              Rahbaryat
            </Link>
          </li>
          <li className="text-[#fefefe] pt-5">
            <Link className="md:text-[20px] text-base pt-5" to={"/loyhalar"}>
              Loyihalar
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <p className="text-[#00df9a] text-[30px] font-normal">
            So'ngi yangiliklar
          </p>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link
              className="text-[20px] md:text-[20px] text-base"
              to={"/elonlar"}
            >
              E'lonlar
            </Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link
              className="text-[20px] md:text-[20px] text-base"
              to={"/jurnallar"}
            >
              Ilmiy jurnallar
            </Link>
          </li>
          <li className="text-[#fefefe] ms-1 pt-5">
            <Link
              className="text-[20px] md:text-[20px] text-base"
              to={"/kutubxona"}
            >
              Online kutubxona
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#00df9a] text-[30px] font-normal">Bog'lanish</p>
        <ul>
          <li className="text-[#fefefe] ms-1 pt-5 flex items-center">
            <FaTelegram
              className="text-[#00df9a] hover:scale-105 duration-300 neon_btn pr-1"
              size={25}
            />
            <Link className="text-[20px]" to={"https://t.me/Ecoilm"}>
              Telegram
            </Link>
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
