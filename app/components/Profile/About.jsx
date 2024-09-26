import Image from "next/image"

export default function ProfileAbout({ contents }) {
    return (
        <>
            <div className="pt-32 pb-10 px-[10%] flex gap-5 bg-[url('/images/background/bg-bottom-portfolio-content.png')] bg-no-repeat bg-right">
                <div className="max-w-[350px]">
                    <img src="/images/team/1.jpg" alt="" className="w-full h-auto rounded-md" />
                    <div className="mt-8">
                        <h3 className="text-3xl font-bold">Maria Lester</h3>
                        <p className="my-3">Industrial Manager</p>
                        <div className="flex items-center gap-5 font-bold text-lg mb-3 group hover:primary-color duration-500">
                            <p className="size-[40px] bg-gray-100 primary-color flex items-center justify-center rounded-md group-hover:scale-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                            </p>
                            +98 015 456 754
                        </div>
                        <div className="flex items-center gap-5 font-bold text-lg mb-3 group hover:primary-color duration-500">
                            <p className="size-[40px] bg-gray-100 primary-color flex items-center justify-center rounded-md group-hover:scale-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
                            </p>
                            info@support.com
                        </div>
                        <div className="flex items-center gap-5 font-bold text-lg mb-3 group hover:primary-color duration-500">
                            <p className="size-[40px] bg-gray-100 primary-color flex items-center justify-center rounded-md group-hover:scale-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                            </p>
                            16/a, romada city tower, nyc
                        </div>
                        <div className="flex items-center gap-5 font-bold text-lg group hover:primary-color duration-500">
                            <p className="size-[40px] bg-gray-100 primary-color flex items-center justify-center rounded-md group-hover:scale-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z"></path></svg>
                            </p>
                            www.example.com
                        </div>
                    </div>
                </div>
                <div className="max-w-[calc(100%-350px)] space-y-4">
                    <h1 className="text-4xl font-bold mb-5">About Me</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <h1 className="text-4xl font-bold mb-5">Expertise & Skills</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                    <div className="space-y-3">
              {contents.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-xl font-bold pb-2">{skill.name}</p>
                  <div className="bg-slate-200 rounded-lg">
                    <div
                      className="primary-background py-[3px] rounded-lg relative"
                      style={{ width: skill.amount }}
                    >
                      <span className="absolute bottom-[200%] text-lg font-bold right-0 translate-x-[50%]">
                        {skill.amount}
                      </span>
                      <p className="size-4 rounded-full primary-background absolute top-[50%] translate-y-[-50%] right-0"></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

                </div>
            </div>
        </>
    )
}