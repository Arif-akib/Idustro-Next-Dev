import Hero from '/app/components/Shared/Hero'
import TeamGrid from '/app/components/Shared/Partnerteam'

import p1 from "/public/images/team/team-12-400x400.jpg";
import p2 from "/public/images/team/team-13-400x400.jpg";
import p3 from "/public/images/team/team-14-400x400.jpg";
import p4 from "/public/images/team/team-15-400x400.jpg";
import p5 from "/public/images/team/5-400x400.jpg";
import p6 from "/public/images/team/4-400x400.jpg";
import p7 from '/public/images/team/1.jpg'
import p8 from '/public/images/team/2-270x300.jpg'


export default function Team() {
    const HeroLable = 'Nirem Service Team'
    const bread = 'Home >> Our Service >> Nirem Service Team'
    const team = {
        heading: 'Best & Quality Team Members',
        text: 'Our Team',
        sub:'Our team of engineers and technicians are professionally trained by the Firm. In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors.',
        members : [
          {
            img: "/images/team/saiful-islam.jpg",
            heading: "Saiful Islam",
            text: "Chairman",
        },
        {
            img: "/images/team/abdulla-muzahid.jpg",
            heading: "Abdulla Muzahid",
            text: "Director",
        },
        {
            img: "/images/team/faisal-kabir.jpg",
            heading: "Faisal Kabir",
            text: "Managing Director",
        },
        {
            img: "/images/team/abdullah-munir.jpg",
            heading: "Abdullah Al Munir",
            text: "Mechanical Engineer",
        },
        {
            img: "/images/team/kamrul-islam.jpg",
            heading: "Kamrul Islam",
            text: "Electrical Engineer",
        },

        {
            img: "/images/team/shakib-sarker.jpg",
            heading: "Md. Sakib Sarker",
            text: "Civil Engineer",
        },
          ]
    }
    
    return (
        <>
            <Hero HeroLable={HeroLable} bread= {bread} />  
            <TeamGrid team={ team } />
        </>
    )
}