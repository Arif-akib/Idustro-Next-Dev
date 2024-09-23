import Image from "next/image";

import React, { useRef, useState } from "react";


import BlogCard from "../Shared/BlogCard";

import bg1 from "/public/images/background/img-vector1.png"
import bg2 from "/public/images/background/vt-5.png"
import bg3 from "/public/images/background/ite-vector-left.png"

import b1 from "/public/images/blog/img-33.jpg";
import b2 from "/public/images/blog/image-23.jpg";
import b3 from "/public/images/blog/chemical_22.jpg";
import b4 from "/public/images/blog/image-22.jpg";
import b5 from "/public/images/blog/team-15-400x400.jpg";
import b6 from "/public/images/blog/service-image-single-2-370x220.jpg";


export default function CsrStory() {
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
      bg: b1,
      type: "industry",
      heading: "Utilization of Titanimun In Industries",
      writer: "David parker",
      date: "04 Jan 2022",
      date2: "4TH Jan'2022",
      text: "The Supply from the standard in addition to customized",
    },
    {
      bg: b2,
      type: "industry",
      heading: "The Role Of The CNC Machine Operator",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      bg: b3,
      type: "factory",
      heading: "The various Industries That Take advantage",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      bg: b4,
      type: "factory",
      heading: "construction Industry Heading Upwrite Using",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      bg: b5,
      type: "Construction",
      heading: "Key headlines for the best pharmaceutical",
      writer: "David parker",
      date: "11 Nov 2021",
      date2: "11TH Nov'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      bg: b6,
      type: "factory",
      heading: "Optimise and improve their capabilities",
      writer: "David parker",
      date: "11 nov 2021",
      date2: "11TH Nov'2021",
      text: "The Supply from the standard in addition to customized",
    },
  ];
  return (
    <>
      <div className="pb-[130px] bg-gray-100 relative">
        <Image
          src={bg1}
          alt=""
          className="absolute top-10 left-0"
        />
        <Image
          src={bg2}
          alt=""
          className="absolute top-10 right-0"
        />
        <Image
          src={bg3}
          alt=""
          className="absolute bottom-0 left-0 size-[180px]"
        />
        <div className="flex justify-between items-end pt-[100px] pb-5 px-[10%] z-10 relative">
          <div className="relative flex flex-col">
            <p className="text-[#FA4318] text-lg font-bold mb-[-70px] z-20">
              Latest Stories
            </p>
            <h4 className="text-transparent text-[110px] font-bold font-outline-2 z-10 -ml-16">
            Stories
            </h4>
            <h1 className="text-5xl font-bold mt-[-70px] z-20">
              Learn something from stories
            </h1>
            <p className="h-[2px] w-[60px] bg-[#FA4318] rounded-md mt-5 z-20"></p>
          </div>
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
        </div>

        <BlogCard contents={contents} swiperRef={ swiperRef} />
      </div>
    </>
  );
}
