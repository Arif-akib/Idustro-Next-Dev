import Image from "next/image";

import Home from "/app/components/Shared/Hero.jsx";

import pow from "/public/images/icon/gear1.png";
import mac from "/public/images/icon/engineer.png";
import pet from "/public/images/icon/factory1.png";
import met from "/public/images/icon/excavator1.png";
import civ from "/public/images/icon/plumbing.png";
import con from "/public/images/icon/worker.png";
import wel from "/public/images/icon/weld.png";
import agr from "/public/images/icon/flask1.png";

export default function Career() {
  const HeroLable = "Corporate Social Responsibility";
    const bread = "Home >> More >> Corporate Social Responsibility";
    
    const contents = [
        {
          icon: pow,
          title: "Power & Energy",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: mac,
          title: "Mechanical Works",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: pet,
          title: "Petroleum Refinery",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: met,
          title: "Metal Forming",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: civ,
          title: "Civil Engineering",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: con,
          title: "Construction Services",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: wel,
          title: "Welding & Laser",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
        {
          icon: agr,
          title: "Agricultural Automation",
          text: "In parallel with the repair & maintenance of pumps on floating vehicles",
        },
    ];
    
  return (
    <>
      <Home HeroLable={HeroLable} bread={bread} />
      <div className="py-32 px-[10%]">
        <h1 className="text-5xl font-bold text-center">
          Our Open Job Position
        </h1>
        <div className="mt-20 grid grid-cols-4 gap-y-16 gap-x-5">
                  {contents.map((content, index) => (
               <div key={index} className="w-full p-5 rounded-md shadow-md flex flex-col items-center justify-center bg-gradient-to-r from-[#1900a8e1] to-[#0061f3ea] group">
               <div className="size-[80px] p-4 bg-white rounded-full flex items-center justify-center border-[3px] border-[#203b70] -mt-14 group-hover:scale-animate">
                 <Image src={content.icon} alt="" className=" size-[40px]" />
               </div>
               <p className="text-white text-2xl font-bold py-5">
                 {content.title}
                          </p>
                          <p className="text-white pb-5">
                 {content.text}
                          </p>
                          <button className="primary-color bg-white h-[40px] w-[150px] rounded-md shadow-md hover:animate-pulse font-bold">Apply</button>
             </div>
          ))}
        </div>
      </div>
    </>
  );
}
