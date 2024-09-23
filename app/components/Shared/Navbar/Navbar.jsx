
import Link from 'next/link'
import NavAdd from "./NavAdd";
import NavBarContact from "./NavbarContact";

export default function Navbar() {
  return (
    <>
      <div className="relative top-0 z-50">
        <div className="relative">
          <NavAdd />
          <NavBarContact />
          <div className="absolute w-[70%] bottom-[-50px] right-0">
            <div className="bg-[#FA4318] h-[85px] text-white flex items-center justify-between w-full pr-[15%] relative">
              <ul className="flex text-[17px] gap-5 font-semibold items-center justify-center h-full">
                <Link href="/"><li>Home</li></Link>

                <Link href="/about-us"><li>About Us</li></Link>

                <Link href="/our-supplies"><li>Our Suppiles</li></Link>

                <ul className='group relative h-full flex items-center'>
                    <p>Our Service</p>
                    <ul className='absolute top-[65px] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2'>
                      <Link href="/our-service/our-services"><li className='hover:primary-color'>Our Service</li></Link>
                      <Link href="/our-service/nirem-service-team"><li className='hover:primary-color'>Nirem Service Team</li></Link>
                    </ul>
                  </ul>

                  <ul className='group relative h-full flex items-center'>
                    <p>Achievements & Awards</p>
                    <ul className='absolute top-[65px] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2'>
                      <Link href="/achievements-&-awards/from-manufacturers"><li className='hover:primary-color'>From Manufacturers</li></Link>
                      <Link href="/achievements-&-awards/from-end-user"><li className='hover:primary-color'>From End user</li></Link>
                    </ul>
                  </ul>

                <Link href="/contact-us"><li>Contact Us</li></Link>
                
                <ul className='group relative h-full flex items-center'>
                    <p>More</p>
                  <ul className='absolute top-[65px] right-[-150%] hidden group-hover:flex bg-white px-5 py-3 text-black w-[250px] rounded-md drop-shadow-sm flex-col gap-2'>
                    <Link href="/more/corporate-social-responsibility"><li className='hover:primary-color'>Corporate Social Reponsibility</li></Link>
                    <Link href="/more/submit-a-complaint"><li className='hover:primary-color'>Submit Complaint</li></Link>
                    <Link href="/more/career"><li className='hover:primary-color'>Career</li></Link>
                    </ul>
                  </ul>
              </ul>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
              <div className="h-0 w-0 border-[42.5px] border-transparent border-r-[#FA4318] border-b-[#FA4318] absolute translate-x-[-100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
