"use client";

import Hero from "/app/components/Shared/Hero";
import CSRStory from "/app/components/CSR/Story";
import OngoingProject from "/app/components/CSR/OngoingProject"
import FocusArea from "/app/components/CSR/FocusArea"


export default function CSR() {
  const HeroLable = "Corporate Social Responsibility";
  const bread = "Home >> More >> Corporate Social Responsibility";


  return (
    <>
      <Hero HeroLable={HeroLable} bread={bread} />
      <div className="px-[5%] xl:px-[10%] pt-20 pb-10">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-center">
          CSR Overview
        </h1>
        <p className="text-gray-500">
          At Naahar Industrial Equipments Co. Ltd. (NIECO), we believe in giving
          back to society and fostering sustainable growth through our actions.
          Our commitment to Corporate Social Responsibility (CSR) reflects our
          dedication to creating a positive impact on the communities we operate
          in, ensuring environmental sustainability, and promoting ethical
          business practices.
        </p>
      </div>

      <div className="px-[5%] xl:px-[10%] pt-10 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-center">
          CSR Commitment
        </h1>
        <p className="text-gray-500">
          We are committed to upholding the highest standards of social
          responsibility in all aspects of our business. Through our CSR
          initiatives, we strive to contribute meaningfully to societal
          well-being, reduce our environmental footprint, and promote ethical
          governance. As we continue to grow as a company, our focus remains on
          making a difference in the world around us.
        </p>
          </div>
          <FocusArea />
          <OngoingProject/>

      <div className="px-[5%] xl:px-[10%] pb-20">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-center">
          Partnerships and Collaborations
        </h1>
        <p className="text-gray-500">
          We believe in working together to create lasting change. NIECO has
          established partnerships with local governments, NGOs, and
          international organizations to amplify the reach of our CSR efforts.
          Through collaboration, we are able to extend our impact across various
          sectors, including education, healthcare, and environmental
          protection.
        </p>
      </div>
          <CSRStory />
          
          <div className="px-[5%] xl:px-[10%] pt-20 pb-10">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-center">
        Future CSR Plans
        </h1>
        <p className="text-gray-500">
        Looking ahead, NIECO aims to expand its CSR efforts into new areas such as clean energy initiatives and women’s empowerment programs. We are continuously exploring ways to deepen our commitment to sustainability and social welfare, ensuring that our business growth aligns with positive global change.
        </p>
      </div>

      <div className="px-[5%] xl:px-[10%] pt-10 pb-20">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-center">
        CSR Policies and Certifications
        </h1>
        <p className="text-gray-500">
        NIECO adheres to internationally recognized CSR standards and is fully compliant with national and global guidelines on ethical business practices. Our CSR policies are designed to uphold transparency, accountability, and sustainability in all that we do.
        </p>
          </div>
    </>
  );
}
