import Image from "next/image";

import starfull from "/public/images/icon/starfull.png"
import starhalf from "/public/images/icon/starhalf.png"
import starno from "/public/images/icon/star.png"

export default function SheredStar({ content }) {
  
    return (
      <>
         <div className="flex ">
                            {[...Array(Math.floor(content.star))].map((star, index) => (
                              <div key={index}>
                                <Image src={starfull} alt="" className="size-[15px]" />
                              </div>
                            ))}
                            <p>{ 5-content.star ==0 ? '' : <Image src={starhalf} alt="" className="size-[15px]"/> }</p>
                            {[...Array(5-Math.ceil(content.star))].map((star, index) => (
                              <div key={index}>
                              <Image src={starno} alt="" className="size-[15px]"/>
                              </div>
                            ))}
                          </div>
      </>
    );
  }
  