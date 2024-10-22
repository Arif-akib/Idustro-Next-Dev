import Image from "next/image";

import { useRef, useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeProduct() {
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
            img: "/images/product/pump.jpg",
            heading: "Pumps",
            subtext: "generator yato brand",
            oldP: "300.00",
            newP: "250.00",
            star: 3.5,
        },
        {
            img: "/images/product/Boiler.png",
            heading: "Boilers",
            subtext: "Compound",
            oldP: "20.00",
            newP: "",
            star: 3,
        },
        {
            img: "/images/product/turbine.webp",
            heading: "Turbine",
            subtext: "drill machine",
            oldP: "10.00",
            newP: "",
            star: 4,
        },
        {
            img: "/images/product/compressor.jpg",
            heading: "Compressors",
            subtext: "coumpound",
            oldP: "20.00",
            newP: "",
            star: 4.5,
        },
        {
            img: "/images/product/Valve.jpg",
            heading: "Valves",
            subtext: "generator yato brand",
            oldP: "",
            newP: "20.00",
            star: 5,
        },
        {
            img: "/images/product/Heat exchanger.jpg",
            heading: "Heat Exchangers",
            subtext: "compound",
            oldP: "20.00",
            newP: "",
            star: 4.5,
        },
        {
            img: "/images/product/Pressure regulator.jpg",
            heading: "Pressure Regulators",
            subtext: "compound",
            oldP: "20.00",
            newP: "",
            star: 4.5,
        },
    ];
    return (
        <>
            <div className="mt-20 pb-[140px] bg-gray-100 relative">
                <div className="flex flex-col items-center justify-center pt-[100px] pb-5 px-[5%]">
                    <p className="text-[#203b70] text-lg font-bold z-20">
                        Popular Products
                    </p>
                    <h4 className="text-transparent text-4xl md:7xl xl:text-[110px] font-bold font-outline-2 text-white z-10">
                        Product
                    </h4>
                    <h1 className="text-3xl lg:text-5xl font-bold w-full lg:w-1/2 text-center xl:mt-[-20px] z-20">
                        We have the best quality industrial products.
                    </h1>
                    <p className="h-[2px] w-[60px] bg-[#203b70] rounded-md mt-5 z-20"></p>
                    <Image
                        src={"/images/background/img-vector1.png"}
                        alt="Nahar industrial Services"
                        width={500}
                        height={500}
                        className="absolute top-0 left-[13%] z-0"
                    />
                    <Image
                        src="/images/background/ite-vector-left.png"
                        alt="Nahar industrial Services"
                        width={500}
                        height={500}
                        className="absolute top-0 right-[10%] bg-animate2"
                    />
                </div>

                <div className="px-[5%] xl:px-[10%]  relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1040: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="w-full"
                    >
                        {contents.map((content, index) => (
                            <>
                                <SwiperSlide
                                    key={index}
                                    className="mt-5 relative"
                                >
                                    <div className="z-20  flex flex-col items-center group">
                                        <div className="mb-[-70px] z-10 relative">
                                            <Image
                                                src={content.img}
                                                alt={content.title}
                                                width={600}
                                                height={600}
                                                className="size-[180px] rounded-full bg-white p-2 shadow-lg"
                                            />
                                            <p className="size-[180px] rounded-full primary-background absolute -z-10 top-0 group-hover:top-[-15px] duration-300 ease-linear"></p>
                                        </div>

                                        <div className="relative w-full">
                                            <div className="text-center bg-white px-5 rounded-xl pt-[80px] shadow-lg relative overflow-hidden">
                                                <h2 className="capitalize font-bold text-2xl line-clamp-2 pb-8">
                                                    {content.heading}
                                                </h2>
                                                {/* <p className="capitalize text-gray-500 text-lg pb-8 border-b line-clamp-1">
                                                    {content.subtext}
                                                </p> */}

                                                <div className="text-center bg-black text-white px-5 rounded-xl pt-[80px] shadow-lg absolute top-0 left-0 translate-y-[105%] group-hover:translate-y-0 duration-300 w-full">
                                                    <h2 className="capitalize font-bold text-2xl line-clamp-2 pb-8">
                                                        {content.heading}
                                                    </h2>
                                                    {/* <p className="capitalize text-gray-500 text-lg pb-8 border-b line-clamp-1">
                                                        {content.subtext}
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                        <div className="flex gap-3 items-center justify-center mt-10">
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
                            <div className="font-semibold text-sm sm:text-base flex gap-2 cursor-pointer">
                                {contents.map((content, index) => (
                                    <p
                                        onClick={() => {
                                            navi(index);
                                        }}
                                        key={index}
                                        className={
                                            index == currentIndex
                                                ? "primary-color"
                                                : ""
                                        }
                                    >
                                        <span>{index <= 9 ? 0 : ""}</span>
                                        {index + 1}
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
                <Image
                    src={"/images/background/ite-vector-left.png"}
                    alt="Nahar industrial Services"
                    width={500}
                    height={500}
                    className="absolute bottom-5 h-[250px] bg-animate1 z-0"
                />
                <Image
                    src="/images/background/vt-5.png"
                    alt="Nahar industrial Services"
                    width={200}
                    height={200}
                    className="absolute bottom-0 right-0 z-0"
                />
            </div>
        </>
    );
}
