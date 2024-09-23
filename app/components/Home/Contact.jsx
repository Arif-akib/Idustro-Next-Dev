import Image from "next/image";

import logo from "/public/images/logo/logo-light.png"
import bg1 from "/public/images/background/vt-2.png"

export default function HomeContact() {
  return (
    <>
      <div className="h-[80vh] w-full bg-[url('/images/home/bg-title-sc.jpg')] bg-fixed bg-no-repeat bg-cover">
        <div className="h-full w-full bg-gradient-to-r from-[#fa411801] relative">
          <Image
            src={bg1}
            alt=""
            className="absolute right-0 top-0 bg-animate1"
          />
          <Image
            src={bg1}
            alt=""
            className="absolute left-0 bottom-0 size-[350px] bg-animate1"
          />
          <div className="size-full flex flex-col gap-10 justify-center items-center">
            <Image src={logo} alt="" className="h-[50px] w-auto"/>
            <h1 className="text-6xl font-bold text-white w-1/2 text-center">Contact to Expertise in the manufacturing industry</h1>
            <button className="font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase">
              Contact Us
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
