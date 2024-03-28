import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Menu, Dropdown } from "antd";

import "./navbar.css";

const Navbarr = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleYangilik, setDropdownVisibleYangilik] = useState(false);
  const [dropdownVisibleJurnallar, handleDropdownVisibleJurnallar] =
    useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleDropdownVisibleChange = (flag) => {
    setDropdownVisible(flag);
  };

  const dropdownMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/tuzulma">Tuzilma</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/labaratoriya">Laboratoriya va bo'limlar</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/raxbaryat">Rahbaryat</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/boglanish">Bog'lanish</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/loyhalar">Loyihalar</Link>
      </Menu.Item>
    </Menu>
  );
  const yangililarMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/yangiliklar">Yangiliklar</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/elonlar">E'lonlar</Link>
      </Menu.Item>
    </Menu>
  );

  const jurnallarMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/jurnallar">Jurnallar</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/maqola">Maqola chop etish</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/kutubxona">Online kutubxona</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="scroll-left">
        <p className="text-red-500">
          Atrof muhit va tabiatni muhofaza qilish texnalogiyalari ilmiy tadqiqot
          instituti rasmiy web sayti test rejimida ishlamoqda
        </p>
      </div>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                className="md:w-20 md:h-20 h-16 w-16"
                src="/assets/img/Ekologiya_ITI_logo.svg"
                alt="img"
              />
              <p className="lg:text-[12px] ms-3 sm:text-[10px] text-white md:w-[315px] font-normal hidden md:flex flex-col ">
                <span>ATROF-MUHIT VA TABIATNI</span>
                <span>MUHOFAZA QILISH TEXNOLOGIYALARI</span>
                <span>ILMIY-TADQIQOT INSTITUTI</span>
              </p>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:hidden lg:flex lg:flex-row lg:gap-10 md:justify-end"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="">
                  <Dropdown
                    overlay={dropdownMenu}
                    trigger={["click"]}
                    visible={dropdownVisible}
                    onVisibleChange={handleDropdownVisibleChange}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      Biz haqimizda
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    overlay={yangililarMenu}
                    trigger={["click"]}
                    visible={dropdownVisibleYangilik}
                    onVisibleChange={setDropdownVisibleYangilik}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      Yangiliklar
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    overlay={jurnallarMenu}
                    trigger={["click"]}
                    visible={dropdownVisibleJurnallar}
                    onVisibleChange={handleDropdownVisibleJurnallar}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      Jurnallar
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Link
                    to={"/kengash"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white "
                  >
                    Ilmiy kengash
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white "
                  >
                    Ilmiy texnik kengash
                  </a>
                </li>
              </ul>
              <Select
                defaultValue="Uz"
                style={{
                  width: 60,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "uz",
                    label: "Uz",
                  },
                  {
                    value: "eng",
                    label: "Eng",
                  },
                ]}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr;
