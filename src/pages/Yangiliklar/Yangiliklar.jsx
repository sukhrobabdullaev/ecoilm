import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function New() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ecoilm.uz/api",
    })
      .then((res) => {
        setPeople(res?.data);
        console.log("data : " + res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid gap-5 px-10 py-7 grid-cols-12">
      <>
        {!!people ? (
          <>
            {people.map((item, index) => {
              return (
                <div key={index} className="col-span-4 ">
                  <div className="bg-white drop-shadow-md pb-4 ">
                    <img src={item.image} alt="vfgbh" />
                    <p className="p-3 text-center sm:text-lg sm:font-semibold md:text-lg md:font-semibold lg:text-xl lg:font-semibold xl:text-2xl xl:font-semibold 2xl:text-2xl 2xl:font-bold">
                      {item.title}
                    </p>
                    <p className="text-sm px-3 py-3">
                      {item.content.slice(0, 70)}...
                    </p>
                    <p className="px-3 py-3">{item.created_at.slice(0, 10)}</p>
                    <Link
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg ms-[270px] mb-5"
                      to={`/singlenews/${item.id}`}
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <p>loading...</p>
          </>
        )}
      </>
    </div>
  );
}
