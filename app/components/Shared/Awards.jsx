import Image from "next/image";
import Link from "next/link";

export default function Awards({ certificates, awardType }) {
    return (
        <>
            <div className="px-[5%] xl:px-[10%] pt-32 pb-40">
                <h1 className="text-5xl font-bold text-center">
                    Certification & Awards
                </h1>

                {awardType == "end-user" ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                        {certificates.map((cer, index) => (
                            <div
                                key={index}
                                className="h-[80px] bg-white overflow-hidden border p-3 rounded-md shadow-md"
                            >
                                <Link
                                    target="_blank"
                                    href={cer.document}
                                    className="h-full text-lg flex gap-4 capitalize items-center justify-center pt-1 font-bold text-gray-600 text-center w-auto mx-auto"
                                >
                                    {cer.title}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                                        <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                                        <path d="M17 18h2" />
                                        <path d="M20 15h-3v6" />
                                        <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
                        {certificates.map((cer, index) => (
                            <div
                                key={index}
                                className="h-96 bg-white overflow-hidden border p-3 rounded-md shadow-md"
                            >
                                <Image
                                    src={cer.image}
                                    className="w-full h-full object-contain"
                                    alt={
                                        "Nahar Industrial Equipment Company Ltd" +
                                        cer.title
                                    }
                                    width={600}
                                    height={400}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
