"use client";
import { useEffect } from "react";
import Image from "next/image";

import Hero from "/app/components/Shared/Hero";
import BlogSingleCard from "/app/components/Shared/BlogSingleCard"

import machanical2 from "/public/images/home/4455-500x405.jpg";
import power2 from "/public/images/home/Energy-500x405.jpg";
import metal2 from "/public/images/home/service-11-500x405.jpg";
import petrol2 from "/public/images/home/service-image-single-1-500x405.jpg";
import machanical1 from "/public/images/icon/engineer1.png";
import metal1 from "/public/images/icon/excavator.png";
import petrol1 from "/public/images/icon/factory2.png";
import power1 from "/public/images/icon/gear.png";

import gal1 from "/public/images/Gallery/gallery-1.jpg";
import gal2 from "/public/images/Gallery/gallery-2.jpg";
import gal3 from "/public/images/Gallery/gallery-3.jpg";
import gal4 from "/public/images/Gallery/gallery-4.jpg";
import gal5 from "/public/images/Gallery/gallery-5.jpg";
import gal6 from "/public/images/Gallery/gallery-6.jpg";

export default function SingleBlog({ params }) {
  const contents = [
    {
      id:1,
    icon: power1,
    bg: power2,
    heading: "Water Pump, Filtered Water Pump and Jockey Pump",
    subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Portable Water Pump, Filtered Water Pump and Jockey Pump",
       contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
  },
    {
      id:2,
    icon: machanical1,
    bg: machanical2,
    heading: "Gate Valve Manual Operated Gear",
    subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Gate Valve Manual Operated Gear, Chittagong Urea Fertilizer Company Limited (CUFL).",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
  },
    {
      id:3,
    icon: petrol1,
    bg: petrol2,
    heading: "Valve Body & Actuator",
    subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Valve Body & Actuator, Chittagong Urea Fertilizer Company Limited (CUFL).",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
  },
    {
      id:4,
    icon: petrol1,
    bg: petrol2,
    heading: "Ammonia Synthesis Converter Catalyst Unloading, Loading, Inspection, Basket maintenance & Reduction of Ammonia converter",
    subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Ammonia Synthesis Converter Catalyst Unloading, Loading, Inspection, Basket maintenance & Reduction of Ammonia converter, Chittagong Urea Fertilizer Company Limited (CUFL).",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
  },
    {
      id:5,
    icon: metal1,
    bg: metal2,
    heading: "Procurement of Rotor (Shaft with Impeller) and Bearing Housing/Bearing Box for De-Dust Fan",
    subtext: "DAP Fertilizer Company Limited, (DAPFCL)",
      sub: "Procurement of Rotor (Shaft with Impeller) and Bearing Housing/Bearing Box for De-Dust Fan, DAP Fertilizer Company Limited, (DAPFCL)",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
    },
    {
      id:6,
      icon: machanical1,
      bg: machanical2,
      heading: "02 Sets Support Roller with Shaft, Assembly and 20 (Twenty) Pieces Lubrication Graphite for Drier (M-230)",
      subtext: "DAP Fertilizer Company Limited, (DAPFCL)",
      sub: "Supply of 02 Sets Support Roller with Shaft, Assembly and 20 (Twenty) Pieces Lubrication Graphite for Drier (M-230), DAP Fertilizer Company Limited, (DAPFCL)",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
    },
    {
      id:7,
      icon: petrol1,
      bg: petrol2,
      heading: "Spare Parts for Waste-water Pump (P706A/B)",
      subtext: "Shahjalal Fertilizer Company Limited, (SFCL)",
      sub: "Supply of Spare Parts for Waste-water Pump (P706A/B), Shahjalal Fertilizer Company Limited, (SFCL)",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
    },
    {
      id:8,
      icon: petrol1,
      bg: petrol2,
      heading: "Installing Comissioning & Testing 02 Vaccum Circuit Breaker (VCB)",
      subtext: "Shahjalal Fertilizer Company Limited, (SFCL)",
      sub: "Supply Installing Comissioning & Testing 02 Vaccum Circuit Breaker (VCB), Shahjalal Fertilizer Company Limited, (SFCL)",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
    },
    {
      id:9,
      icon: metal1,
      bg: metal2,
      heading: "Rotameter Type Flowmeter",
      subtext: "Jamuna Fertilizer Company Limited (JFCL)",
      sub: "Supply of Rotameter Type Flowmeter, Jamuna Fertilizer Company Limited (JFCL)",
      contents : [
        {
          img: gal1,
          },
          {
            img: gal2,
          },
          {
            img: gal3,
          },
          {
            img: gal4,
          },
          {
            img: gal5,
          },
          {
            img: gal6,
          },
      ]
    },
  ];

  const blog = contents.find((i) => i.id == params.id);
  const HeroLable = "Project Details";
  const bread = "Home >> Project List >> Project Details";
  return (
    <>
      <Hero HeroLable={HeroLable} bread={bread} />
      <div className="xl:w-[1000px] mx-auto pt-32 pb-20">
        <Image
          src={blog.bg}
          className="w-full h-[450px] object-cover rounded-t-md"
        ></Image>
        <div className=" p-10 border rounded-b-md space-y-5">
          
          <p className="text-4xl font-bold">{blog.heading}</p>
          <p className="text-xl font-bold primary-color">Project value : <span className="font-normal text-lg text-black">{ }</span></p>
          <p className="text-2xl font-bold primary-color">{blog.subtext}</p>
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
              <h1 className="text-3xl font-bold">Image Gallery</h1>
              <div className='my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {blog.contents.map((content, index) => (
                    <div className='overflow-hidden shadow-md rounded-md'>
                        <Image
                        src={content.img}
                        alt=""
                        className=""
                      />
                        </div>
                ))}
                
                </div>
          </div>
          
    </>
  );
}
