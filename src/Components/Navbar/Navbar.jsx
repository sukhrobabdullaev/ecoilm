import { App, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import "./navbar.css";

const img = [
  {
    id: "1",
    img: "./assets/img/Flag_of_Uzbekistan.svg.png",
  },
  {
    id: "2",
    img: "./assets/img/Flag_of_the_United_States.png",
  },
];

export default function Navbar() {
  const [flag, setFlag] = useState(img[0].img);

  function changeimg(e) {
    if (e == "uz") {
      setFlag(img[0].img);
    } else {
      setFlag(img[1].img);
    }
  }
  const [nav, setNav] = useState(true);
  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="bg1 relative">
      <div className="scroll-left">
        <p className="text-red-500">
          Atrof muhit va tabiatni muhofaza qilish texnalogiyalari ilmiy tadqiqot
          instituti rasmiy web sayti test rejimida ishlamoqda
        </p>
      </div>
      <div className=" flex flex-row justify-between items-center px-4 h-[110px]">
        <div className=" flex flex-row items-center w-[370px]">
          <div className="col-span-2 ms-12">
            <Link to={"/"}>
              <img
                className="md:w-20 md:h-20 h-16 w-16"
                src="./assets/img/Ekologiya ITI logo.svg"
                alt="img"
              />
            </Link>
          </div>
          <p className="lg:text-[13px] ms-3 md:text-[9px] sm:text-[10px] text-white md:w-[400px] font-normal md:block hidden">
            ATROF-MUHIT VA TABIATNI <br /> MUHOFAZA QILISH TEXNOLOGIYALARI
            <br /> ILMIY-TADQIQOT INSTITUTI
          </p>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between">
          <ul className="flex flex-row items-center justify-between">
            <li>
              <Link>
                <>
                  <div className="dropdown ">
                    <Link className="lg:w-[100px] lg:text-[18px] text-white font-normal  ">
                      Biz haqimizda
                    </Link>
                    <div className="dropdown-content rounded-md ">
                      <Link className="link" to={"/tuzulma"}>
                        Tuzilma
                      </Link>
                      <Link className="link" to={"/labaratoriya"}>
                        Laboratoriya va bo'limlar
                      </Link>
                      <Link className="link" to={"/raxbaryat"}>
                        Rahbaryat
                      </Link>
                      <Link className="link" to={"/boglanish"}>
                        Bog'lanish
                      </Link>
                      <Link className="link" to={"/loyhalar"}>
                        Loyihalar
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <Link>
                <>
                  <div className="dropdown ms-7 ">
                    <button className="dropbtn text-white lg:font-normal lg:text-[18px]">
                      Yangiliklar
                    </button>
                    <div className="dropdown-content rounded-md ">
                      <Link className="link" to={"/yangiliklar"}>
                        So'ngi yangiliklar
                      </Link>
                      <Link className="link" to={"/elonlar"}>
                        E'lonlar
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <Link>
                <>
                  <div className="dropdown ms-10 ">
                    <button className="dropbtn lg:text-[18px] text-white font-normal">
                      Jurnallar
                    </button>
                    <div className="dropdown-content rounded-md ">
                      <Link className="link" to={"/jurnallar"}>
                        Jurnallar
                      </Link>
                      <Link className="link" to={"/maqola"}>
                        Maqola chop etish
                      </Link>
                      <Link className="link" to={"/kutubxona"}>
                        Online kutubxona
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <div className="">
                <Link
                  className=" ms-12 text-lg text-white font-normal lg:text-[18px]"
                  to={"/kengash"}
                >
                  Ilmiy kengash
                </Link>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between  ms-20 ">
                <div className="col-span-1">
                  <img
                    className=" w-[42px] h-10 rounded-[50%] bg-black "
                    src={flag}
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <Select
                    className=" ms-4  "
                    defaultValue="Uzbek"
                    style={{
                      width: 110,
                    }}
                    onChange={changeimg}
                    options={[
                      {
                        value: "uz",
                        label: "Uzbek",
                      },
                      {
                        value: "en",
                        label: "English",
                      },
                    ]}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:hidden" onClick={handleNav}>
          {!nav ? (
            <IoClose size={30} className="text-white" />
          ) : (
            <RxHamburgerMenu size={30} className="text-white" />
          )}
        </div>
        <div
          className={
            !nav
              ? "left-0 top-0 fixed w-[60%] border-r border-r-[#00df9a] h-full bg-[#fefefe] ease-in-out duration-500"
              : "fixed z-[1] left-[-100%]"
          }
        >
          <ul className="flex flex-col items-start justify-between h-[300px] w-[90%] my-7 mx-5">
            <li>
              <Link className="pr-7">
                <>
                  <div className="dropdown">
                    <button className="dropbtn  text-green-500 font-normal text-[17px]">
                      Biz Haqimizda
                    </button>
                    <div className="dropdown-content rounded-md ">
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/tuzulma"}
                      >
                        Tuzilma
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/labaratoriya"}
                      >
                        Laboratoriya va bo'limlar
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/raxbaryat"}
                      >
                        Rahbaryat
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/boglanish"}
                      >
                        Bog'lanish
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/loyhalar"}
                      >
                        Loyihalar
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li className="">
              <Link>
                <>
                  <div className="dropdown">
                    <button className="dropbtn text-lg text-green-500 font-semibold text-[17px]">
                      <p>Yangiliklar</p>
                    </button>
                    <div className="dropdown-content rounded-md ">
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/yangiliklar"}
                      >
                        So'ngi yangiliklar
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/elonlar"}
                      >
                        E'lonlar
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <Link>
                <>
                  <div className="dropdown ">
                    <button className="dropbtn text-lg text-green-500 font-semibold text-[17px]">
                      Jurnallar
                    </button>
                    <div className="dropdown-content rounded-md ">
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/jurnallar"}
                      >
                        Jurnallar
                      </Link>
                      <Link onClick={handleNav} className="link" to={"/maqola"}>
                        Maqola chop etish
                      </Link>
                      <Link
                        onClick={handleNav}
                        className="link"
                        to={"/kutubxona"}
                      >
                        Online kutubxona
                      </Link>
                    </div>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNav}
                className=" text-lg text-green-500 font-semibold text-[17px]"
                to={"/kengash"}
              >
                Ilmiy kengash
              </Link>
            </li>
            <li>
              <div className="flex flex-row items-center gap-4 md:justify-between w-[98%]">
                <div className="col-span-1">
                  <img
                    className=" w-[42px] h-10 rounded-[50%] bg-black "
                    src={flag}
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <Select
                    className=""
                    defaultValue="Uzbek"
                    style={{
                      width: 110,
                    }}
                    onChange={changeimg}
                    options={[
                      {
                        value: "uz",
                        label: "Uzbek",
                      },
                      {
                        value: "en",
                        label: "English",
                      },
                    ]}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
