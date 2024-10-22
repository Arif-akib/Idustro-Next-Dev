import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bg1 from "/public/images/background/vt-2.png";
import bg2 from "/public/images/background/ite-vector-left.png";

import gas from "/public/images/icon/dispenser.png";
import gas2 from "/public/images/icon/dispenser1.png";
import factory from "/public/images/icon/factory1.png";
import factory2 from "/public/images/icon/factory2.png";
import flask from "/public/images/icon/flask.png";
import flask2 from "/public/images/icon/flask1.png";

export default function BannerGrid() {
    const swiperRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
  const contents = [
    {
      icon: factory2,
      icon2: factory,
      heading: "Fertilizer Industry",
      sub: "We specialize in providing comprehensive supply and service solutions to the BCIC’s fertilizer industry, ensuring the highest standards of efficiency, reliability, and operational excellence",
    },
    {
      icon: gas,
      icon2: gas2,
      heading: "Power plant Industry",
      sub: "We specialize in providing comprehensive supply & Service solutions to the BPDB, Bangladesh Power Development,we have played a pivotal role in supporting the country's power generation industry by providing high-quality equipment, technical expertise, and dedicated service solutions.",
    },
    {
      icon: flask,
      icon2: flask2,
      heading: "Gas Field Industry",
      sub: "Naahar Industrial Equipments Co. Ltd. is a key supplier of essential equipment and supplies for the gas field industry in Bangladesh, focusing on ensuring the efficient extraction, processing, and transportation of natural gas",
    },
    ];
    
  return (
    <>
      <div className="w-full text-white px-[5%] xl:px-[10%] gap-10 mt-16">
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
              1140: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            1480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // 1480: {
            //   slidesPerView: 3,
            //   spaceBetween: 20,
            // },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="h-[550px]"
        >
          {contents.map((content, index) => (
            <>
              <SwiperSlide key={index} className="mt-5 relative">
                <div key={index} className="relative group">
                  <div className="bg-black p-10 rounded-md relative">
                    <div className="group-hover:opacity-0 duration-500">
                      <Image src={content.icon} alt="" className="mb-8" />
                      <h1 className="text-2xl font-bold">{content.heading}</h1>
                      <p className="h-[1px] w-[60px] bg-[#203b70] mt-2 rounded-md"></p>
                      <button className="h-[50px] w-[150px] rounded bg-[#203b70] text-lg font-semibold flex gap-2 items-center justify-center mt-8 mb-16">
                        Read More{" "}
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </button>
                      <Image
                        src={bg1}
                        alt=""
                        className="absolute top-[5%] right-0 size-[80px]"
                      />
                    </div>
                  </div>
                  <div className="absolute z-10 top-0 w-full rounded-md overflow-hidden h-0 group-hover:h-[500px] ease-in-out duration-700 bg-center bg-[url('/images/home/homehero1.jpg')]">
                    <div className="p-10 rounded-md w-full h-[550px] backdrop-blur-md relative translate-y-[-100%] group-hover:translate-y-0 duration-500 ease-in-out">
                      <Image
                        src={content.icon2}
                        alt=""
                        className="mb-8 opacity-0 group-hover:opacity-100 delay-100"
                      />
                      <h1 className="text-2xl font-bold">{content.heading}</h1>
                      <p className="h-[1px] w-[60px] bg-[#203b70] mt-2 rounded-md"></p>
                      <p className="mt-8">{content.sub}</p>
                      <button className="h-[50px] w-[150px] rounded bg-[#203b70] text-lg font-semibold flex gap-2 items-center justify-center mt-8 mb-16">
                        Read More{" "}
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </button>
                      <Image
                        src={bg2}
                        alt=""
                        className="absolute top-[5%] right-0 size-[120px]"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
}
