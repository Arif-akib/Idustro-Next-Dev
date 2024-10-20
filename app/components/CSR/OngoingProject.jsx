import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import machanical2 from "/public/images/home/4455-500x405.jpg";
import power2 from "/public/images/home/Energy-500x405.jpg";
import metal2 from "/public/images/home/service-11-500x405.jpg";
import petrol2 from "/public/images/home/service-image-single-1-500x405.jpg";
import machanical1 from "/public/images/icon/engineer1.png";
import metal1 from "/public/images/icon/excavator.png";
import petrol1 from "/public/images/icon/factory2.png";
import power1 from "/public/images/icon/gear.png";

export default function OngoingProject() {
    const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    swiperRef.current.slidePrev();
    setCurrentIndex(
      currentIndex == 0 ? ongoingProject.length - 1 : currentIndex - 1
    );
  };
  const slideRight = () => {
    swiperRef.current.slideNext();
    setCurrentIndex(
      currentIndex == ongoingProject.length - 1 ? 0 : currentIndex + 1
    );
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

  const ongoingProject = [
    {
      id: 1,
      icon: power1,
      bg: power2,
      heading: "Bangladesh Flood Relief",
      subtext:
        "In response to the recent floods in Bangladesh, NIECO has actively participated in relief efforts by distributing food and essential supplies. We are packaging relief materials to be distributed in the most affected areas, ensuring they reach those in need promptly. Our team is working closely with local authorities and communities to maximize the impact of our aid.",
      sub: "In response to the recent floods in Bangladesh, NIECO has actively participated in relief efforts by distributing food and essential supplies. We are packaging relief materials to be distributed in the most affected areas, ensuring they reach those in need promptly. Our team is working closely with local authorities and communities to maximize the impact of our aid.",
    },
    {
      id: 2,
      icon: machanical1,
      bg: machanical2,
      heading: "Educational Support",
      subtext:
        "We support various educational initiatives in underprivileged areas, providing resources for schools, scholarships, and vocational training. Our aim is to empower young minds and help build a better future for the next generation.",
      sub: "We support various educational initiatives in underprivileged areas, providing resources for schools, scholarships, and vocational training. Our aim is to empower young minds and help build a better future for the next generation.",
    },
    {
      id: 3,
      icon: petrol1,
      bg: petrol2,
      heading: "Healthcare Initiatives",
      subtext:
        "NIECO is involved in improving access to healthcare through partnerships with local hospitals and clinics. Our contributions include medical equipment donations, health camps, and awareness programs to promote public health.",
      sub: "NIECO is involved in improving access to healthcare through partnerships with local hospitals and clinics. Our contributions include medical equipment donations, health camps, and awareness programs to promote public health.",
    },
    ];
    
    return (
        <>
            <div className="pb-[50px] relative">
        <div className="pt-[80px] bg-[url('/images/background/bg-background.jpg')] pb-[200px] px-[5%] xl:px-[10%]">
          <h1 className="text-3xl lg:text-5xl font-bold w-full">
            Ongoing CSR Project
          </h1>
        </div>

        <div className="px-[5%] xl:px-[10%] mt-[-150px] relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
            {ongoingProject.map((content, index) => (
              <>
                <SwiperSlide key={index} className="mb-5 overflow-hidden">
                  <div className="group relative size-[100%] pb-5 h-[250px] w-full">
                    <Image
                      src={content.bg}
                      alt=""
                      className="size-[100%] object-cover aspect-square rounded-xl shadow-md"
                    />
                    <div className="flex gap-5 items-center absolute z-0 bottom-1 w-[calc(100%-20px)] group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                      <Image
                        src={content.icon}
                        alt=""
                        className={
                          index % 3 == 0
                            ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                            : "" || index % 3 == 1
                            ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                            : "" || index % 3 == 2
                            ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                            : ""
                        }
                      />
                      <div className="bg-white h-[90px] w-full pl-5 flex flex-col justify-center shadow-md">
                        <p className="text-xl font-bold line-clamp-1">
                          {content.heading}
                        </p>
                        <p className="text-gray-500 line-clamp-2">
                          {content.subtext}
                        </p>
                      </div>
                    </div>
                    <div className="absolute z-10 w-[calc(100%-50px)] h-[calc(100%-20px)] top-0 left-0 bg-[#ffffffe5] rounded-l-xl translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out shadow-md">
                      <div className="relative pr-[90px] p-5 flex flex-col gap-5 ">
                        <div className="absolute top-0 right-[-50px]">
                          <Image
                            src={content.icon}
                            alt=""
                            className={
                              index % 3 == 0
                                ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                                : "" || index % 3 == 1
                                ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                                : "" || index % 3 == 2
                                ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                                : ""
                            }
                          />
                        </div>
                        <div
                          className={
                            index % 3 == 0
                              ? "h-0 w-0 border-[25px] border-transparent border-t-[#25789e] border-l-[#25789e] absolute top-[90px] right-[-50px]"
                              : "" || index % 3 == 1
                              ? "h-0 w-0 border-[25px] border-transparent border-t-[#201553] border-l-[#201553] absolute top-[90px] right-[-50px]"
                              : "" || index % 3 == 2
                              ? "h-0 w-0 border-[25px] border-transparent border-t-[#3b9422] border-l-[#3b9422] absolute top-[90px] right-[-50px]"
                              : ""
                          }
                        ></div>
                        <p className="text-2xl font-bold hover:primary-color">
                          {content.heading}
                        </p>
                        <p className=" line-clamp-3">{content.sub}</p>
                        <button
                          className={
                            index % 3 == 0
                              ? "font-semibold text-white bg-[#0099E2] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                              : "" || index % 3 == 1
                              ? "font-semibold text-white bg-[#203b70] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase"
                              : "" || index % 3 == 2
                              ? "font-semibold text-white bg-[#28Bc00] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                              : ""
                          }
                        >
                          About Us
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
            <div className="flex gap-3 items-center justify-center">
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
                {ongoingProject.map((content, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      navi(index);
                    }}
                    className={index == currentIndex ? "primary-color" : ""}
                  >
                    <span>{index <= 9 ? 0 : ""}</span>
                    <span>{index + 1}</span>
                    <span> {index < ongoingProject.length - 1 ? "/" : ""}</span>
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
      </div>
        </>
    )
}