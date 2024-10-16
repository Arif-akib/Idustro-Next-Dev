export default function BusinessScope() {
  return (
    <>
      <div className="py-20 pb-26 px-[10%] flex items-center gap-10 bg-[url('/images/background/bg-bottom-portfolio-content.png')] bg-right bg-no-repeat overflow-hidden relative">
        <img
          src="/images/background/image-holder.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <div className="w-1/2 relative group">
          <img
            src="/images/About/222-1-500x500.jpg"
            alt=""
            className="rounded-full size-full aspect-auto object-cover relative z-20"
          />
          <p className="bg-[#b73719] size-full rounded-full absolute -bottom-[55%] right-0 text-center flex justify-center items-center text-5xl font-bold text-[#ffffff41] group-hover:text-white duration-500">
          Business Scope
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-xl font-bold">
            Welcome to <span className="primary-color">NIECO Ltd.</span>
          </p>
          <h2 className="text-5xl font-bold pt-4">
          Scope of Business
          </h2>
          <p className="text-gray-500 pt-5">
          Naahar Industrial Equipments Co. Ltd. (NIECO Ltd.) operates as a leading local agent, representative, distributor, and service provider across various industrial sectors in Bangladesh. Our expertise spans multiple industries, ensuring that we meet the diverse needs of our clients. The primary areas of focus include:
          </p>
          <div className="grid grid-cols-2 font-bold text-xl pt-5 gap-x-5 gap-y-3">
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Fertilizer
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Power Plant
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Oil & Gas
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Chemical & Petrochemical
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Sugar & Food Processing
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[24px]"
              />
              Refinery
            </p>
          </div>
          <div className="my-10 p-8 rounded-md shadow-md bg-white flex items-center gap-5 group">
            <img
              src="/images/icon/icon-fcb_03.png"
              alt=""
              className="size-[70px] group-hover:animate-bounce"
            />
            <div>
              <h3 className="text-3xl font-semibold pb-3">Best Quality</h3>
              <p className="text-gray-500">
                We have completed and achieved the Certificate of Quality
                Management System.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
