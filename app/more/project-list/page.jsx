import Image from "next/image";
import Link from "next/link";

import Hero from "@/app/components/Shared/Hero";

import machanical2 from "/public/images/home/4455-500x405.jpg";
import power2 from "/public/images/home/Energy-500x405.jpg";
import metal2 from "/public/images/home/service-11-500x405.jpg";
import petrol2 from "/public/images/home/service-image-single-1-500x405.jpg";
import machanical1 from "/public/images/icon/engineer1.png";
import metal1 from "/public/images/icon/excavator.png";
import petrol1 from "/public/images/icon/factory2.png";
import power1 from "/public/images/icon/gear.png";

export default function ProjectList() {
  const HeroLable = "Project List";
  const bread = "Home >> More >> Project List";

  const completedProject = [
      {
        id:1,
      icon: power1,
      bg: power2,
      heading: "Water Pump, Filtered Water Pump and Jockey Pump",
      subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Portable Water Pump, Filtered Water Pump and Jockey Pump",
    },
      {
        id:2,
      icon: machanical1,
      bg: machanical2,
      heading: "Gate Valve Manual Operated Gear",
      subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Gate Valve Manual Operated Gear, Chittagong Urea Fertilizer Company Limited (CUFL).",
    },
      {
        id:3,
      icon: petrol1,
      bg: petrol2,
      heading: "Valve Body & Actuator",
      subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Supply of Valve Body & Actuator, Chittagong Urea Fertilizer Company Limited (CUFL).",
    },
      {
        id:4,
      icon: petrol1,
      bg: petrol2,
      heading: "Ammonia Synthesis Converter Catalyst Unloading, Loading, Inspection, Basket maintenance & Reduction of Ammonia converter",
      subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
      sub: "Ammonia Synthesis Converter Catalyst Unloading, Loading, Inspection, Basket maintenance & Reduction of Ammonia converter, Chittagong Urea Fertilizer Company Limited (CUFL).",
    },
      {
        id:5,
      icon: metal1,
      bg: metal2,
      heading: "Procurement of Rotor (Shaft with Impeller) and Bearing Housing/Bearing Box for De-Dust Fan",
      subtext: "DAP Fertilizer Company Limited, (DAPFCL)",
      sub: "Procurement of Rotor (Shaft with Impeller) and Bearing Housing/Bearing Box for De-Dust Fan, DAP Fertilizer Company Limited, (DAPFCL)",
      },
      {
        id:6,
        icon: machanical1,
        bg: machanical2,
        heading: "02 Sets Support Roller with Shaft, Assembly and 20 (Twenty) Pieces Lubrication Graphite for Drier (M-230)",
        subtext: "DAP Fertilizer Company Limited, (DAPFCL)",
        sub: "Supply of 02 Sets Support Roller with Shaft, Assembly and 20 (Twenty) Pieces Lubrication Graphite for Drier (M-230), DAP Fertilizer Company Limited, (DAPFCL)",
      },
      {
        id:7,
        icon: petrol1,
        bg: petrol2,
        heading: "Spare Parts for Waste-water Pump (P706A/B)",
        subtext: "Shahjalal Fertilizer Company Limited, (SFCL)",
        sub: "Supply of Spare Parts for Waste-water Pump (P706A/B), Shahjalal Fertilizer Company Limited, (SFCL)",
      },
      {
        id:8,
        icon: petrol1,
        bg: petrol2,
        heading: "Installing Comissioning & Testing 02 Vaccum Circuit Breaker (VCB)",
        subtext: "Shahjalal Fertilizer Company Limited, (SFCL)",
        sub: "Supply Installing Comissioning & Testing 02 Vaccum Circuit Breaker (VCB), Shahjalal Fertilizer Company Limited, (SFCL)",
      },
      {
        id:9,
        icon: metal1,
        bg: metal2,
        heading: "Rotameter Type Flowmeter",
        subtext: "Jamuna Fertilizer Company Limited (JFCL)",
        sub: "Supply of Rotameter Type Flowmeter, Jamuna Fertilizer Company Limited (JFCL)",
      },
    ];
    
    const ongoingProject = [
        {
            id:1,
          icon: power1,
          bg: power2,
          heading: "Installation , replacement, Commissioning & PGTR of Steam Super Heater &  PG waste Heat Boiler",
          subtext: "Jamuna Fertilizer Company Limited (JFCL)",
          sub: "Work for Installation , replacement, Commissioning & PGTR of Steam Super Heater &  PG waste Heat Boiler, , Jamuna Fertilizer Company Limited (JFCL)",
        },
          {
            id:2,
          icon: machanical1,
          bg: machanical2,
          heading: "2 NOS CRANE TROUBLESHOOTING",
          subtext: "Ghorashal Power Station Bangladesh Power Development Board Palash",
          sub: "2 NOS CRANE TROUBLESHOOTING, 7th Unit, Ghorashal Power Station Bangladesh Power Development Board Palash",
        },
          {
            id:3,
          icon: petrol1,
          bg: petrol2,
          heading: "Elbow Tea Coupling pipe fittings",
          subtext: "Chittagong Urea Fertilizer Company Limited (CUFL)",
          sub: "Supply of Elbow Tea Coupling pipe fittings, Chittagong Urea Fertilizer Company Limited (CUFL)",
        },
          {
            id:4,
          icon: petrol1,
          bg: petrol2,
          heading: "Automatic Power Transfer Controller (ATMT)",
          subtext: "Shahjalal Fertilizer Company Limited, (SFCL)",
          sub: "Supply of Automatic Power Transfer Controller (ATMT) - 05 (Five) items., Shahjalal Fertilizer Company Limited, (SFCL)",
        },
      ];

  return (
    <>
      <Hero HeroLable={HeroLable} bread={bread} />
      <div className="pb-[140px] relative">
        <div className="pt-[100px] bg-[url('/images/background/bg-background.jpg')] pb-[200px] px-[5%] xl:px-[10%]">
          <h1 className="text-3xl lg:text-5xl font-bold w-full">
            Completed Project
          </h1>
        </div>

        <div className="px-[5%] xl:px-[10%] mt-[-150px] relative grid md: grid-cols-2 xl:grid-cols-3 gap-5">
          {completedProject.map((content, index) => (
            <div className="overflow-hidden">
              <div className="group relative size-[100%] pb-5 h-[250px] w-full">
                <Image
                  src={content.bg}
                  alt=""
                  className="size-[100%] object-cover aspect-square rounded-xl shadow-md"
                />
                <div className="flex gap-5 items-center absolute z-0 bottom-1 w-[calc(100%-20px)] group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                  <Image
                    src={content.icon}
                    alt=""
                    className={
                      index % 3 == 0
                        ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                        : "" || index % 3 == 1
                        ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                        : "" || index % 3 == 2
                        ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                        : ""
                    }
                  />
                  <div className="bg-white h-[90px] w-full pl-5 flex flex-col justify-center shadow-md">
                    <p className="text-xl font-bold line-clamp-1">{content.heading}</p>
                    <p className="text-gray-500 line-clamp-2">{content.subtext}</p>
                  </div>
                </div>
                <div className="absolute z-10 w-[calc(100%-50px)] h-[calc(100%-20px)] top-0 left-0 bg-[#ffffffe5] rounded-l-xl translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out shadow-md">
                  <div className="relative pr-[90px] p-5 flex flex-col justify-between gap-5 ">
                    <div className="absolute top-0 right-[-50px]">
                      <Image
                        src={content.icon}
                        alt=""
                        className={
                          index % 3 == 0
                            ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                            : "" || index % 3 == 1
                            ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                            : "" || index % 3 == 2
                            ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                            : ""
                        }
                      />
                    </div>
                    <div
                      className={
                        index % 3 == 0
                          ? "h-0 w-0 border-[25px] border-transparent border-t-[#25789e] border-l-[#25789e] absolute top-[90px] right-[-50px]"
                          : "" || index % 3 == 1
                          ? "h-0 w-0 border-[25px] border-transparent border-t-[#201553] border-l-[#201553] absolute top-[90px] right-[-50px]"
                          : "" || index % 3 == 2
                          ? "h-0 w-0 border-[25px] border-transparent border-t-[#3b9422] border-l-[#3b9422] absolute top-[90px] right-[-50px]"
                          : ""
                      }
                    ></div>
                    <p className="text-2xl font-bold hover:primary-color line-clamp-2">
                      {content.heading}
                    </p>
                    <p className=" line-clamp-3">{content.sub}</p>
                    <Link href={`/more/project-list/${content.id}`}>
                              <button
                    className={
                      index % 3 == 0
                        ? "font-semibold text-white bg-[#0099E2] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                        : "" || index % 3 == 1
                        ? "font-semibold text-white bg-[#203b70] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase"
                        : "" || index % 3 == 2
                        ? "font-semibold text-white bg-[#28Bc00] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                        : ""
                    }
                  >
                    Read More
                    <i className="fa-solid fa-chevron-right text-sm"></i>
                  </button>
                        </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-[140px] relative">
        <div className="pt-[100px] bg-[url('/images/background/bg-background.jpg')] pb-[200px] px-[5%] xl:px-[10%]">
          <h1 className="text-3xl lg:text-5xl font-bold w-full">
            Ongoing Project
          </h1>
        </div>

        <div className="px-[5%] xl:px-[10%] mt-[-150px] relative grid md: grid-cols-2 xl:grid-cols-3 gap-5">
          {ongoingProject.map((content, index) => (
            <div className="overflow-hidden">
            <div className="group relative size-[100%] pb-5 h-[250px] w-full">
              <Image
                src={content.bg}
                alt=""
                className="size-[100%] object-cover aspect-square rounded-xl shadow-md"
              />
              <div className="flex gap-5 items-center absolute z-0 bottom-1 w-[calc(100%-20px)] group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                <Image
                  src={content.icon}
                  alt=""
                  className={
                    index % 3 == 0
                      ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                      : "" || index % 3 == 1
                      ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                      : "" || index % 3 == 2
                      ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                      : ""
                  }
                />
                <div className="bg-white h-[90px] w-full pl-5 flex flex-col justify-center shadow-md">
                  <p className="text-xl font-bold line-clamp-1">{content.heading}</p>
                  <p className="text-gray-500 line-clamp-2">{content.subtext}</p>
                </div>
              </div>
              <div className="absolute z-10 w-[calc(100%-50px)] h-[calc(100%-20px)] top-0 left-0 bg-[#ffffffe5] rounded-l-xl translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out shadow-md">
                <div className="relative pr-[90px] p-5 flex flex-col justify-between gap-5 ">
                  <div className="absolute top-0 right-[-50px]">
                    <Image
                      src={content.icon}
                      alt=""
                      className={
                        index % 3 == 0
                          ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                          : "" || index % 3 == 1
                          ? "size-[90px] p-5 shadow-md bg-[#203b70]"
                          : "" || index % 3 == 2
                          ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                          : ""
                      }
                    />
                  </div>
                  <div
                    className={
                      index % 3 == 0
                        ? "h-0 w-0 border-[25px] border-transparent border-t-[#25789e] border-l-[#25789e] absolute top-[90px] right-[-50px]"
                        : "" || index % 3 == 1
                        ? "h-0 w-0 border-[25px] border-transparent border-t-[#201553] border-l-[#201553] absolute top-[90px] right-[-50px]"
                        : "" || index % 3 == 2
                        ? "h-0 w-0 border-[25px] border-transparent border-t-[#3b9422] border-l-[#3b9422] absolute top-[90px] right-[-50px]"
                        : ""
                    }
                  ></div>
                  <p className="text-2xl font-bold hover:primary-color line-clamp-2">
                    {content.heading}
                  </p>
                              <p className=" line-clamp-3">{content.sub}</p>
                              <Link href={`/more/project-list/${content.id}`}>
                              <button
                    className={
                      index % 3 == 0
                        ? "font-semibold text-white bg-[#0099E2] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                        : "" || index % 3 == 1
                        ? "font-semibold text-white bg-[#203b70] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase"
                        : "" || index % 3 == 2
                        ? "font-semibold text-white bg-[#28Bc00] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                        : ""
                    }
                  >
                    Read More
                    <i className="fa-solid fa-chevron-right text-sm"></i>
                  </button>
                        </Link>
                 
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
