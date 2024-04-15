import React from "react";

const LabaratoriyaMudrlari = () => {
  return (
    <div className="bg-[#eee]">
      <div className="container">
        <p className="text-center text-blue-950 mb-3 mt-8 text-2xl md:text-4xl font-semibold">
          Laboratoriya mudirlari
        </p>
        <p className="text-center text-sm md:text-[20px] text-black/60">
          Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot
          instituti laboratoriya mudirlari
        </p>
        <div className="flex items-center flex-col gap-2 mt-6 ">
          <div className="flex gap-10 md:flex-row flex-col rounded-tr-lg justify-between lg:w-[1000px] md:w-full rounded-bl-lg bg-white pb-10 items-start shadow-lg mb-4">
            <div className="flex flex-col gap-10 justify-end text-[18px] pl-6 pt-6">
              <div className="flex flex-col gap-2">
                <p className="md:text-2xl text-blue-500 ">
                  Atmosfera havosini muhofaza qilish laboratoriyasi mudiri
                </p>
                <h3 className="font-bold">Zikrilla Alimov Bobamuratovich</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span>Telefon: </span>
                  <span>(+998) 90 820 40 69</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Elektron pochta: </span>
                  <span>alimov@keio.com</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
            <img
              src="assets/img/Zikrilla_Alimov.png"
              alt="mudr"
              className="w-[300px] h-[400px] bg-cover rounded-tr-lg rounded-bl-lg"
            />
          </div>
          <div className="flex gap-10 md:flex-row flex-col rounded-tr-lg justify-between lg:w-[1000px] md:w-full rounded-bl-lg bg-white pb-10 items-start shadow-lg mb-4">
            <div className="flex flex-col gap-10 justify-end text-[18px] pl-6 pt-6">
              <div className="flex flex-col gap-2">
                <p className="md:text-2xl text-blue-500 ">
                  Atmosfera havosini muhofaza qilish laboratoriyasi mudiri
                </p>
                <h3 className="font-bold">Zikrilla Alimov Bobamuratovich</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span>Telefon: </span>
                  <span>(+998) 90 820 40 69</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Elektron pochta: </span>
                  <span>alimov@keio.com</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
            <img
              src="assets/img/Zikrilla_Alimov.png"
              alt="mudr"
              className="w-[300px] h-[400px] bg-cover rounded-tr-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabaratoriyaMudrlari;
