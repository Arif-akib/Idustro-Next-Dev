"use client";
import HomeAbout from "@/app/components/Home/About";
import HomeBlog from "@/app/components/Home/Blog";
import HomeContact from "@/app/components/Home/Contact";
import Hero from "@/app/components/Home/Hero";
import HomeProduct from "@/app/components/Home/Product";
import HomeService from "@/app/components/Home/Service";
import HomeTeam from "@/app/components/Home/Team";
import HomePorfolio from "@/app/components/Shared/SlideShow";

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import arch from "/public/images/home/service-10.jpg";
import eng from "/public/images/home/service-12.jpg";
import inte from "/public/images/home/service-8.jpg";
import cons from "/public/images/home/service-9.jpg";

export default function Home() {
    const portfolio = {
        heading: "Our Protfolio",
        contents: [
            {
                img: build,
                title: "Project Showcase",
                text: "City of Calgary LRT Station Refurbishment",
                subtext: "ALBERTA",
            },
            {
                img: indus,
                title: "Product Gallery",
                text: "House Building Wind Energy Plant",
                subtext: "ALBERTA",
            },
            {
                img: arch,
                title: "Client Testimonials",
                text: "Muchen Railway Station",
                subtext: "ALBERTA",
            },
            {
                img: cons,
                title: "Service Highlights",
                text: "Pipe and Pressure Vessel System",
                subtext: "Machanical Engineering",
            },
            {
                img: inte,
                title: "Certifications and Partnerships",
                text: "Capturing Manila",
                subtext: "Agriculture Automation",
            },
            {
                img: eng,
                title: "Awards and Recognition",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
            },
            {
                img: eng,
                title: "Industry Events and Participation",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
            },
            {
                img: eng,
                title: "News and Updates",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
            },
        ],
    };
    return (
        <>
            <Hero />
            <HomeAbout />
            <HomeService />
            <HomePorfolio portfolio={portfolio} />
            <HomeProduct />
            <HomeTeam />
            <HomeContact />
            <HomeBlog />
        </>
    );
}
