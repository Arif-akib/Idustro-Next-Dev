'use client'
import Hero from "/app/components/Home/Hero"
import HomeAbout from "/app/components/Home/About"
import HomeService from "/app/components/Home/Service"
import HomePorfolio from '/app/components/Shared/SlideShow'
import HomeProduct from '/app/components/Home/Product'
import HomeTeam from "/app/components/Home/Team"
import HomeContact from "/app/components/Home/Contact"
import HomeBlog from "/app/components/Home/Blog"

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import arch from "/public/images/home/service-10.jpg";
import cons from "/public/images/home/service-9.jpg";
import inte from "/public/images/home/service-8.jpg";
import eng from "/public/images/home/service-12.jpg";

export default function Home() {

    const portfolio = {
        heading: "Our Protfolio",
        contents: [
            {
                img: build,
                title: "Building",
                text: "City of Calgary LRT Station Refurbishment",
                subtext: "ALBERTA",
            },
            {
                img: indus,
                title: "Industrial",
                text: "House Building Wind Energy Plant",
                subtext: "ALBERTA",
            },
            {
                img: arch,
                title: "Architecture",
                text: "Muchen Railway Station",
                subtext: "ALBERTA",
            },
            {
                img: cons,
                title: "Construction",
                text: "Pipe and Pressure Vessel System",
                subtext: "Machanical Engineering",
            },
            {
                img: inte,
                title: "Interior Design",
                text: "Capturing Manila",
                subtext: "Agriculture Automation",
            },
            {
                img: eng,
                title: "Engineer",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
            },
        ]
    } 
    return (
        <>
            <Hero />
            <HomeAbout />
            <HomeService />
            <HomePorfolio portfolio={ portfolio }/>
            <HomeProduct />
            <HomeTeam />
            <HomeContact />
            <HomeBlog/>
        </>
    )
}
