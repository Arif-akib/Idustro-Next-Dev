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

export default function FocusArea() {
    const contents = [
        {
          bg: pow1,
          title: "Community Development",
          subtext:"Our company is dedicated to improving the quality of life in the communities we serve. We engage in a wide range of community support initiatives, including disaster relief efforts, educational programs, and healthcare services. Our recent contribution to flood-affected areas in Bangladesh is an example of our commitment to community welfare, where we provided essential supplies and food to those in need."
        },
        {
          bg: mac1,
          title: "Environmental Sustainability",
          subtext:"At NIECO, we take environmental sustainability seriously. We implement eco-friendly business practices, strive to minimize waste, and work towards reducing energy consumption in our operations. Our goal is to balance business growth with environmental responsibility by incorporating green technologies and sustainable practices."
        },
        {
          bg: pet1,
          title: "Employee Welfare",
          subtext:"We believe that our employees are our greatest asset. Our CSR efforts also extend to ensuring their well-being, offering them a safe and healthy workplace. We have programs that focus on continuous skill development, employee safety, and personal growth, contributing to their holistic development."
        },
      ];
    return (
        <>
            <div className="py-20 px-[5%] xl:px-[10%] bg-gray-100">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-10 text-center">Focus Areas</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {contents.map((content, index) => (
            <div
              key={index}
                  className="h-[300px] md:h-[450px] xl:h-[400px] w-full overflow-hidden relative group rounded-lg drop-shadow-lg"
            >
              <Image
                src={content.bg}
                alt=""
                className="size-full aspect-auto object-cover rounded-lg scale-125 group-hover:scale-100 duration-500"
              />
              <div className="absolute rounded-lg size-full top-0 flex flex-col p-5 bg-[#ffffffe1] gap-5 group-hover:bg-[#612249cb] group-hover:text-white duration-500">
                <div className="flex gap-5 items-center">
               
                          <p className="text-5xl font bold font-outline-4 text-transparent group-hover:scale-animate"><span className={index + 1 < 10 ? '' : 'hidden'}>0</span>{index + 1}</p>
                          <p className="text-xl font-bold primary-color group-hover:text-white">{content.title}</p>
                      </div>
                      <p className="">{ content.subtext}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}