export default function Form() {
    return (
        <>
            <div className="pt-5">
          <div className="flex flex-col md:flex-row gap-10 pb-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-2 px-3 bg-gray-50 md:w-1/2 focus:outline-[1px] outline-orange-600"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Email"
              className="py-2 px-3 bg-gray-50 md:w-1/2 focus:outline-[1px] outline-orange-600"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-10 pb-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Phone"
              className="py-2 px-3 bg-gray-50 md:w-1/2 focus:outline-[1px] outline-orange-600"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Subject"
              className="py-2 px-3 bg-gray-50 md:w-1/2 focus:outline-[1px] outline-orange-600"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="py-2 px-3 w-full h-[120px] bg-gray-50 focus:outline-[1px] outline-orange-600"
          ></textarea>
          <button className="font-bold sm:text-lg text-white bg-[#203b70] flex gap-3 items-center justify-center h-[50px] w-[200px] rounded-full mx-auto my-5">
            Send Message +
          </button>
        </div>
        </>
    )
}