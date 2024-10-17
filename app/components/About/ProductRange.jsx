import Image from "next/image";

import { useRef, useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bg1 from "/public/images/background/ite-vector-left.png";

import machanical2 from "/public/images/home/4455-500x405.jpg";
import power2 from "/public/images/home/Energy-500x405.jpg";
import metal2 from "/public/images/home/service-11-500x405.jpg";
import petrol2 from "/public/images/home/service-image-single-1-500x405.jpg";
import machanical1 from "/public/images/icon/engineer1.png";
import metal1 from "/public/images/icon/excavator.png";
import petrol1 from "/public/images/icon/factory2.png";
import power1 from "/public/images/icon/gear.png";

export default function ProductRange() {
    const swiperRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        swiperRef.current.slidePrev();
        setCurrentIndex(
            currentIndex == 0 ? contents.length - 1 : currentIndex - 1
        );
    };
    const slideRight = () => {
        swiperRef.current.slideNext();
        setCurrentIndex(
            currentIndex == contents.length - 1 ? 0 : currentIndex + 1
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
    const contents = [
        {
            icon: power1,
            bg: power2,
            heading: "Fertilizer",
            subtext: "Fertilizer Industry Solutions",
            sub: "We provide essential equipment and services tailored to the fertilizer sector, including blending systems, conveyors, and application machinery that support efficient production processes.",
        },
        {
            icon: machanical1,
            bg: machanical2,
            heading: "Power Plant",
            subtext: "Power Plant Equipment",
            sub: "Our extensive range of products for power generation includes turbines, generators, transformers, and auxiliary systems designed to enhance the efficiency and reliability of power plants.",
        },
        {
            icon: petrol1,
            bg: petrol2,
            heading: "Gas Field",
            subtext: "Gas Field Equipment",
            sub: "We supply a variety of crucial equipment for gas exploration and production, including compressors, separators, and other specialized tools necessary for the oil and gas sector.",
        },
        {
            icon: petrol1,
            bg: petrol2,
            heading: "Refinary",
            subtext: "Refinary Solutions",
            sub: "Our offerings for the refining industry include pumps, valves, heat exchangers, and other essential equipment to ensure smooth and efficient refinery operations.",
        },
        {
            icon: power1,
            bg: metal2,
            heading: "Water Treatment",
            subtext: "Water Treatment Systems",
            sub: "We import and provide a wide range of equipment and solutions for water treatment plants, focusing on safe and efficient water purification and management.",
        },
    ];
    return (
        <>
            <div className="pt-10 pb-[40px] relative bg-gray-100">
                <h1 className="text-5xl font-bold w-1/2 text-center mb-5 mx-auto">
                Our Product Range
                </h1>
                <p className="w-1/2 text-center mb-[40px] mx-auto">At NIECO Ltd., we import and supply a diverse range of industrial products designed to meet the specific requirements of various sectors. Our primary offerings include:</p>
                <div className="px-[10%] relative">
                    <Swiper
                        slidesPerView={3}
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
                                <SwiperSlide
                                    key={index}
                                    className="mb-5 overflow-hidden"
                                >
                                    <div className="group relative size-[100%] pb-5 h-[350px] w-full">
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
                                                    index % 3 == 1
                                                        ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                                                        : "" || index % 3 == 2
                                                        ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                                                        : "" || index % 3 == 0
                                                        ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                                                        : ""
                                                }
                                            />
                                            <div className="bg-white h-[90px] w-full pl-5 flex flex-col justify-center shadow-md">
                                                <p className="text-xl font-bold ">
                                                    {content.heading}
                                                </p>
                                                <p className="text-gray-500 line">
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
                                                                : "" ||
                                                                  index % 3 == 1
                                                                ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                                                                : "" ||
                                                                  index % 3 == 2
                                                                ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                                                                : ""
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        index % 3 == 0
                                                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#25789e] border-l-[#25789e] absolute top-[90px] right-[-50px]"
                                                            : "" ||
                                                              index % 3 == 1
                                                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#c2482c] border-l-[#c2482c] absolute top-[90px] right-[-50px]"
                                                            : "" ||
                                                              index % 3 == 2
                                                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#3b9422] border-l-[#3b9422] absolute top-[90px] right-[-50px]"
                                                            : ""
                                                    }
                                                ></div>
                                                <p className="text-2xl font-bold hover:primary-color">
                                                    {content.heading}
                                                </p>
                                                <p className="">{content.sub}</p>
                                                <button
                                                    className={
                                                        index % 3 == 0
                                                            ? "font-semibold text-white bg-[#0099E2] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                                                            : "" ||
                                                              index % 3 == 1
                                                            ? "font-semibold text-white bg-[#203b70] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase"
                                                            : "" ||
                                                              index % 3 == 2
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
                            <button
                                onClick={slideLeft}
                                className="hover:primary-color"
                            >
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
                                        key={index}
                                        onClick={() => {
                                            navi(index);
                                        }}
                                        className={
                                            index == currentIndex
                                                ? "primary-color"
                                                : ""
                                        }
                                    >
                                        <span>{index <= 9 ? 0 : ""}</span>
                                        <span>{index + 1}</span>
                                        <span>
                                            {" "}
                                            {index < contents.length - 1
                                                ? "/"
                                                : ""}
                                        </span>
                                    </p>
                                ))}
                            </div>
                            <button
                                onClick={slideRight}
                                className="hover:primary-color"
                            >
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
                <p className="w-1/2 text-center mx-auto mt-5">Our comprehensive product range ensures that we can meet the unique demands of each industry, delivering solutions that enhance productivity and operational efficiency.</p>
            </div>
        </>
    );
}
