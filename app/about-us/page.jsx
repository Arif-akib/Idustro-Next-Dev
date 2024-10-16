"use client";

import Membership from "/app/components/About/Membership";
import BusinessScope from "/app/components/About/BusinessScope";
import Missionvision from "/app/components/About/MissionVision";
import AboutProfile from "/app/components/About/Profile";
import Hero from "/app/components/Shared/Hero";
import Overview from "/app/components/About/Overview"
import ProductRange from "/app/components/About/ProductRange"
import CustomerNeed from "/app/components/About/CustomerNeeds"
import AboutTeam from "/app/components/About/Team"

import bg1 from "/public/images/client/client-1_03.png";
import bg2 from "/public/images/client/client-2.png";
import bg3 from "/public/images/client/client-3.png";
import bg4 from "/public/images/client/client-4.png";

export default function About() {
    const HeroLable = "About Us";
    const bread = "Home >> About Us";
    const Headline = {
        text: "Our Trusted sponsor",
        sub: "Clients",
    };
    const contents = [
        {
            img: bg1,
        },
        {
            img: bg2,
        },
        {
            img: bg3,
        },
        {
            img: bg4,
        },
    ];
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <Overview/>
            <ProductRange />
            <CustomerNeed />
            <AboutProfile />
            <AboutTeam/>
            <Missionvision />
            <Membership />
            <BusinessScope />
        </>
    );
}
