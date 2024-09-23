import BreadCrumb from "/app/components/Shared/BreadCrumb"

export default function Hero({ HeroLable , bread }) {
    return (
        <>
            <div className="h-[50vh] bg-[url('/images/home/bg-pagetitle.jpg')] flex flex-col gap-5 justify-center text-white px-[10%]">
                <BreadCrumb bread={bread} HeroLable={ HeroLable } />
                <h1 className='text-5xl font-bold'>{HeroLable}</h1>
            </div>
        </>
    )
}