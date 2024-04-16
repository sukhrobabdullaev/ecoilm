import News from "./News";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ElonlarThree from "./ElonlarThree";
import JurnallarThree from "./JurnallarThree";
import LoyihalarThree from "./LoyihalarThree";
import CarouselBanner from "./CarouselBanner";

import "./root.css";
const matn = `Toshkent suv ta’minoti, kanalizatsiya, gidrotexnika inshootlari
va muhandislik gidrogeologiyasi (ToshNII "VODGEO") instituti,
1960 yilda Markaziy Osiyo arxitektura va qurilish ilmiy-tadqiqot
institutida aholi punktlari sanoatining suv xo‘jaligi
laboratoriyasi sifatida tashkil etilgan, 1964 yilda U "VODGEO"
Butunittifoq ilmiy-tadqiqot institutida suv xo‘jaligi bo‘limi,
1978 yilda esa "VODGEO" Butunittifoq ilmiy-tadqiqot
institutining Toshkent filialiga aylantirildi. 1992 yil dekabr
oyidan boshlab institut O‘zbekiston Respublikasi Tabiatni
muhofaza qilish davlat qo‘mitasining tarkibiy bo‘linmasi
hisoblanadi. O‘zbekiston Respublikasi Prezidentining 2017 yil 21
apreldagi PQ-2915-sonli "O‘zbekiston Respublikasi Ekologiya va
atrof-muhitni muhofaza qilish davlat qo‘mitasi faoliyatini
tashkil etishni ta’minlash chora-tadbirlari to‘g‘risida" gi
farmonini bajarish maqsadida, shuningdek, 2017 yil 26 apreldagi
146-sonli va 17-sonli, 91-son buyruqlariga muvofiq.
Guvohnomaning 2017 yil 21 avgustdagi 538681-sonli ma’lumotiga
ko‘ra, O‘zbekiston Respublikasi Ekologiya va atrof-muhitni
muhofaza qilish davlat qo‘mitasi, O‘zbekiston Respublikasi
Ekologiya va atrof-muhitni muhofaza qilish ilmiy-tadqiqot
instituti ish faoliyatini boshladi.`;

export default function Root() {
  return (
    <div>
      <CarouselBanner />
      <section className="yangiliklar my-8">
        <div className="container">
          <div className="flex flex-col md:gap-4 gap-1 py-2">
            <div class="flex items-center justify-center">
              <div class="flex-grow border-t border-black"></div>
              <p class="text-center px-4 lg:text-[32px] text-[20px]">
                SO'NGI YANGILIKLAR
              </p>
              <div class="flex-grow border-t border-black"></div>
            </div>
            <span className="text-center md:text-lg text-black/50 block">
              ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI
              ILMIY-TADQIQOT INSTITUTI YANGILIKLARI
            </span>
          </div>
          <News />
        </div>
      </section>

      <section className="elonlar my-8">
        <div className="container">
          <div className="flex flex-col md:gap-4 gap-1 py-2">
            <div class="flex items-center justify-center">
              <p class="text-center px-4 lg:text-[32px] text-[20px]">
                E'LONLAR
              </p>
              <div class="flex-grow border-t border-black"></div>
              <div class="flex-grow border-t border-black"></div>
            </div>
          </div>
          <ElonlarThree />
        </div>
      </section>

      <section className="jurnallar bg-white pt-8">
        <div className="container">
          <div className="flex flex-col md:gap-4 gap-1 ">
            <div class="flex items-center justify-center">
              <div class="flex-grow border-t border-black"></div>
              <p class="text-center px-4 lg:text-[32px] text-[20px]">
                SO'NGI JURNALLAR
              </p>
              <div class="flex-grow border-t border-black"></div>
            </div>
            <span className="text-center md:text-lg text-black/50 block">
              EKOLOGIYA XABARNOMASI JURNALINING SO'NGI SONLARI
            </span>
          </div>
          <JurnallarThree />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center my-10">
        <div className="container">
          <div className="flex flex-col md:gap-4 gap-1 py-2">
            <div class="flex items-center justify-center">
              <div class="flex-grow border-t border-black"></div>
              <p class="text-center px-4 lg:text-[32px] text-[20px]">
                LOYIHALAR
              </p>
              <div class="flex-grow border-t border-black"></div>
            </div>
            <span className="text-center md:text-lg text-black/50 block">
              ATROF-MUHIT VA TABIATNI MUHOFAZA QILISH TEXNOLOGIYALARI
              ILMIY-TADQIQOT INSTITUTIDA OLIB BORILAYOTGAN LOYIHALAR
            </span>
          </div>
          <LoyihalarThree />
        </div>
      </section>

      <section className="bg3 py-10 shadow-lg rounded-xl w-full">
        <div className="container">
          <div className="flex flex-col md:gap-4 gap-1 py-2 text-white">
            <div class="flex items-center justify-center">
              <div class="flex-grow border-t border-white"></div>
              <p class="text-center px-4 lg:text-[32px] text-[20px]">
                BIZ HAQIMIZDA
              </p>
              <div class="flex-grow border-t border-white"></div>
            </div>
            <span className="text-center md:text-[22px] text-white/50 block">
              Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy
              tadqiqot instituti haqida qisqacha ma'lumot
            </span>
          </div>
          <div className="flex md:flex-row gap-10 flex-col items-center mt-4">
            <div className="basis-1/2">
              <img src="/assets/img/glavniy.JPG" alt="" />
            </div>
            <div className="basis-1/2">
              <p className="text-[#fefefe] text-[16px] lg:pt-5 text-justify pr-3">
                {matn}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1200px] mx-auto mt-10 ">
        <div className="container">
          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-black"></div>
            <p class="text-center px-4 lg:text-[32px] text-[20px]">
              BIZNING HAMKORLAR
            </p>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <div className="md:block hidden">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="my-10"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/misteo.png"
                alt=""
              />
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/superMap.png"
                alt=""
              />
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/hamkor.png"
                alt=""
              />
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/geostry.png"
                alt=""
              />
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/GIZ_Uzbekistan.png"
                alt=""
              />
              <img
                className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
                src="/assets/img/Uzbek-Japanese.png"
                alt=""
              />
            </Carousel>
          </div>
          <div className="flex md:hidden my-10 items-center gap-10 overflow-x-auto">
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/misteo.png"
              alt=""
            />
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/superMap.png"
              alt=""
            />
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/hamkor.png"
              alt=""
            />
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/geostry.png"
              alt=""
            />
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/GIZ_Uzbekistan.png"
              alt=""
            />
            <img
              className="md:w-[150px] md:h-[150px] w-[100px] object-cover"
              src="/assets/img/Uzbek-Japanese.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
