export default function Form() {
    return (
        <>
            <div className="pt-5">
                <div className="flex flex-col md:flex-row gap-10 pb-5">
                    <input
                        id="full_name"
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Email"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-10 pb-5">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Phone"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Complaint Name"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 pb-5">
                    <form className="w-1/2">
                        <select
                            id="countries"
                            className="bg-gray-50 text-gray-900 text-sm focus:outline-none block border border-opacity-30 border-[#203b70] w-full p-3"
                        >
                            <option value="Product Quality Issue">
                                Product Quality Issue
                            </option>
                            <option value="Delivery Delay">
                                Delivery Delay
                            </option>
                            <option value="Customer Service">
                                Customer Service
                            </option>
                            <option value="Billing/Payment Issue">
                                Billing/Payment Issue
                            </option>
                            <option value="Website or Technical Issue">
                                Website or Technical Issue
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </form>
                    <div className="w-1/2">
                        <input
                            className="block w-full p-3 text-sm border border-opacity-30 border-[#203b70] cursor-pointer  focus:outline-none"
                            id="file_input"
                            type="file"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 pb-5">
                    <textarea
                        rows={6}
                        name=""
                        id=""
                        placeholder="Description of Complaint"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                    <textarea
                        rows={6}
                        name=""
                        id=""
                        placeholder="Preferred Resolution"
                        className="py-3 px-3 block bg-gray-50 md:w-1/2 focus:outline-none border border-opacity-30 border-[#203b70]"
                    />
                </div>

                <button className="font-bold sm:text-lg text-white bg-[#203b70] flex gap-3 items-center justify-center h-[50px] w-[220px] rounded-full mx-auto my-5">
                    Submit Complaint +
                </button>
            </div>
        </>
    );
}
