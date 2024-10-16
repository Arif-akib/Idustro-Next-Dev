import Image from "next/image";

import fac from "/public/images/icon/Icon-1.png";
import eng from "/public/images/icon/Icon-2.png";
import ico from "/public/images/icon/Icon-3.png";

export default function Membership() {
  const contents = [
    {
      number: "1500 +",
      text: "Bangladesh Indenting Agent Association (BIAA)",
      icon: fac,
    },
    {
      number: "1.5K",
      text: "Bangladesh Agricultural Machinery Merchant Association",
      icon: eng,
    },
    {
      number: "266 +",
      text: "Small & Medium Enterprises Owners Association of Bangladesh",
      icon: ico,
    },
  ];

  return (
    <>
      <div className="px-[10%] pt-20">
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center">Company Overview</h2>
          <div className="grid grid-cols-3 gap-5 font-bold text-xl mt-10">
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Founded on 2012 (initially as FM Services)
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              2016: Established as Naahar Industrial Equipments Co. Ltd.
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              2021: Launched Nirem Service Team as a sister concern.
            </p>
          </div>
              </div>
              
              <div className="mb-20">
          <h2 className="text-5xl font-bold text-center">Banking</h2>
          <div className="flex justify-center gap-5  mt-10">
            <p className="flex items-center gap-2">
              <span className="font-bold text-xl">Bank : </span>Prime Bank Limited
            </p>
            <p className="flex items-center gap-2">
            <span className="font-bold text-xl">Branch : </span>Bashabo, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold primary-color text-center pb-3">
            Membership
          </p>
          <h2 className="text-5xl font-bold text-center">Our Membership</h2>
          <div className="pt-10 pb-20 grid grid-cols-3 gap-8">
            {contents.map((content, index) => (
              <div
                key={index}
                className="flex items-center gap-5 drop-shadow-xl bg-white group relative"
              >
                <div className="primary-background flex items-center justify-center border-r-[10px] border-[#ffe0d4] h-[140px] w-[130px] rounded-tr-[40%] rounded-br-[90%]">
                  <Image
                    src={content.icon}
                    alt=""
                    className="size-[50px] group-hover:size-[65px] duration-500 "
                  />
                </div>
                <p className="text-xl text-gray-500 font-semibold w-[calc(100%-130px)] pr-2 py-2">
                  {content.text}
                </p>
                <p className="size-4 rounded-full primary-background absolute -top-2 -right-2 scale-0 group-hover:scale-100 duration-500"></p>
              </div>
            ))}
          </div>
              </div>
                
      </div>
    </>
  );
}
