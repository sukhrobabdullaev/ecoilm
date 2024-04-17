import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const InstitutTarixi = () => {
  const { t } = useTranslation();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://45.55.64.16:8001/api/tarix`,
    })
      .then((res) => {
        setSingle(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex py-8 justify-center flex-wrap flex-col gap-4 items-center">
      <div className="container">
        <div className="flex flex-col md:gap-4 gap-1 pt-10">
          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              {t("history")}
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <span className="text-center md:text-lg text-black/50 block">
            {t("historyDesc")}
          </span>
        </div>
        {single && (
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: single[0].tarix }}
          />
        )}
      </div>
    </div>
  );
};

export default InstitutTarixi;
