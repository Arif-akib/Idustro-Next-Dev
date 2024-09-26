import Image from "next/image";

export default function Profilegallery({ contents }) {
  return (
    <>
      <div className="px-[10%] pt-10">
        <h1 className="text-5xl text-center font-bold">Gallery</h1>
        <div className="my-10 columns-[300px]">
          {contents.map((content, index) => (
            <Image
            src={content.bg}
            alt=""
            className="w-full mb-5"
          />
          ))}
        </div>
      </div>
    </>
  );
}