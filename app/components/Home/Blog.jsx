import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";

import BlogCard from "../Shared/BlogCard";

import bg1 from "/public/images/background/img-vector1.png";
import bg3 from "/public/images/background/ite-vector-left.png";
import bg2 from "/public/images/background/vt-5.png";

import b4 from "/public/images/blog/image-22.jpg";
import b6 from "/public/images/blog/service-image-single-2-370x220.jpg";
import b5 from "/public/images/blog/team-15-400x400.jpg";

export default function HomeBlog() {
    const swiperRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        swiperRef.current.slidePrev();
        setCurrentIndex(
            currentIndex == 0 ? contents.length - 1 : currentIndex - 1
        );
    };
    const slideRight = () => {
        swiperRef.current.slideNext();
        setCurrentIndex(
            currentIndex == contents.length - 1 ? 0 : currentIndex + 1
        );
    };
    const navi = (index) => {
        if (currentIndex < index) {
            slideRight();
            setCurrentIndex(index);
        } else if (currentIndex > index) {
            slideLeft();
            setCurrentIndex(index);
        }
    };

    const contents = [
        {
            id:1,
            bg: "/images/blog/visit.jpg",
            type: "industry",
            heading: "Visit to Ghorashal 365mw Combined Power Plant",
            writer: "David parker",
            date: "25th September 2024",
            date2: "4TH Sept 2022",
            text: "Had an incredible visit to Ghorashal 365mw Combined Power Plant, Ashuganj Power Station Company Ltd., and Ashuganj Fertilizer & Chemical Company Limited. A big thank you to the Project Director of Changsha Pump Works Co., Ltd., the Manager of Anhui Bring I&E Trading, and the Managing Partner of NIREM Service Team for joining us.",
        },
        {
            id:2,
            bg: "/images/blog/partnership.jpg",
            type: "industry",
            heading: "We are thrilled to announce a new partnership",
            writer: "David parker",
            date: "25th September 2024",
            date2: "14th Sept 2024",
            text: "We are thrilled to announce a new partnership between M/s. Progoti Engineering Works and NIREM Service Team. In a signing ceremony attended by our esteemed partners, Mr. Md. Saiful Islam Tushar (Proprietor of Progoti Engineering Works) and Mr. Md. Saiful Islam (Managing Partner), Mr. Abdulla Muzahid (Partner), Engr. Kamrul Islam (Tech. Asst. Manager) & the dedicated team from NIREM SERVICE TEAM, we have officially joined forces to enhance our service offerings across various industries, including BPDB, Fertilizers, and more",
        },
        {
            id:3,
            bg: "/images/blog/flood.jpg",
            type: "donation",
            heading: "Visit to Flood-Affected Areas of Fatikchhari",
            writer: "David parker",
            date: "30th Aug 2024",
            date2: "30th Aug 2024",
            text: "On August 30th, the NIREM Service Team, in collaboration with Kalikapur Club, Anhui Bring I&E Co., China, and several engineers, visited the flood-affected areas of Fatikchhari. During this visit, we distributed relief items to the local people as a token of our support. Our primary goal was to bring a little joy to their faces amidst this disaster. We extend our deepest gratitude to all those who worked tirelessly in preparing and distributing the relief. Your efforts were truly remarkable!",
        },
        {
            id:4,
            bg: b4,
            type: "factory",
            heading: "construction Industry Heading Upwrite Using",
            writer: "David parker",
            date: "29 Dec 2021",
            date2: "29TH Dec'2021",
            text: "The Supply from the standard in addition to customized",
        },
        {
            id:5,
            bg: b5,
            type: "Construction",
            heading: "Key headlines for the best pharmaceutical",
            writer: "David parker",
            date: "11 Nov 2021",
            date2: "11TH Nov'2021",
            text: "The Supply from the standard in addition to customized",
        },
        {
            id:6,
            bg: b6,
            type: "factory",
            heading: "Optimise and improve their capabilities",
            writer: "David parker",
            date: "11 nov 2021",
            date2: "11TH Nov'2021",
            text: "The Supply from the standard in addition to customized",
        },
    ];
    return (
        <>
            <div className="pb-[130px] bg-gray-100 relative">
                <Image src={bg1} alt="" className="absolute top-10 left-0" />
                <Image src={bg2} alt="" className="absolute top-10 right-0" />
                <Image
                    src={bg3}
                    alt=""
                    className="absolute bottom-0 left-0 size-[180px]"
                />
                <div className="flex flex-col lg:flex-row justify-between lg:items-end pt-[100px] pb-5 px-[5%] xl:px-[10%] gap-5 z-10 relative">
                    <div className="relative flex flex-col">
                        <p className="text-[#203b70] text-lg font-bold z-20">
                            Latest blog
                        </p>
                        <h4 className="text-transparent text-4xl md:7xl xl:text-[110px] font-bold font-outline-2 z-10 xl:-ml-16">
                            Blog
                        </h4>
                        <h1 className="text-3xl lg:text-5xl font-bold mt-[-20px] z-20">
                            Learn something from blog
                        </h1>
                        <p className="h-[2px] w-[60px] bg-[#203b70] rounded-md mt-5 z-20"></p>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                        <button
                            onClick={slideLeft}
                            className="hover:primary-color"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
                            </svg>
                        </button>
                        <div className="text-sm sm:text-base font-semibold flex gap-2 cursor-pointer">
                            {contents.map((content, index) => (
                                <p
                                    onClick={() => {
                                        navi(index);
                                    }}
                                    key={index}
                                    className={
                                        index == currentIndex
                                            ? "primary-color"
                                            : ""
                                    }
                                >
                                    <span>{index <= 9 ? 0 : ""}</span>
                                    {index + 1}
                                    <span>
                                        {" "}
                                        {index < contents.length - 1 ? "/" : ""}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={slideRight}
                            className="hover:primary-color"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <BlogCard contents={contents} swiperRef={swiperRef} />
                <div className="relative z-20 px-[5%] xl:px-[10%] flex justify-center mt-10">
                    <button className="w-[120px] h-[45px] rounded-md shadow-md primary-background text-white font-bold hover:scale-110 duration-500">
                        <Link href="/blog">View All</Link>
                    </button>
                </div>
            </div>
        </>
    );
}
