"use client";
import HomeAbout from "@/app/components/Home/About";
import HomeBlog from "@/app/components/Home/Blog";
import HomeContact from "@/app/components/Home/Contact";
import Hero from "@/app/components/Home/Hero";
import HomeProduct from "@/app/components/Home/Product";
import HomeService from "@/app/components/Home/Service";
import HomeTeam from "@/app/components/Home/Team";
import HomePortfolio from "@/app/components/Shared/SlideShow";

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import arch from "/public/images/home/service-10.jpg";
import eng from "/public/images/home/service-12.jpg";
import inte from "/public/images/home/service-8.jpg";
import cons from "/public/images/home/service-9.jpg";

export default function Home() {
    const portfolio = {
        heading: "Our Portfolio",
        contents: [
            {
                img: build,
                title: "Project Showcase",
                text: "City of Calgary LRT Station Refurbishment",
                subtext: "ALBERTA",
                url:"/more/project-list"
            },
            {
                img: indus,
                title: "Product Gallery",
                text: "House Building Wind Energy Plant",
                subtext: "ALBERTA",
                url:""
            },
            {
                img: arch,
                title: "Client Testimonials",
                text: "Muchen Railway Station",
                subtext: "ALBERTA",
                url:""
            },
            {
                img: cons,
                title: "Service Highlights",
                text: "Pipe and Pressure Vessel System",
                subtext: "Machanical Engineering",
                url:"/our-service/our-services"
            },
            {
                img: inte,
                title: "Certifications and Partnerships",
                text: "Capturing Manila",
                subtext: "Agriculture Automation",
                url:"/achievements-&-awards/from-manufacturers"
            },
            {
                img: eng,
                title: "Awards and Recognition",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
                url:"/achievements-&-awards/from-end-user"
            },
            {
                img: eng,
                title: "Industry Events and Participation",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
                url:""
            },
            {
                img: eng,
                title: "News and Updates",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
                url:"/blog"
            },
        ],
    };
    return (
        <>
            <Hero />
            <HomeAbout />
            <HomeService />
            <HomePortfolio portfolio={portfolio} />
            <HomeProduct />
            <HomeTeam />
            <HomeContact />
            <HomeBlog />
        </>
    );
}
