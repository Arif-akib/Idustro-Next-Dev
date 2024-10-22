import Link from "next/link"

export default function DropMenu({dropDown}) {
    return (
        <>
            <div className={dropDown == false ? "bg-gray-200 w-full pt-[85px] z-40 translate-y-[-100%] absolute duration-300" : "bg-gray-200 w-full pt-[85px] z-40 translate-y-0 absolute duration-300"}>
                            <ul className="flex text-[17px] flex-col gap-3 font-semibold items-center justify-center h-full p-5 ">
                                <Link href="/">
                                    <li>Home</li>
                                </Link>

                                <Link href="/about-us">
                                    <li>About Us</li>
                                </Link>

                                <Link href="/our-supplies">
                                    <li>Our Suppiles</li>
                    </Link>
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
                              

                                <Link href="/contact-us">
                                    <li>Contact Us</li>
                    </Link>
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
                        </div>
        </>
    )
}