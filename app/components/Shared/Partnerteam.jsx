import Image from "next/image";
import Link from "next/link";

export default function TeamGrid({ team }) {
  return (
    <>
      <div className="px-[10%] py-28">
        <div className="flex items-end gap-5">
          <div className="w-1/2">
            <p className="text-[#FA4318] text-lg font-bold mb-2">{team.text}</p>
            <h3 className="text-5xl font-bold">{team.heading}</h3>
          </div>
          <div className="w-1/2">
            <p className="text-gray-600">{team.sub}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 pt-14">
          {team.members.map((content, index) => (
            <div
              key={index}
              className="h-[350px] relative group overflow-hidden"
            >
              <Image
                src={content.img}
                alt=""
                className="size-full object-cover aspect-auto"
              />
              <div className="bg-[#0d0d42] text-white rounded-tl-[0%] rounded-tr-[100%] border-[#fa4318] border-t-[5px] px-5 pt-16 pb-5 absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 duration-500">
                <p className="text-2xl font-bold pb-2 line-clamp-1 capitalize">
                  {content.heading}
                </p>
                <p className="line-clamp-1 capitalize">{content.text}</p>
                <p className="primary-background text-white size-[40px] rounded-full absolute top-[30%] right-5 flex justify-center items-center">
                  <Link href={`/profile/${content.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
