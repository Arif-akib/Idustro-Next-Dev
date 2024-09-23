import Image from "next/image"

export default function Awards({certificate}) {
    return (
        <>
            <div className="px-[10%] pt-32 pb-40">
                <h1 className="text-5xl font-bold text-center">Certification & Awards</h1>
                <div className="grid grid-cols-5 gap-8 mt-10">
                    {certificate.map((cer, index) => (
                        <div className="h-[100px] bg-white overflow-hidden border p-3 rounded-md shadow-md group">
                        <Image src={cer.img} alt="" className="h-full w-auto mx-auto group-hover:scale-animate"/>
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}