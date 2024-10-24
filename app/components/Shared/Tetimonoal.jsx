
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import SheredStar from "./Star";

import c1 from "/public/images/client/author2.jpg";
import c2 from "/public/images/client/author3.jpg";
import c3 from "/public/images/client/avata-2-77x77.jpg";
import c4 from "/public/images/client/testi-2-77x77.jpg";

export default function Testimonial() {
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
    console.log(currentIndex, index);
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
      bg: c1,
      heading: "Amy Dasilva",
      des: "Founder & CEO",
      star: 5,
      text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
    },
    {
      bg: c2,
      heading: "Jeffery Marshall",
      des: "Engineer",
      star: 4.5,
      text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
    },
    {
      bg: c3,
      heading: "M.Bradbury",
      des: "Business Head",
      star: 4,
      text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
    },
    {
      bg: c4,
      heading: "Maria Speier",
      des: "Customer Service",
      star: 5,
      text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
    },
  ];
  return (
    <>
      <div className="pt-32 pb-16 relative bg-[url('/images/background/bg-testi-2.png')] bg-cover bg-no-repeat">
        <div className="relative flex flex-col px-[10%] justify-center items-center pb-5">
          <p className="text-[#203b70] pb-1 text-lg font-bold ">Testimonial</p>
          <h1 className="text-3xl xl:text-5xl font-bold text-center leading-normal">
            Happy Client Says <br /> About Us
          </h1>
        </div>

        <div className="px-[10%]  relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
              },
              1040: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
              },
              1480: {
                  slidesPerView: 3,
                  spaceBetween: 20,
              },
          }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className=""
          >
            {contents.map((content, index) => (
              <>
                <SwiperSlide key={index} className="my-[90px]">
                  <div className="flex flex-col gap-4 justify-center items-center px-10 py-16 rounded-md bg-gray-100 text-center shadow-md relative group">
                    <div className="p-2 flex bg-white size-[90px] -mt-[110px] relative z-20">
                      <Image src={content.bg} alt="" className="size-full" />
                    </div>
                    <h2 className="text-2xl font-bold group-hover:opacity-0 duration-100">
                      {content.heading}
                    </h2>
                    <p className="text-gray-700 group-hover:opacity-0 duration-100">
                      {content.text}
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center px-10 py-16 rounded-md bg-black text-white text-center shadow-md absolute top-0 scale-0 group-hover:scale-100 duration-500 origin-top">
                      <h2 className="text-2xl font-bold">
                        {content.heading}{" "}
                        <span className="text-blue-600 font-normal text-lg">
                          / {content.des}
                        </span>
                      </h2>
                      <SheredStar content={content} />
                      <p className="">{content.text}</p>
                      <p className="h-4 w-0 bg-yellow-500 absolute -bottom-4 group-hover:w-[80%] duration-500 delay-200"></p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        {/* <div className="flex gap-3 items-center justify-center px-[10%]">
          {contents.map((content, index) => (
            <p 
            onClick={() => {
              navi(index);
            }}
              key={index}
              className={
                index == currentIndex
                  ? "primary-background size-3 rounded-full"
                  : "bg-gray-500 size-2 rounded-full"
              }
            ></p>
          ))}
        </div> */}
      </div>
    </>
  );
}
