import Hero from '/app/components/Shared/Hero'
import ProfileAbout from '../../components/Profile/About'
import ProfileStory from '/app/components/Profile/Story'
import ProfileGallery from '/app/components/Profile/Gallary'

import img from '/public/images/service/service-5-370x295.jpg'

import b1 from "/public/images/blog/img-33.jpg";
import b2 from "/public/images/blog/image-23.jpg";
import b3 from "/public/images/blog/chemical_22.jpg";
import b4 from "/public/images/blog/image-22.jpg";
import b5 from "/public/images/blog/team-15-400x400.jpg";
import b6 from "/public/images/blog/service-image-single-2-370x220.jpg";


export default function Profile() {
    const HeroLable = ' Our Suppliers'
    const bread = 'Home >> Our Suppliers'
    const contents =
    {
        img:img,
        heading: 'Get a solution for your Industries needs.',
        text: 'Our Industry Skill',
        sub: 'Industo has a rich knowledge of industrial and energy processes, a unique combination of specialist skills and multidisciplinary expertise.',
        skills : [
            {
              name: "Production",
              amount: "90%",
            },
            {
              name: "Industrial",
              amount: "80%",
            },
            {
              name: "Factory",
              amount: "95%",
            },
            {
              name: "Performance",
              amount: "85%",
            },
        ],
        story : [
            {
                id:1,
                bg: b1,
              type: "industry",
              heading: "Utilization of Titanimun In Industries",
              writer: "David parker",
              date: "04 Jan 2022",
              date2: "4TH Jan'2022",
              text: "The Supply from the standard in addition to customized",
            },
            {
                id:2,
              bg: b2,
              type: "industry",
              heading: "The Role Of The CNC Machine Operator",
              writer: "David parker",
              date: "29 Dec 2021",
              date2: "29TH Dec'2021",
              text: "The Supply from the standard in addition to customized",
            },
            {
                id:3,
              bg: b3,
              type: "factory",
              heading: "The various Industries That Take advantage",
              writer: "David parker",
              date: "29 Dec 2021",
              date2: "29TH Dec'2021",
              text: "The Supply from the standard in addition to customized",
            },
            {
                id:4,
              bg: b4,
              type: "factory",
              heading: "construction Industry Heading Upwrite Using",
              writer: "David parker",
              date: "29 Dec 2021",
              date2: "29TH Dec'2021",
              text: "The Supply from the standard in addition to customized",
            },
            {
                id:5,
              bg: b5,
              type: "Construction",
              heading: "Key headlines for the best pharmaceutical",
              writer: "David parker",
              date: "11 Nov 2021",
              date2: "11TH Nov'2021",
              text: "The Supply from the standard in addition to customized",
            },
            {
                id:6,
              bg: b6,
              type: "factory",
              heading: "Optimise and improve their capabilities",
              writer: "David parker",
              date: "11 nov 2021",
              date2: "11TH Nov'2021",
              text: "The Supply from the standard in addition to customized",
            },
          ]
    }
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <ProfileAbout contents={contents} />
            <ProfileStory contents={contents.story} />
            <ProfileGallery contents={contents.story}/>
        </>
    )
}