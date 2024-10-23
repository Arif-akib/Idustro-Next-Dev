import Image from "next/image";

import bg2 from "/public/images/background/ite-vector-left.png";
import bg1 from "/public/images/background/vt-2.png";
import logo from "/public/images/logo/logo.png";

export default function HomeContact() {
    return (
        <>
            <div className="lg:h-[80vh] w-full bg-[url('/images/home/bg-title-sc.jpg')] bg-fixed bg-no-repeat bg-cover py-10 px-[5%]">
                <div className="h-full w-full bg-gradient-to-r from-[#fa411801] relative">
                    <Image
                        src={bg1}
                        alt="Nahar Industrial Equipment Background"
                        className="absolute right-0 top-0 bg-animate1 z-0 hidden lg:block"
                    />
                    <Image
                        src={bg2}
                        alt=""
                        className="absolute left-0 bottom-0 size-[350px] bg-animate1 z-0 hidden lg:block"
                    />
                    <div className="size-full flex flex-col gap-10 justify-center items-center relative z-10">
                        <Image
                            src={logo}
                            alt="Nahar Industrial Equipment Logo"
                            className="w-[120px] md:w-[180px] lg:w-[250px]"
                        />
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white xl:w-1/2 text-center">
                            Contact to Expertise in the manufacturing industry
                        </h1>
                        <button className="font-bold text-lg text-white bg-[#203b70] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase">
                            Contact Us
                            <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
