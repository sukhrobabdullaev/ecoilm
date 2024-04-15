import React from "react";

const LabaratoriyaMudrlari = () => {
  return (
    <div className="bg-[#eee]">
      <div className="container">
        <p className="text-center text-blue-950 mb-3 mt-8 text-2xl md:text-4xl font-semibold">
          Bo'lim boshliqlari
        </p>
        <p className="text-center text-sm md:text-lg text-black/60">
          Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot
          instituti bo'lim boshliqlari
        </p>
        <div className="flex items-center  flex-col gap-2 mt-6 ">
          <div className="flex gap-10 rounded-tr-lg justify-between lg:w-[1000px] md:w-full rounded-bl-lg md:flex-row flex-col bg-white pb-10 items-start shadow-lg mb-4">
            <div className="flex flex-col gap-10 justify-end  md:text-lg pl-6 pt-6">
              <div className="flex flex-col gap-2">
                <p className="md:text-2xl text-lg text-blue-500 ">
                  AKT va axbarot resurslari bo'lim boshlig'i
                </p>
                <h3 className="font-bold">Turdiyev Akbarali Usmon o`g`li</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span>Telefon: </span>
                  <span>(+998) 91 585 55 33</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Elektron pochta: </span>
                  <span>turdiyevakbarali1998@mail.ru</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
            <img
              src="assets/img/akbarali.png"
              alt="mudr"
              className="w-[300px] h-[400px] bg-cover rounded-tr-lg rounded-bl-lg"
            />
          </div>
          <div className="flex gap-10 rounded-tr-lg justify-between lg:w-[1000px] md:w-full rounded-bl-lg md:flex-row flex-col bg-white pb-10 items-start shadow-lg mb-4">
            <div className="flex flex-col gap-10 justify-end  md:text-lg pl-6 pt-6">
              <div className="flex flex-col gap-2">
                <p className="md:text-2xl text-lg text-blue-500 ">
                  AKT va axbarot resurslari bo'lim boshlig'i
                </p>
                <h3 className="font-bold">Turdiyev Akbarali Usmon o`g`li</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span>Telefon: </span>
                  <span>(+998) 91 585 55 33</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Elektron pochta: </span>
                  <span>turdiyevakbarali1998@mail.ru</span>
                </div>
              </div>

              <a href="#" className="text-blue-500">
                Qisqa biografiya...
              </a>
            </div>
            <img
              src="assets/img/akbarali.png"
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
