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
import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function Footer() {
  return (
    <div className="py-16 px-10 flex gap-32 items-center bg2 border-t border-t-[#00df9a]">
      <ul>
        <li className="flex flex-col items-center">
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
          <ul className="flex items-center gap-6">
            <li className="text-[#fefefe] ms-1 pt-5 flex items-center">
              <Link className="text-[20px]" to={"https://t.me/Ecoilm"}>
                <FaTelegram
                  className="text-white hover:scale-105 duration-300 neon_btn pr-1"
                  size={25}
                />
              </Link>
            </li>
            <li className="text-[#fefefe] ms-1 pt-5 flex items-center">
              <Link className="text-[20px]">
                <FaInstagramSquare
                  className="text-white hover:scale-105 duration-300 neon_btn pr-1"
                  size={25}
                />
              </Link>
            </li>
            <li className="text-[#fefefe] ms-1 pt-5  flex items-center">
              <Link className="text-[20px]">
                <FaFacebookSquare
                  className="text-white hover:scale-105 duration-300 neon_btn pr-1"
                  size={25}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className="text-[#807c7c] gap-2 pt-5 flex">
          <FaCopyright className="mt-1" />
          <p className="flex pl-[2px] items-center justify-between tracking-tight tex-center">
            2024 ecoilm.uz Barcha huquqlar himoyalangan
          </p>
        </li>
      </ul>

      <div className="right flex flex-col gap-2 text-base text-white opacity-85">
        <div className="flex gap-2">
          <div className="key">Ishonch telefonlari:</div>
          <div className="value">
            +998 71 207-11-07, &nbsp; +998 71 207-11-08{" "}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="key">Qisqa raqam:</div>
          <div className="value">
            11 57 &nbsp;
            <a
              href="/archive/img/coll-center.pdf"
              target="_blank"
              // style="color: blue;"
            >
              Reglament bilan tanishish
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="key">Telefon:</div>
          <div className="value">+998 71 207-07-70 (1117)</div>
        </div>
        <div className="flex gap-2">
          <div className="key">Pochta:</div>
          <a href="#" className="value footer_link_color">
            info@eco.gov.uz
          </a>
        </div>
        <div className="flex gap-2">
          <div className="key">
            Murojaatlarni qabul qilish va statusini tekshirish
          </div>
          <a
            href="https://t.me/ecogovuz_bot"
            className="value footer_link_color"
            target="_blank"
          >
            ecogovuz_bot
          </a>
        </div>
      </div>
      <YMaps>
        <div>
          <Map defaultState={{ center: [41.295006, 69.227675], zoom: 17 }} />
        </div>
      </YMaps>
    </div>
  );
}
