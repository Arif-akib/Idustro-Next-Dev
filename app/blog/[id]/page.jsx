"use client";
import { useEffect } from "react";
import Image from "next/image";

import Hero from "/app/components/Shared/Hero";
import BlogSingleCard from "/app/components/Shared/BlogSingleCard"

import b1 from "/public/images/blog/img-33.jpg";
import b2 from "/public/images/blog/image-23.jpg";
import b3 from "/public/images/blog/chemical_22.jpg";
import b4 from "/public/images/blog/image-22.jpg";
import b5 from "/public/images/blog/team-15-400x400.jpg";
import b6 from "/public/images/blog/service-image-single-2-370x220.jpg";

export default function SingleBlog({ params }) {
  const contents = [
    {
      id: 1,
      bg: b1,
      type: "Industry",
      heading: "Utilization of Titanimun In Industries",
      writer: "David parker",
      date: "04 Jan 2022",
      date2: "4TH Jan'2022",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 2,
      bg: b2,
      type: "Industry",
      heading: "The Role Of The CNC Machine Operator",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 3,
      bg: b3,
      type: "Factory",
      heading: "The various Industries That Take advantage",
      writer: "David parker",
      date: "29 Dec 2021",
      date2: "29TH Dec'2021",
      text: "The Supply from the standard in addition to customized",
    },
    {
      id: 4,
      bg: b4,
      type: "Factory",
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
      type: "Factory",
      heading: "Optimise and improve their capabilities",
      writer: "David parker",
      date: "11 nov 2021",
      date2: "11TH Nov'2021",
      text: "The Supply from the standard in addition to customized",
    },
  ];

  const blog = contents.find((i) => i.id == params.id);
  const HeroLable = blog.heading;
  const bread = "Home >> Blog >> Blog Details";
  return (
    <>
      <Hero HeroLable={HeroLable} bread={bread} />
      <div className="xl:w-[1000px] mx-auto pt-32 pb-20">
        <Image
          src={blog.bg}
          className="w-full h-[450px] object-cover rounded-t-md"
        ></Image>
        <div className=" p-10 border rounded-b-md space-y-5">
          <div className="flex items-center w-full gap-5 font-bold">
            <p className="text-white primary-background px-3 py-1.5 rounded-md text-sm font-bold">
              {blog.type}
            </p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
              <p>
                by
                <span className="primary-color font-semibold ml-2">
                  {blog.writer}
                </span>
              </p>
            </div>
            <p className="h-[20px] w-[.5px] bg-gray-500"></p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z"></path>
              </svg>
              <p className="text-gray-500">{blog.date}</p>
            </div>
          </div>
          <p className="text-4xl font-bold">{blog.heading}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam
            blanditiis praesentium, eveniet neque et eum doloremque incidunt
            possimus? Dignissimos. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rem earum labore, illum voluptate explicabo
            pariatur aperiam! Quam id delectus odit!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et qui at
            quam ipsam, fugiat blanditiis itaque, odio veniam molestiae,
            voluptate cupiditate ut explicabo amet? Quasi, vero! Repellat illum
            voluptates perspiciatis debitis, cupiditate eaque laboriosam
            pariatur aspernatur eligendi neque voluptate vel!
          </p>
          <p className="bg-gray-100 p-5 rounded-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            exercitationem mollitia voluptates iusto sapiente accusantium sit, a
            accusamus corrupti magnam magni, architecto optio dicta officiis
            molestiae at maiores nesciunt! Deleniti exercitationem quasi
            officiis modi quae nemo molestias libero tempora! Deserunt
            doloremque molestias aspernatur recusandae sapiente sit, voluptate
            hic iure ratione.
          </p>
        </div>
          </div>
          <div className="px-[10%] pb-20">
              <h1 className="text-3xl font-bold">Related post</h1>
              <div className='my-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {contents.map((content, index) => (
                    <div className='overflow-hidden shadow-md rounded-md'>
                        <BlogSingleCard key={index} content={ content} />
                        </div>
                    
                ))}
                
                </div>
          </div>
          
    </>
  );
}
