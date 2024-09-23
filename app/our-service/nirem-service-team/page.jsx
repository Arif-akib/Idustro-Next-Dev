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
              img: p1,
              heading: "Amy Dasliva",
              text: "Electrical Engineer",
            },
            {
              img: p2,
              heading: "KP. Jackson",
              text: "Electrical Engineer",
            },
        
            {
              img: p4,
              heading: "Rob Miller",
              text: "Electrical Engineer",
            },
            {
              img: p6,
              heading: "Alfread Bonaport",
              text: "Electrical Engineer",
            },
            {
              img: p5,
              heading: "Ashisha Sudra",
              text: "Marketing",
            },
            {
              img: p3,
              heading: "R. Atterberry",
              text: "Electrical Engineer",
            },
            {
                img: p7,
                heading: "R. Faulkner",
                text: "Industrial Manager",
              },
              {
                img: p8,
                heading: "Rudolph Spitler",
                text: "Engineer",
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