import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RxEyeOpen } from "react-icons/rx";
import { GiLaserPrecision } from "react-icons/gi";
import { BsFillOpticalAudioFill } from "react-icons/bs";

export const treateMent = [
  { id: "1", icon: <BsFillOpticalAudioFill />, title: "surgical procedures", button: "more details" },
  { id: "2", icon: <RxEyeOpen />, title: "vision correction", button: "more details" },
  { id: "3", icon: <RxEyeOpen />, title: "lens treatments", button: "more details" },
  { id: "4", icon: <GiLaserPrecision />, title: "laser eye surgery", button: "more details" },
];

const IconTreate = () => {
  return (
    <div className="bg-[#D7E7E5] capitalize py-10 px-4 sm:px-10 lg:px-20">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary text-center leading-tight pb-6">
        A global leader,
        <br className="hidden sm:block" />
        treatment of eye disease
      </h1>

      {/* Swiper Wrapper */}
      <div className="text-black px-2 sm:px-10 lg:px-24">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-full min-h-60 sm:min-h-[280px]"
        >

          {treateMent.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex flex-col items-center justify-center text-center bg-[#EAFFFB] 
                     rounded-xl shadow-md py-6 px-4 cursor-pointer 
                     transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
            >

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full
                          bg-[#D7E7E5] text-primary text-4xl sm:text-5xl transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mt-4">{item.title}</h3>

              {/* Button */}
              <button className="mt-3 px-4 py-1 text-xs sm:text-sm rounded-full 
                             bg-primary text-white hover:bg-white hover:text-primary 
                             transition-all duration-300">
                {item.button}
              </button>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>

  );
};

export default IconTreate;
