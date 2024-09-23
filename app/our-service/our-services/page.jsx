'use client'

import Hero from '/app/components/Shared/Hero'
import Servicegrid from '/app//components/Service/ServiceGrid'
import ServiceContact from '/app/components/Shared/SharedContact'
import ServiceWork from '/app/components/Service/Work'
import ServiceSkills from '/app/components/Shared/SkillsStacts'
import ServiceClients from "/app/components/Shared/Tetimonoal"


import img from '/public/images/service/service-5-370x295.jpg'

export default function Service() {
    const HeroLable = 'What We Do'
    const bread = 'Home >> Our Service >> Our Services'
    const contents = {
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
          ]
    }
    
    return (
        <>
            <Hero HeroLable={HeroLable} bread={ bread } />
            <Servicegrid />
            <div className="px-[10%] bg-[url('/images/background/bg-bottom-portfolio-content.png')] bg-no-repeat bg-right">
                <ServiceContact />
                <ServiceWork/>
            </div>
            <ServiceSkills contents={ contents} />
            <ServiceClients/>
        </>
    )
}