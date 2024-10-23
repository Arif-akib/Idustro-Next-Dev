import Awards from "/app/components/Shared/Awards";
import Hero from "/app/components/Shared/Hero";
import SlideShow from "/app/components/Shared/SlideShow";
import SuccessStory from "/app/components/Shared/SuccessStory";

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import arch from "/public/images/home/service-10.jpg";
import eng from "/public/images/home/service-12.jpg";
import inte from "/public/images/home/service-8.jpg";
import cons from "/public/images/home/service-9.jpg";

import img1 from "/public/images/home/service-image-single-1-500x405.jpg";

export default function AchievementsRewards() {
    const HeroLable = "From Manufacturers";
    const bread = "Home >> Achievements & Awards >> From Manufacturers";

    const certificates = [
        {
            id: 1,
            title: "End User Certificate",
            image: "/docs/certificates/cert-1.jpg",
        },
        {
            id: 2,
            title: "Invoice & Work completion Certificate",
            image: "/docs/certificates/cert-2.jpg",
        },
        {
            id: 3,
            title: "JFCL Letter - INST - End User Certificate",
            image: "/docs/certificates/cert-3.jpg",
        },
        {
            id: 4,
            title: "JFCL Letter - INST - End User Certificate",
            image: "/docs/certificates/cert-4.jpg",
        },
    ];

    const portfolio = {
        heading: "Gallery",
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
