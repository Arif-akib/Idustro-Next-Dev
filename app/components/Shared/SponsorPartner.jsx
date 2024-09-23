import Image from "next/image";

export default function SharedSponsorPartner({Headline , contents}) {
      return (
        <>
          <div className="py-16 px-[10%]">
            <div>
              <p className="text-lg font-bold primary-color text-center pb-3">
                {Headline.sub}
              </p>
              <h2 className="text-5xl font-bold text-center pb-5">
                {Headline.text}
              </h2>
            </div>
            <div className="pt-10 grid grid-cols-4 gap-8">
              {contents.map((content, index) => (
                <div className="p-5 rounded-md shadow-md bg-white h-[110px] flex justify-center items-center">
                  <Image src={content.img} alt="" className="h-full" />
                </div>
              ))}
            </div>
          </div>
        </>
      );
}