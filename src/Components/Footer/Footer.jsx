import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaCopyright,
  FaTelegram,
  FaYoutubeSquare,
} from "react-icons/fa";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="py-10  px-10 flex md:gap-32 md:flex-row flex-col-reverse gap-10 items-center bg2 border-t border-t-[#00df9a]">
      <ul className="text-center">
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
              <span>{t("logo1")}</span>
              <span>{t("logo2")}</span>
              <span>{t("logo3")}</span>
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
            <li className="text-[#fefefe] ms-1 pt-5  flex items-center">
              <Link className="text-[20px]">
                <FaYoutubeSquare
                  className="text-white hover:scale-105 duration-300 neon_btn pr-1"
                  size={25}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className="text-[#807c7c] pt-5">
          <p className="tracking-tight  flex gap-1 md:gap-2">
            <FaCopyright className="mt-1" />
            {t("copyright")}
          </p>
        </li>
      </ul>

      <div className="right flex flex-col gap-2 md:text-base text-[14px] text-white opacity-85">
        <div className="flex gap-2">
          <div className="key">{t("hotlines")}</div>
          <div className="value">
            +998 71 207-11-07, &nbsp; +998 71 207-11-08{" "}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="key">{t("shortNum")}</div>
          <div className="value">
            11 57 &nbsp;
            <a
              href="/archive/img/coll-center.pdf"
              target="_blank"
              // style="color: blue;"
            >
              {t("reglament")}
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="key">{t("phone")}</div>
          <div className="value">+998 71 207-07-70 (1117)</div>
        </div>
        <div className="flex gap-2">
          <div className="key">{t("mail")}</div>
          <a href="#" className="value footer_link_color">
            info@eco.gov.uz
          </a>
        </div>
        <div className="flex gap-2">
          <div className="key">{t("murojaat")}</div>
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
          <Map
            defaultState={{ center: [41.295006, 69.227675], zoom: 16 }}
            width={250}
            height={200}
          />
        </div>
      </YMaps>
    </div>
  );
}
