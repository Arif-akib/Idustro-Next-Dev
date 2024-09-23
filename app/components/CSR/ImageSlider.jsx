import Image from "next/image";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import bg1 from "/public/images/background/img-vector1.png"
import bg3 from "/public/images/background/ite-vector-left.png"
import bg4 from "/public/images/background/vt-5.png"

import gal1 from "/public/images/Gallery/gallery-1.jpg";
import gal2 from "/public/images/Gallery/gallery-2.jpg";
import gal3 from "/public/images/Gallery/gallery-3.jpg";
import gal4 from "/public/images/Gallery/gallery-4.jpg";
import gal5 from "/public/images/Gallery/gallery-5.jpg";
import gal6 from "/public/images/Gallery/gallery-6.jpg";

export default function CSRSlider() {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    swiperRef.current.slidePrev();
    setCurrentIndex(currentIndex == 0 ? contents.length - 1 : currentIndex - 1);
  };
  const slideRight = () => {
    swiperRef.current.slideNext();
    setCurrentIndex(currentIndex == contents.length - 1 ? 0 : currentIndex + 1);
  };
  const navi = (index) => {
    if (currentIndex < index) {
      slideRight();
      setCurrentIndex(index);
    } else if (currentIndex > index) {
      slideLeft();
      setCurrentIndex(index);
    }
  };
  const contents = [
    {
      img: gal1,
      },
      {
        img: gal2,
      },
      {
        img: gal3,
      },
      {
        img: gal4,
      },
      {
        img: gal5,
      },
      {
        img: gal6,
      },
  ];
  return (
    <>
      <div className="pb-[140px] bg-gray-100 relative">
        <div className="flex flex-col items-center justify-center pt-[100px] pb-5">
          <p className="text-[#FA4318] text-lg font-bold mb-[-70px] z-20">
            Image Gallery
          </p>
          <h4 className="text-transparent text-[110px] font-bold font-outline-2 text-white z-10">
            Gallery
          </h4>
          <h1 className="text-5xl font-bold w-1/2 text-center mt-[-70px] z-20">
            Some images of our work
          </h1>
          <p className="h-[2px] w-[60px] bg-[#FA4318] rounded-md mt-5 z-20"></p>
          <Image
            src={bg1}
            alt=""
            className="absolute top-0 left-[13%]"
          />
        </div>

        <div className="px-[10%]  relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className=""
          >
            {contents.map((content, index) => (
              <>
                <SwiperSlide key={index} className="">
                <Image
                        src={content.img}
                        alt=""
                        className=""
                      />
                </SwiperSlide>
              </>
            ))}
            <div className="flex gap-3 items-center justify-center mt-10">
              <button onClick={slideLeft} className="hover:primary-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
                </svg>
              </button>
              <div className="font-semibold flex gap-2 cursor-pointer">
                {contents.map((content, index) => (
                  <p
                    onClick={()=>{navi(index)}}
                    key={index}
                    className={index == currentIndex ? "primary-color" : ""}
                  >
                    <span>{index <= 9 ? 0 : ""}</span>
                    {index + 1}
                    <span> {index < contents.length - 1 ? "/" : ""}</span>
                  </p>
                ))}
              </div>
              <button onClick={slideRight} className="hover:primary-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
        <Image
          src={bg3}
          alt=""
          className="absolute bottom-5 h-[250px] bg-animate1 z-0"
        />
        <Image
          src={bg4}
          alt=""
          className="absolute bottom-0 right-0 z-0"
        />
      </div>
    </>
  );
}
