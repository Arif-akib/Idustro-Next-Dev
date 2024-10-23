import Image from "next/image";

import logo from "/public/images/logo/logo.png";

export default function Footer() {
    return (
        <>
            <div className="px-[10%] bg-black">
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-b-zinc-600">
                    <div className="space-y-8">
                        <Image
                            src={logo}
                            alt=""
                            className="w-[50%] md:w-full mx-auto"
                        />
                        <p className="text-gray-400 font-semibold">
                            Industo is a creator of zero emission energy
                            solutions. Our versatile services help bring success
                            to companies in the industry.
                        </p>
                        <button className="primary-background uppercase px-5 py-1.5 font-semibold text-white">
                            About Us
                        </button>
                    </div>
                    <div className="space-y-8 mt-8">
                        <div>
                            <p className="text-2xl font-bold text-white pb-2">
                                Newsletter
                            </p>
                            <p className="primary-background h-1 w-[50px]"></p>
                        </div>
                        <p className="text-gray-400 font-semibold">
                            Subscribe our newsletter to get our latest update &
                            news
                        </p>
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Your email address"
                                className="h-[40px] w-[calc(100%-50px)] bg-zinc-700 text-gray-400 px-3 focus:outline-none"
                            />
                            <button className="primary-background text-white h-[40px] w-[50px] flex justify-center items-center group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="group-hover:animate-ping"
                                >
                                    <path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex gap-8 text-lg text-gray-400">
                            <i className="fa-brands fa-facebook hover:text-[#203b70]"></i>
                            <i className="fa-brands fa-twitter hover:text-[#203b70]"></i>
                            <i className="fa-brands fa-dribbble hover:text-[#203b70]"></i>
                            <i className="fa-brands fa-behance hover:text-[#203b70]"></i>
                        </div>
                    </div>
                    <div className="space-y-8 mt-8">
                        <div>
                            <p className="text-2xl font-bold text-white pb-2">
                                Official info
                            </p>
                            <p className="primary-background h-1 w-[50px]"></p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-5 font-semibold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="text-gray-400"
                                >
                                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                </svg>
                                <p className="text-gray-400 hover:text-[#203b70]">
                                    194 Central Bashabo, Sabujbag, <br />{" "}
                                    Dhaka-1214, Bangladesh
                                </p>
                            </div>
                            <div className="flex items-center gap-5 font-semibold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="text-gray-400"
                                >
                                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                                </svg>
                                <p className="text-gray-400 hover:text-[#203b70]">
                                    +880 1332547560
                                </p>
                            </div>
                            <div className="text-gray-400 space-y-3 font-semibold">
                                <span className="pb-1 border-b font-bold text-lg text-white">
                                    We&apos;are Open
                                </span>
                                <p>Sat - Thu 9 AM - 5 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 mt-8">
                        <div>
                            <p className="text-2xl font-bold text-white pb-2">
                                Gallery
                            </p>
                            <p className="primary-background h-1 w-[50px]"></p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-1.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-2.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-3.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-4.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-1.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/images/home/footer/footer-2.jpg"}
                                    className="h-full w-full object-cover"
                                    alt="Nahar Industrial Equipment Company Ltd"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-white text-center font-[400] py-5">
                    © 2024 NEICO – All rights reserved.
                </p>
            </div>
        </>
    );
}
