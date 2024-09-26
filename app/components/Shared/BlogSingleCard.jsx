import Image from "next/image";
import Link from "next/link";

export default function BlogSingleCard({ content }) {
  return (
    <>
      <div className="group relative h-[350px] w-full rounded-lg">
        <Image
          src={content.bg}
          alt=""
          className="size-[100%] object-cover aspect-square rounded-lg"
        />
        <p className="uppecase py-1.5 px-3 primary-background absolute z-10 rounded-sm text-white top-5 right-5 group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
          {content.type}
        </p>
        <div className="flex flex-col p-5 bg-white rounded-b-lg gap-5 items-center absolute z-0 bottom-0 w-full group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
          <div className="flex items-center w-full gap-5">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
              <p>
                by
                <span className="primary-color font-semibold ml-2">
                  {content.writer}
                </span>
              </p>
            </div>
            <p className="h-[20px] w-[.5px] bg-gray-500"></p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z"></path>
              </svg>
              <p className="text-gray-500">{content.date}</p>
            </div>
          </div>
          <div className="w-full ">
            <p className="text-3xl font-bold ">{content.heading}</p>
          </div>
        </div>
        <div className="absolute z-10 w-[calc(100%-50px)] h-full top-0 left-0 backdrop-blur-md bg-[#00000065] text-white rounded-l-lg translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out">
          <div className="relative pr-[90px] p-5 flex flex-col gap-5 justify-center h-full">
            <div className="absolute top-0 right-[-50px] primary-background text-white size-[90px] flex flex-col justify-center items-center">
              <p className="uppercase text-lg text-center">{content.date2}</p>
            </div>
            <div className="h-0 w-0 border-[25px] border-transparent border-t-[#c2482c] border-l-[#c2482c] absolute top-[90px] right-[-50px]"></div>
            <p className="text-3xl font-bold">{content.heading}</p>
            <p className="line-clamp-2 text-lg">{content.text}</p>
            <Link href={`/blog/${content.id}`}>
              <button className="font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase">
                Read More
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
