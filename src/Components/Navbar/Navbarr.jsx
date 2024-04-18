import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select, Menu, Dropdown } from "antd";

import "./navbar.css";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";

export const lang = localStorage.getItem("i18nextLng");

const Navbarr = () => {
  const { t } = useTranslation();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleYangilik, setDropdownVisibleYangilik] = useState(false);
  const [dropdownVisibleJurnallar, handleDropdownVisibleJurnallar] =
    useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    window.location.reload(); // Reload the page to reflect language change
  };

  const handleDropdownVisibleChange = (flag) => {
    setDropdownVisible(flag);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };
  const labaratoriyaMenu = (
    <Menu className="right-dropdown">
      <Menu.Item key="7">
        <Link to="/laboratoriya-mudrlari" onClick={closeMenu}>
          {t("team1")}
        </Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link to="/bolim-boshliqlari" onClick={closeMenu}>
          {t("team2")}
        </Link>
      </Menu.Item>
    </Menu>
  );

  const dropdownMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/tuzulma" onClick={closeMenu}>
          {t("about1")}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/labaratoriya" onClick={closeMenu}>
          {t("about2")}
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/raxbaryat" onClick={closeMenu}>
          {t("about3")}
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Dropdown overlay={labaratoriyaMenu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {t("about4")}
          </a>
        </Dropdown>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/institut-tarixi" onClick={closeMenu}>
          {t("about5")}
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/boglanish" onClick={closeMenu}>
          {t("about6")}
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/loyhalar" onClick={closeMenu}>
          {t("about7")}
        </Link>
      </Menu.Item>
    </Menu>
  );
  const yangililarMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/yangiliklar" onClick={closeMenu}>
          {t("news")}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/elonlar" onClick={closeMenu}>
          {t("announcements")}
        </Link>
      </Menu.Item>
    </Menu>
  );
  const jurnallarMenu = (
    <Menu className="">
      <Menu.Item key="1">
        <Link to="/jurnallar" onClick={closeMenu}>
          {t("journals")}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/maqola" onClick={closeMenu}>
          {t("journal1")}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/kutubxona" onClick={closeMenu}>
          {t("journal2")}
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="scroll-left">
        <p className="text-red-500">{t("testmode")}</p>
      </div>
      <div>
        <nav className="border-gray-200 bg-gray-900">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                className="md:w-16 md:h-16 h-12 w-12"
                src="/assets/img/Ekologiya_ITI_logo.svg"
                alt="img"
              />
              <p className="ms-3 sm:text-[10px] text-white md:w-[315px] font-normal hidden md:flex flex-col ">
                <span>{t("logo1")}</span>
                <span>{t("logo2")}</span>
                <span>{t("logo3")}</span>
              </p>
            </Link>
            {isMenu ? (
              <button
                type="button"
                className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                onClick={() => setIsMenu(false)}
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l12 12M13 1L1 13"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => setIsMenu(true)}
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
            )}

            <div
              className={`w-full z-50 absolute top-[84px] left-0 lg:static lg:flex lg:flex-row lg:gap-10 md:justify-end ${
                isMenu ? "" : "hidden"
              }`}
            >
              <ul className="font-medium flex flex-col items-center p-4 lg:p-0 md:mt-4  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 bg-gray-900 border-gray-700">
                <li className="">
                  <Dropdown
                    overlay={dropdownMenu}
                    trigger={["click"]}
                    open={dropdownVisible}
                    onOpenChange={handleDropdownVisibleChange}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      {t("about")}
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    overlay={yangililarMenu}
                    trigger={["click"]}
                    open={dropdownVisibleYangilik}
                    onOpenChange={setDropdownVisibleYangilik}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0"
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      {t("news")}
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    overlay={jurnallarMenu}
                    trigger={["click"]}
                    open={dropdownVisibleJurnallar}
                    onOpenChange={handleDropdownVisibleJurnallar}
                    className="cursor-pointer"
                  >
                    <a
                      className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0"
                      aria-current="page"
                      onClick={(e) => e.preventDefault()}
                    >
                      {t("journals")}
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Link
                    to={"/kengash"}
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white"
                    onClick={closeMenu}
                  >
                    {t("scientific")}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white "
                    onClick={closeMenu}
                  >
                    {t("technic")}
                  </a>
                </li>
              </ul>
              <div className=" bg-gray-900 flex items-start justify-center  border-gray-700 lg:pb-0 pb-4">
                <Select
                  defaultValue={i18n.language}
                  style={{ width: 70 }}
                  onChange={handleChangeLanguage}
                  options={[
                    {
                      value: "uz",
                      label: t("Uz"),
                    },
                    {
                      value: "en",
                      label: t("Eng"),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr;
