import React from "react";
import { Collapse } from "antd";
import "./lab.css";
import { useTranslation } from "react-i18next";

export default function Labaratoriye() {
  const { t } = useTranslation();

  return (
    <div className="md:mx-[20%] my-10 grid grid-cols-1 gap-5">
      <h1 className="text-[30px] font-semibold text-center">
        {t("labaratoryInfo")}
      </h1>
      <Collapse
        className="w-[300px] mx-auto md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory1")}
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  {t("labaratory1")}
                </p>
                {t("labaratory1Con")}
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "2",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory2")}
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  {t("labaratory2Desc")}
                </p>
                {t("labaratory2Con")}
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "3",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory3")}
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  {t("labaratory3Desc")}
                </p>
                {t("labaratory3Con")}
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "4",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory4")}
                </p>
              </div>
            ),
            children: <div className="py-2">{t("labaratory4Con")}</div>,
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "5",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory5")}
                </p>
              </div>
            ),
            children: (
              <div className="py-2">
                <p className="font-semibold text-[18px] py-3">
                  {t("labaratory5Desc")}
                </p>
                {t("labaratory5Con")}
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "6",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory6")}
                </p>
              </div>
            ),
            children: <div className="py-2">{t("labaratory6Con")}</div>,
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "7",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory7")}
                </p>
              </div>
            ),
            children: <div className="py-2">{t("labaratory7Con")}</div>,
          },
        ]}
      />
      <Collapse
        className="w-[300px] mx-auto  md:w-[600px] lg:w-[900px] bg_lab"
        size="large"
        items={[
          {
            key: "8",
            label: (
              <div>
                <p className="text-white text-[17px] font-semibold">
                  {t("labaratory8")}
                </p>
              </div>
            ),
            children: <div className="py-2">{t("labaratory8Con")}</div>,
          },
        ]}
      />
    </div>
  );
}
