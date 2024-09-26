"use client";
import React, { useRef, useState } from "react";

import Hero from "/app/components/Shared/Hero";
import BlogSingleCard from "/app/components/Shared/BlogSingleCard";

import b1 from "/public/images/blog/img-33.jpg";
import b2 from "/public/images/blog/image-23.jpg";
import b3 from "/public/images/blog/chemical_22.jpg";
import b4 from "/public/images/blog/image-22.jpg";
import b5 from "/public/images/blog/team-15-400x400.jpg";
import b6 from "/public/images/blog/service-image-single-2-370x220.jpg";

export default function Blog() {
  const contents = [
    {
      id: 1,
      bg: b1,
      type: "industry",
      heading: "Utilization of Titanimun In Industries",
      writer: "David parker",
      date: "04 Jan 2022",
      date2: "4TH Jan'2022",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 2,
      bg: b2,
      type: "industry",
      heading: "The Role Of The CNC Machine Operator",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 3,
      bg: b3,
      type: "factory",
      heading: "The various Industries That Take advantage",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 4,
      bg: b4,
      type: "factory",
      heading: "construction Industry Heading Upwrite Using",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 5,
      bg: b5,
      type: "Construction",
      heading: "Key headlines for the best pharmaceutical",
      writer: "David parker",
      date: "11 Nov 2021",
      date2: "11TH Nov'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 6,
      bg: b6,
      type: "factory",
      heading: "Optimise and improve their capabilities",
      writer: "David parker",
      date: "11 nov 2021",
      date2: "11TH Nov'2021",
      text: "The Supply from the standard in addition to customized",
    },
  ];

  const HeroLable = "Stories";
  const bread = "Home >> Stories";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedData = contents.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(contents.length / itemsPerPage);
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  const prevPage = () => {
    setCurrentPage(currentPage != firstIndex ? currentPage - 1 : currentPage);
  };
  const nextPage = () => {
    setCurrentPage(currentPage != lastIndex ? currentPage + 1 : currentPage);
  };

  return (
    <>
      <Hero HeroLable={HeroLable} bread={bread} />
      <div className="py-24 text-center px-[10%] bg-gray-100">
        <h1 className="text-5xl font-bold">All Stories</h1>
        <div className="my-10 grid grid-cols-3 gap-5">
          {paginatedData.map((content, index) => (
            <div className="overflow-hidden shadow-md rounded-md">
              <BlogSingleCard key={index} content={content} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center justify-center">
          <button
            onClick={prevPage}
            className={
              firstIndex <= 0
                ? "hidden"
                : "size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
          {numbers.map((number, index) => (
            <button
              key={index}
              className={
                currentPage == number
                  ? "size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
                  : "size-[40px] rounded-full bg-gray-300 flex justify-center items-center font-bold"
              }
            >
              {number}
            </button>
          ))}

          <button
            onClick={nextPage}
            className={
              lastIndex >= contents.length
                ? "hidden"
                : "size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
