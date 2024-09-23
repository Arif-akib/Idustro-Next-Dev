'use client'

import Hero from '/app/components/Shared/Hero'
import Awards from '/app/components/Shared/Awards'
import SlideShow from '/app/components/Shared/SlideShow'
import SuccessStory from '/app/components/Shared/SuccessStory'

import cer1 from '/public/images/awards/client-1.png'
import cer2 from '/public/images/awards/client-2.png'
import cer3 from '/public/images/awards/client-3.png'
import cer4 from '/public/images/awards/client-4.png'
import cer5 from '/public/images/awards/client-5.png'

import build from "/public/images/home/bg-slide-home-1.jpg";
import indus from "/public/images/home/Energy.jpg";
import arch from "/public/images/home/service-10.jpg";
import cons from "/public/images/home/service-9.jpg";
import inte from "/public/images/home/service-8.jpg";
import eng from "/public/images/home/service-12.jpg";

import img1 from "/public/images/home/service-image-single-1-500x405.jpg"

export default function AchievementsRewards() {
    const HeroLable = 'From Manufacturers'
    const bread = 'Home >> Achievements & Awards >> From Manufacturers'
    const certificate = [
        {
            img:cer1
        },
        {
            img:cer2
        },
        {
            img:cer3
        },
        {
            img:cer4
        },
        {
            img:cer5
        },
    ]

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
        ]
    }

    const story = {
        img:img1,
        name: "Rob's House",
        date: "24th March 2020",
        client: "Marlin De Aron",
        tag: "UI/UX Design",
        value: "125",
        star: 5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos, eveniet placeat voluptate quam veniam tempore a voluptates assumenda quasi minus fugiat maxime? Omnis provident perferendis inventore asperiores placeat ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus quia quaerat consequatur magnam nisi molestiae doloribus, sunt quidem nam?",
        subdes:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quis minus autem suscipit animi error beatae eaque, culpa fugiat provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas officiis quo mollitia veniam accusantium odit eum eos! Quo, reiciendis."
    }
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <Awards certificate={certificate} />
            <SlideShow portfolio={portfolio} />
            <SuccessStory story={ story} />
        </>
    )
}