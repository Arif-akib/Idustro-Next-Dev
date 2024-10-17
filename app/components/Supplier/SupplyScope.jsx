import Image from "next/image";
import React, { useRef, useState } from "react";

import pow1 from "/public/images/service/Energy-450x500.jpg";
import mac1 from "/public/images/service/4455-450x500.jpg";
import pet1 from "/public/images/service/service-image-single-1-150x150.jpg";
import met1 from "/public/images/service/service-11-370x295.jpg";
import civ1 from "/public/images/service/service-12-450x500.jpg";
import con1 from "/public/images/service/service-2-450x500.jpg";
import wel1 from "/public/images/service/post-5-150x150.jpg";
import agr1 from "/public/images/service/service-7-150x150.jpg";

export default function SupplyScope() {
  const contents = [
    {
      bg: pow1,
      title: "Building Fast",
          text: "Agricultural Automation",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: mac1,
      title: "Areb Oil Rigs",
        text: "Civil & Art Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: pet1,
      title: "Warehouse Industry",
        text: "Mechanical Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: met1,
      title: "Alternative Energy",
        text: "Civil & Art Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: civ1,
      title: "Metal Industry",
        text: "Oil & Gas Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: con1,
      title: "Pipe and Pressure vessel Systems",
        text: "Mechanical Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: wel1,
      title: "Quality in Project Helios",
        text: "Civil & Art Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: agr1,
      title: "Polley Theater",
        text: "Agricultural Automation",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: con1,
      title: "Pipe and Pressure vessel Systems",
        text: "Mechanical Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: wel1,
      title: "Quality in Project Helios",
        text: "Civil & Art Engineering",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
    {
      bg: agr1,
      title: "Polley Theater",
        text: "Agricultural Automation",
      subtext:"In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors when your pump has a problem."
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
      <div className="py-32 px-[10%] bg-gray-100">
        <div className="grid grid-cols-4 gap-10 pb-10">
          {paginatedData.map((content, index) => (
            <div
              key={index}
                  className="min-h-[350px] w-full overflow-hidden relative group rounded-lg drop-shadow-lg"
            >
              <Image
                src={content.bg}
                alt=""
                className="size-full aspect-auto object-cover rounded-lg scale-125 group-hover:scale-100 duration-500"
              />
              <div className="absolute rounded-lg size-full top-0 flex flex-col justify-between p-5 bg-[#ffffffe1] gap-5 group-hover:bg-[#612249cb] group-hover:text-white duration-500">
                <div className="flex justify-between">
                  <button className="font-bold text-white bg-[#203b70] size-[50px] text-3xl flex items-center justify-center rounded-md shadow group-hover:rotate-90 scale-75 group-hover:scale-100 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                          </button>
                          <p className="text-5xl font bold font-outline-4 text-transparent group-hover:scale-animate"><span className={index+1 <10 ? '' :'hidden'}>0</span>{ index+1 }</p>
                </div>

                <div className="space-y-2">
                  <p className="primary-color font-bold line-clamp-1">{content.text}</p>
                          <p className="text-xl font-bold line-clamp-2">{content.title}</p>
                          <p className="line-clamp-4">{ content.subtext}</p>
                </div>
              </div>
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
