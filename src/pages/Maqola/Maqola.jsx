import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Maqola() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300  px-5 py-3 rounded-lg my-4"
      >
        <div className="flex ">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px]  md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            {t("article1")}
          </p>
        </div>
        <p className="">{t("article1Desc")}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300 px-5 py-3 rounded-lg my-4"
      >
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            {t("article2")}
          </p>
        </div>
        <p className="">{t("article2Desc")}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300 px-5 py-3 rounded-lg my-4"
      >
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            {t("article3")}
          </p>
        </div>
        <p className="">{t("article3Desc")}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300 px-5 py-3 rounded-lg my-4"
      >
        <div className="flex">
          {/* <hr className="w-5 border-blue-900  mt-5 rotate-90 " /> */}
          <p className="text-[25px] md:text-[20px] md:font-[400] lg:text-[25px] lg:font-[600] font-[600]">
            {t("article4")}
          </p>
        </div>
        <p className="">{t("article4Desc")}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="bg-slate-300 px-5 py-3 rounded-lg my-4"
      >
        <p className="">{t("article5")}</p>
      </div>
    </div>
  );
}
