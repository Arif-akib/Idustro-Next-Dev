import Image from "next/image";

import bg1 from "/public/images/icon/image-cile.png";
import bg2 from "/public/images/icon/play.png";

import { useEffect, useState } from "react";

export default function SlideShow({ portfolio }) {
    const contents = portfolio.contents;
    const heading = portfolio.heading;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        setCurrentIndex(
            currentIndex == 0 ? contents.length - 1 : currentIndex - 1
        );
    };
    const slideRight = () => {
        setCurrentIndex(
            currentIndex == contents.length - 1 ? 0 : currentIndex + 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            slideRight();
        }, 10000);
    });
    return (
        <>
            <div className="flex relative pb-16 mb-16">
                <div className="h-[700px] w-[65%] relative">
                    {contents.map((content, index) => (
                        <div key={index} className="">
                            <Image
                                src={content.img}
                                alt=""
                                className={
                                    index == currentIndex
                                        ? "size-full absolute opacity-100 z-10 object-cover"
                                        : "size-full absolute opacity-0 z-10 object-cover"
                                }
                            />
                            <div
                                className={
                                    index == currentIndex
                                        ? "absolute opacity-100 z-20 h-[180px] w-[450px] bottom-0 right-0 shadow-md rounded-l-md"
                                        : "absolute opacity-0 z-20"
                                }
                            >
                                <div className="size-full relative rounded-l-md">
                                    <Image
                                        src={content.img}
                                        alt=""
                                        className="size-full object-cover rounded-l-md"
                                    />
                                    <div className="absolute size-full backdrop-blur-md bg-[#00000025] top-0 left-0 p-8 rounded-l-md text-white pr-[60px]">
                                        <p className="text-2xl font-semibold">
                                            {content.text}
                                        </p>
                                        <p className="text-lg tracking-widest mt-3 uppercase">
                                            {content.subtext}
                                        </p>
                                    </div>
                                    <div className="absolute z-10 primary-background h-[70px] w-[60px] bottom-0 right-0 text-white hover:animate-pulse flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="26"
                                            height="26"
                                            fill="currentColor"
                                        >
                                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[35%] mt-[-65px] -ml-20">
                    <div className="bg-gray-600 text-white h-[700px]  pt-[60px]  pl-[120px] pr-[40px]">
                        <h1 className="text-5xl font-bold">{heading}</h1>
                        <div className="py-6 flex flex-col gap-4 mt-4 relative">
                            {contents.map((content, index) => (
                                <div
                                    key={index}
                                    className={
                                        index == currentIndex
                                            ? "text-xl font-semibold pl-10 flex gap-2 items-center duration-300"
                                            : "text-xl font-semibold mb-5 flex gap-2 items-center"
                                    }
                                >
                                    <h3
                                        onClick={() => setCurrentIndex(index)}
                                        className="cursor-pointer"
                                    >
                                        {content.title}
                                    </h3>
                                    <Image
                                        src={bg2}
                                        alt=""
                                        className={
                                            index == currentIndex
                                                ? "size-[15px]"
                                                : "hidden"
                                        }
                                    />
                                    <p
                                        className={
                                            index == currentIndex
                                                ? "w-[180px] h-[4px] primary-background absolute left-[-150px] z-40 duration-300"
                                                : "w-[180px] h-[4px] primary-background absolute left-[-190px] z-40 opacity-0"
                                        }
                                    ></p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-1 items-center justify-center mt-8 pl-[80px]">
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
                        <div className="font-bold flex gap-1 text-sm">
                            {contents.map((content, index) => (
                                <p
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
                                        {index < contents.length - 1 ? "/" : ""}
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
                </div>
                <Image
                    src={bg1}
                    alt=""
                    className="absolute -z-10 -right-16 bottom-0 spin"
                />
            </div>
        </>
    );
}
