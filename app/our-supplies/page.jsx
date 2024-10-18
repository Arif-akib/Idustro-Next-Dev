'use client'

import Hero from '/app/components/Shared/Hero'
import SupplierScope from '../components/Supplier/SupplyScope'
import Partner from '/app/components/Shared/SponsorPartner'
import SharedContact from '/app/components/Shared/SharedContact'
import Stact from '/app/components/Shared/SkillsStacts'
import PartnerGrid from '/app/components/Shared/Partnerteam'


import bg1 from "/public/images/client/client-1_03.png";
import bg2 from "/public/images/client/client-2.png";
import bg3 from "/public/images/client/client-3.png";
import bg4 from "/public/images/client/client-4.png";
import img from '/public/images/service/image-banner.jpg'
import p1 from "/public/images/client/author2.jpg";
import p2 from "/public/images/client/author3.jpg";
import p3 from "/public/images/client/testi-2-77x77.jpg";
import p4 from "/public/images/client/avata-2-77x77.jpg";


export default function Portfolio() {
    const HeroLable = ' Our Suppliers'
    const bread = 'Home >> Our Suppliers'

    const Headline = {
        text: 'Our Trusted Partners',
        sub:'Partners'
    }
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
    
    const contents2 = {
        img:img,
        heading: 'Get a Stacts for our Sipplies.',
        text: 'Our Supply Stacts',
        sub: 'Industo has a rich knowledge of industrial and energy processes, a unique combination of specialist skills and multidisciplinary expertise.',
        skills : [
            {
              name: "Metal",
              amount: "95%",
            },
            {
              name: "Chemical",
              amount: "85%",
            },
            {
              name: "Agricultural",
              amount: "90%",
            },
            {
              name: "Construction",
              amount: "80%",
            },
          ]
    }

    const team = {
        heading: 'Our Honorable Partners',
        text: 'Our Partners',
        sub:'Our team of engineers and technicians are professionally trained by the Firm. In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors.',
        members : [
          {
              id:1,
              img: p1,
              heading: "Amy Dasliva",
              text: "Electrical Engineer",
            },
          {
              id:2,
              img: p2,
              heading: "KP. Jackson",
              text: "Electrical Engineer",
            },
          {
              id:3,
                img: p3,
                heading: "Rob Miller",
                text: "Electrical Engineer",
              },
          {
              id:4,
              img: p4,
              heading: "Rob Miller",
              text: "Electrical Engineer",
            },
          ]
    }
    return (
        <>
            <Hero HeroLable={HeroLable} bread={ bread } />  
            <SupplierScope />
            <Partner Headline={Headline} contents={contents} />
            <div className='pb-20 px-[5%] xl:px-[10%]'>
            <SharedContact />
            </div>
            <Stact contents={contents2} />
            <PartnerGrid team={ team} />
        </>
    )
}