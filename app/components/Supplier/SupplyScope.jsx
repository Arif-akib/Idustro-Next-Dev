import Image from "next/image";
import { useState } from "react";

import mac1 from "/public/images/service/4455-450x500.jpg";
import pow1 from "/public/images/service/Energy-450x500.jpg";
import wel1 from "/public/images/service/post-5-150x150.jpg";
import met1 from "/public/images/service/service-11-370x295.jpg";
import civ1 from "/public/images/service/service-12-450x500.jpg";
import con1 from "/public/images/service/service-2-450x500.jpg";
import agr1 from "/public/images/service/service-7-150x150.jpg";
import pet1 from "/public/images/service/service-image-single-1-150x150.jpg";

export default function SupplyScope() {
    const contents = [
        {
            bg: pow1,
            title: "Osaka Tractor",
            link: "https://osaka-tractor.jp/",
            subtext:
                "Leading provider of tractor machinery and equipment in Japan.",
        },
        {
            bg: mac1,
            title: "Londa Engineering",
            link: "http://web.londa.cc/",
            subtext:
                "Engineering solutions for a wide range of industrial applications.",
        },
        {
            bg: pet1,
            title: "Anhui Bring",
            link: "http://www.anhuibring.com/index.php?lang=en",
            subtext:
                "Specialists in manufacturing and distributing high-quality machinery.",
        },
        {
            bg: met1,
            title: "ISS Machinery Service, Japan",
            link: "https://www.issmachinery.com/company-profile/",
            subtext:
                "Providing top-notch machinery services for various industries in Japan.",
        },
        {
            bg: civ1,
            title: "MEC Corporation, Japan",
            link: "https://www.mec-co.com/en/",
            subtext:
                "Innovators in electronics and advanced technology systems.",
        },
        {
            bg: con1,
            title: "Borsig, Germany",
            link: "https://www.borsig.de/en/",
            subtext:
                "A leading German company offering cutting-edge industrial machinery.",
        },
        {
            bg: agr1,
            title: "Toyo System Trading, Japan",
            link: "https://toyo-system.co.jp/en/",
            subtext:
                "Experts in system trading for high-performance industrial needs.",
        },
        {
            bg: wel1,
            title: "Sun Machinery, Japan",
            link: "http://www.sunmachinery.co.jp/",
            subtext:
                "Japanese leader in manufacturing and repairing industrial machinery.",
        },
        {
            bg: pow1,
            title: "Bengal Electric, Bangladesh",
            link: "https://bel-bd.net/",
            subtext:
                "Electric equipment specialists, powering Bangladesh's industries.",
        },
        {
            bg: agr1,
            title: "M/S Progoti Engineering, Bangladesh",
            link: "",
            subtext:
                "Trusted engineering service provider for various industrial projects.",
        },
        {
            bg: pow1,
            title: "CSL, Dhaka",
            link: "https://www.csldhaka.com/",
            subtext:
                "Comprehensive logistics and shipping services in Bangladesh.",
        },
        {
            bg: con1,
            title: "Konecranes, Bangladesh",
            link: "https://www.konecranes.com/?locale=en_US",
            subtext:
                "World-class lifting equipment and solutions for industries.",
        },
        {
            bg: pet1,
            title: "Sinno Seal Holding Company Ltd, China",
            link: "https://en.sns-china.com/",
            subtext:
                "Chinese manufacturer specializing in sealing technology and solutions.",
        },
        {
            bg: pow1,
            title: "Dalian Deep Blue",
            link: "https://www.deepbluepump.com/index.php",
            subtext: "Specialists in industrial pump technology and solutions.",
        },
        {
            bg: pet1,
            title: "Nanjing Turbine",
            link: "https://en.ntcchina.com/",
            subtext:
                "Leading Chinese provider of turbine technology and energy solutions.",
        },
        {
            bg: pet1,
            title: "Hangzhou turbine ",
            link: "https://en.ntcchina.com/",
            subtext:
                "Chinese turbine technology and energy solutions provider.",
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
        setCurrentPage(
            currentPage != firstIndex ? currentPage - 1 : currentPage
        );
    };
    const nextPage = () => {
        setCurrentPage(
            currentPage != lastIndex ? currentPage + 1 : currentPage
        );
    };

    return (
        <>
            <div className="py-32 px-[5%] xl:px-[10%] bg-gray-100">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 pb-10">
                    {contents.map((content, index) => (
                        <div
                            key={index}
                            className="h-[300px] md:h-[350px] w-full overflow-hidden relative group rounded-lg drop-shadow-lg"
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
                                    <p className="text-5xl font bold font-outline-4 text-transparent group-hover:scale-animate">
                                        <span
                                            className={
                                                index + 1 < 10 ? "" : "hidden"
                                            }
                                        >
                                            0
                                        </span>
                                        {index + 1}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-xl font-bold line-clamp-2">
                                        {content.title}
                                    </p>
                                    <p className="line-clamp-4">
                                        {content.subtext}
                                    </p>
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
                                : "size-[25px] sm:size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
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
                                    ? "size-[25px] sm:size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
                                    : "size-[25px] sm:size-[40px] rounded-full bg-gray-300 flex justify-center items-center font-bold"
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
                                : "size-[25px] smsize-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold"
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
