"use client";

import AboutAchivement from "/app/components/About/Achivements";
import AboutApproch from "/app/components/About/Approch";
import AboutCompany from "/app/components/About/Company";
import Missionvision from "/app/components/About/MissionVision";
import AboutProfile from "/app/components/About/Profile";
import Hero from "/app/components/Shared/Hero";
import AboutClient from "/app/components/Shared/SponsorPartner";

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
            <AboutProfile />
            <Missionvision />
            <AboutAchivement />
            <AboutCompany />
            <AboutApproch />
            <div className="bg-[url('/app/assets/images/background/bg-testi-2.png')] bg-no-repeat bg-cover">
                <AboutClient Headline={Headline} contents={contents} />
            </div>
        </>
    );
}
