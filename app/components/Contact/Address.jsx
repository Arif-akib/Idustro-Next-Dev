export default function ContactAddress() {
    const HeroLable = "Contact Us";
    const Address = [
        {
            title: "Email Address",
            text: "Sent mail asap anytime",
            add1: "info@niecoltd.com",
            add2: "support@niecoltd.com",
            img: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(234,113,46,1)"
                >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
            ),
        },
        {
            title: "Phone Number",
            text: "Call us asap anytime",
            add1: "+880 1332547560",
            add2: "+880 1332547560",
            img: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(234,113,46,1)"
                >
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
            ),
        },
        {
            title: "Office Address",
            text: "Visit Our Office",
            add1: "NEST, 2nd & 3rd Floor, 194 Central Bashabo, Sabujbag",
            add2: "Dhaka-1214, Bangladesh",
            img: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(234,113,46,1)"
                >
                    <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19ZM7 15H17V17H7V15Z"></path>
                </svg>
            ),
        },
    ];
    return (
        <>
            <div className="py-16 px-[10%]">
                <h2 className="pb-10 font-bold text-3xl xl:text-5xl text-center">
                    Office Near You
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {Address.map((content, index) => (
                        <div className="bg-white p-8 rounded-md shadow-md group">
                            <div className="flex gap-5 items-center pb-5">
                                <div className="p-3 rounded-full bg-blue-100">
                                    <p className="group-hover:animate-ping">
                                        {content.img}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {content.title}
                                    </h2>
                                    <p>{content.text}</p>
                                </div>
                            </div>
                            <p className="hover:primary-color font-bold">
                                {content.add1}
                            </p>
                            <p className="hover:primary-color font-bold">
                                {content.add2}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
