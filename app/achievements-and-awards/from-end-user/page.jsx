"use client";

import Awards from "/app/components/Shared/Awards";
import Hero from "/app/components/Shared/Hero";
import SlideShow from "/app/components/Shared/SlideShow";
import SuccessStory from "/app/components/Shared/SuccessStory";

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import eng from "/public/images/home/service-12.jpg";
import inte from "/public/images/home/service-8.jpg";
import cons from "/public/images/home/service-9.jpg";

import img1 from "/public/images/home/Energy-500x405.jpg";

export default function AchievementsRewards() {
    const HeroLable = "From End User";
    const bread = "Home >> Achievements & Awards >> From End User";
    const certificates = [
        {
            id: 1,
            title: "End User Certificate",
            document: "/docs/end-user/End-User-Certificate.pdf",
        },
        {
            id: 2,
            title: "Invoice & Work completion Certificate",
            document:
                "/docs/end-user/Invoice & Work completion Certificate.pdf",
        },
        {
            id: 3,
            title: "JFCL Letter - INST - End User Certificate",
            document:
                "/docs/end-user/JFCL LETTER - INST - END USER CERTIFICATE.pdf",
        },
    ];

    const portfolio = {
        heading: "Our Gallery",
        contents: [
            {
                img: build,
                title: "Project Showcase",
                text: "City of Calgary LRT Station Refurbishment",
                subtext: "ALBERTA",
                url: "/more/project-list",
            },
            {
                img: indus,
                title: "Product Gallery",
                text: "House Building Wind Energy Plant",
                subtext: "ALBERTA",
                url: "",
            },

            {
                img: cons,
                title: "Service Highlights",
                text: "Pipe and Pressure Vessel System",
                subtext: "Machanical Engineering",
                url: "/our-service/our-services",
            },
            {
                img: inte,
                title: "Certifications and Partnerships",
                text: "Capturing Manila",
                subtext: "Agriculture Automation",
                url: "/achievements-and-awards/from-manufacturers",
            },

            {
                img: eng,
                title: "Industry Events and Participation",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
                url: "",
            },
            {
                img: eng,
                title: "News and Updates",
                text: "Polley Theater",
                subtext: "Agriculture Automation",
                url: "/blog",
            },
        ],
    };

    const story = {
        img: img1,
        name: "Rob's House",
        date: "24th March 2020",
        client: "Marlin De Aron",
        tag: "UI/UX Design",
        value: "125",
        star: 5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos, eveniet placeat voluptate quam veniam tempore a voluptates assumenda quasi minus fugiat maxime? Omnis provident perferendis inventore asperiores placeat ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus quia quaerat consequatur magnam nisi molestiae doloribus, sunt quidem nam?",
        subdes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quis minus autem suscipit animi error beatae eaque, culpa fugiat provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas officiis quo mollitia veniam accusantium odit eum eos! Quo, reiciendis.",
    };
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <Awards certificates={certificates} />
            <SlideShow portfolio={portfolio} />
            <SuccessStory story={story} />
        </>
    );
}
