import Image from "next/image";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import bg4 from "/public/images/home/image-banner.jpg";
import bg1 from "/public/images/icon/engineer.png";
import bg5 from "/public/images/icon/image-cile.png";
import bg3 from "/public/images/icon/phone-call.png";
import bg2 from "/public/images/icon/settings.png";

export default function HomeAbout() {
    const [currentNumber, setCurrentNumber] = useState(false);

    const rotateText = " BestBusinessPerformanceAssessment";
    const SplitText = rotateText.split("");

    return (
        <>
            <div className="mt-[100px] px-[5%] xl:px-[10%] flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 relative">
                    <h4 className="text-white text-3xl md:text-4xl lg:text-6xl xl:text-[110px] font-bold font-outline-2 absolute -z-10 top-[-40px] left-[-15px] xl:left-[-65px]">
                        Assessments
                    </h4>
                    <p className="text-[#203b70] text-lg font-bold mb-5">
                        About our Company
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Providing Innovative Solutions to Equip Your Business
                        for Success and Growth.
                    </h2>
                    <p className="h-[2px] w-[60px] bg-[#203b70] mt-2 rounded-md"></p>
                    <p className="mt-10 lg:pr-[10%] text-lg">
                        Our commitment to excellence has allowed us to build
                        strong partnerships with foreign manufacturers and
                        suppliers, enabling us to offer a diverse range of
                        industrial solutions tailored to meet the specific needs
                        of our clients in Bangladesh.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-10 py-8 border-b">
                        <div className="flex items-center gap-3">
                            <Image src={bg1} alt="" />
                            <h3 className="text-2xl font-bold">
                                Strengthening society
                            </h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src={bg2} alt="" />
                            <h3 className="text-2xl font-bold">
                                Driving the economy
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10 mt-8">
                        <button className="font-bold text-lg text-white bg-[#203b70] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase hover:bg-black duration-500 ease-in-out">
                            About Us
                            <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="size-[55px] rounded-full bg-[#e6e6e6] flex items-center justify-center animate-pulse">
                                <Image
                                    src={bg3}
                                    alt=""
                                    className="size-[25px]"
                                />
                            </div>
                            <div>
                                <p className="">Call us for help!</p>
                                <p className="text-lg font-semibold">
                                    +(888) 452 1505
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <ScrollTrigger
                        onEnter={() => setCurrentNumber(true)}
                        onExit={() => setCurrentNumber(false)}
                    >
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-10 mb-10 lg:w-[75%] mx-auto">
                            <div>
                                <h2 className="primary-color text-5xl font-semibold text-center flex items-center">
                                    {currentNumber && (
                                        <CountUp
                                            start={0}
                                            end={3010}
                                            duration={1.5}
                                        ></CountUp>
                                    )}

                                    <span className="text-3xl font-bold">
                                        +
                                    </span>
                                </h2>
                                <p className="text-xl font-bold sm:text-center pt-2">
                                    Satisfied Clients
                                </p>
                            </div>
                            <div>
                                <h2 className="primary-color text-5xl font-semibold text-center flex items-center">
                                    {currentNumber && (
                                        <CountUp
                                            start={0}
                                            end={528}
                                            duration={1.5}
                                        ></CountUp>
                                    )}

                                    <span className="text-3xl font-bold">
                                        +
                                    </span>
                                </h2>
                                <p className="text-xl font-bold sm:text-center pt-2">
                                    Active Projects
                                </p>
                            </div>
                        </div>
                    </ScrollTrigger>

                    <div className="size-[90%] lg:size-[75%] relative mx-auto">
                        <div className="absolute top-[-25px] left-[-25px] z-10">
                            <div className="size-[200px] rounded-full relative spin">
                                {SplitText.map((content, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            transform: `rotate(${
                                                index * 10.7
                                            }deg)`,
                                        }}
                                        className="spinText"
                                    >
                                        {content}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="size-[100%] relative overflow-hidden rounded-3xl">
                            <div className="relative">
                                <Image
                                    src={bg5}
                                    alt=""
                                    className="absolute top-[-50px] left-[-50px] size-[250px] spin"
                                />
                            </div>

                            <Image
                                src={bg4}
                                alt=""
                                className="size-full aspect-square object-cover"
                            />
                            <Image
                                src={bg5}
                                alt=""
                                className="absolute bottom-[-150px] right-[-150px] size-[400px] spin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
