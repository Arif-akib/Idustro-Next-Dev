'use client'

import Link from "next/link";
import { useEffect , useState } from "react";

import NavAdd from "./NavAdd";
import NavBarContact from "./NavbarContact";
import DropMenu from "/app/components/Shared/Navbar/DropMenu"

export default function Navbar() {
    
    const [scrolled, setScrolled] = useState(false);
    const [dropDown , setDropDown ] = useState(false)

  // Handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    };
    
    const dropMenu = () => {
        if (dropDown == false) {
            setDropDown(true)
        }
        if (dropDown == true) {
            setDropDown(false)
        } 
    }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return (
        <>
            <div className="sticky w-full top-0 z-50">
                <div className="relative z-50">
                    <NavAdd scrolled={ scrolled} />
                    <NavBarContact scrolled={ scrolled}/>
                    <div className={scrolled == false ? "absolute w-full xl:w-[75%] xl:bottom-[-50px] right-0 bg-white px-[5%] xl:px-0 py-2 lg:py-0 flex justify-between items-center" :"absolute w-full right-0 bg-white px-[5%] xl:px-[10%] py-2 flex justify-between items-center shadow-md"}>
                        <img
                            src="/images/logo/logo.png"
                            alt=""
                            className={scrolled == false ? "h-[65px] xl:hidden" : "h-[65px]"}
                        />
                        <div className={scrolled == false ? "bg-white xl:bg-[#203b70] h-[85px] xl:text-white hidden lg:flex items-center justify-between gap-5 xl:w-full xl:pr-[15%] relative" : "bg-white h-[85px] hidden lg:flex items-center justify-between gap-5 relative"}>
                            <ul className="flex text-[17px] gap-10 font-semibold items-center justify-center h-full">
                                <Link href="/">
                                    <li>Home</li>
                                </Link>

                                <Link href="/about-us">
                                    <li>About Us</li>
                                </Link>

                                <Link href="/our-supplies">
                                    <li>Our Suppiles</li>
                                </Link>

                                <ul className="group relative h-full flex items-center">
                                    <p>Our Service</p>
                                    <ul className="absolute top-[65px] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2">
                                        <Link href="/our-service/our-services">
                                            <li className="hover:primary-color">
                                                Our Service
                                            </li>
                                        </Link>
                                        <Link href="/our-service/nirem-service-team">
                                            <li className="hover:primary-color">
                                                Nirem Service Team
                                            </li>
                                        </Link>
                                    </ul>
                                </ul>

                                <ul className="group relative h-full flex items-center">
                                    <p>Achievements & Awards</p>
                                    <ul className="absolute top-[65px] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2">
                                        <Link href="/achievements-&-awards/from-manufacturers">
                                            <li className="hover:primary-color">
                                                From Manufacturers
                                            </li>
                                        </Link>
                                        <Link href="/achievements-&-awards/from-end-user">
                                            <li className="hover:primary-color">
                                                From End user
                                            </li>
                                        </Link>
                                    </ul>
                                </ul>

                                <Link href="/contact-us">
                                    <li>Contact Us</li>
                                </Link>

                                <ul className="group relative h-full flex items-center">
                                    <p>More</p>
                                    <ul className="absolute top-[65px] right-[-150%] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2">
                                        <Link href="/more/project-list">
                                            <li className="hover:primary-color">
                                                Project List
                                            </li>
                                        </Link>
                                        <Link href="/more/corporate-social-responsibility">
                                            <li className="hover:primary-color">
                                                Corporate Social Responsibility
                                            </li>
                                        </Link>
                                        <Link href="/more/submit-a-complaint">
                                            <li className="hover:primary-color">
                                                Submit Complaint
                                            </li>
                                        </Link>
                                        <Link href="/more/career">
                                            <li className="hover:primary-color">
                                                Career
                                            </li>
                                        </Link>
                                    </ul>
                                </ul>
                            </ul>
                            <div className={scrolled == false ? "hidden xl:block h-0 w-0 border-[42.5px] border-transparent border-r-[#203b70] border-b-[#203b70] absolute translate-x-[-100%]" : "hidden"}></div>
                        </div>
                        <span className="lg:hidden" onClick={dropMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="36"
                                height="36"
                                fill="rgba(17,28,127,1)"
                            >
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <DropMenu dropDown={ dropDown} />
            </div>
        </>
    );
}
