import Image from "next/image";
import { useEffect, useState } from "react";

import BannerGrid from "/app/components/Home/BannerGrid";
import img1 from "/public/images/home/bg-slide-home-1.jpg";
import img2 from "/public/images/home/slide-1-2.jpg";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = [
        {
            img: img1,
            heading: "The Best Service, at the Right Time",
            sub: "We take pride in our ability to deliver top-quality solutions with precision and efficiency, ensuring that our clients receive the support they require at the most critical moments",
        },
        {
            img: img2,
            heading: "The Best Service, at the Right Time",
            sub: "We take pride in our ability to deliver top-quality solutions with precision and efficiency, ensuring that our clients receive the support they require at the most critical moments",
        },
    ];

    const slideLeft = () => {
        setCurrentIndex(
            currentIndex == 0 ? slide.length - 1 : currentIndex - 1
        );
    };
    const slideRight = () => {
        setCurrentIndex(
            currentIndex == slide.length - 1 ? 0 : currentIndex + 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            slideRight();
        }, 10000);
    });
    return (
        <>
            <div className="">
                <div className="h-[990px] relative bg-black">
                    <div className="">
                        {slide.map((image, index) => (
                            <Image
                                src={image.img}
                                alt=""
                                key={index}
                                className={
                                    index == currentIndex
                                        ? "h-full w-full absolute opacity-100 duration-[2s] z-10"
                                        : "h-full w-full absolute opacity-0 duration-[2s] z-10"
                                }
                            />
                        ))}
                    </div>
                    <div className="absolute z-30 flex flex-col gap-5 right-5 top-[350px]">
                        <button
                            onClick={slideRight}
                            className="size-[50px] flex items-center justify-center bg-white rounded-3xl hover:bg-[#FA4318] group duration-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="text-xl group-hover:text-white duration-500"
                            >
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </button>
                        <button
                            onClick={slideLeft}
                            className="size-[50px] flex items-center justify-center bg-white rounded-3xl hover:bg-[#FA4318] group duration-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="text-xl group-hover:text-white duration-500"
                            >
                                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="absolute z-20 h-full w-full">
                        <div className="min-h-[500px]">
                            {slide.map((content, index) => (
                                <div
                                    key={index}
                                    className="text-white relative h-fit"
                                >
                                    <div className="absolute z-20 top-[150px] space-y-10 w-1/2 pl-[10%]">
                                        <h1
                                            className={
                                                index == currentIndex
                                                    ? "text-6xl font-bold translate-y-0 duration-1000 delay-1000 opacity-100 ease-linear"
                                                    : "text-6xl font-bold -translate-y-[100%] opacity-0"
                                            }
                                        >
                                            {content.heading}
                                        </h1>
                                        <h2
                                            className={
                                                index == currentIndex
                                                    ? "text-lg translate-y-0 delay-500 duration-1000 opacity-100 ease-linear"
                                                    : "text-lg -translate-y-[400%] opacity-0"
                                            }
                                        >
                                            {content.sub}
                                        </h2>
                                        <button
                                            className={
                                                index == currentIndex
                                                    ? "font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase translate-y-0 duration-1000 delay-100 opacity-100 ease-linear"
                                                    : "font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase -translate-y-[600%] opacity-0"
                                            }
                                        >
                                            Our Services
                                            <i className="fa-solid fa-chevron-right text-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <BannerGrid />
                    </div>
                </div>
            </div>
        </>
    );
}
