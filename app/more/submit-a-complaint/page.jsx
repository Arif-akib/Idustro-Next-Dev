import Form from "/app/components/Shared/Form";
import Hero from "/app/components/Shared/Hero";

export default function ContactForm() {
    const HeroLable = "Submit Complaints";
    const bread = "Home >> More >> Submit Complaints";
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <div className="py-20 px-[5%] xl:px-[10%]">
                <div className="pb-5">
                    <p className="text-lg font-bold primary-color text-center pb-3">
                        Submit Complaints
                    </p>
                    <h2 className="text-3xl xl:text-5xl font-bold text-center xl:w-1/2 mx-auto">
                        Feel free to submit complanits.
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-4">
                    <Form />
                </div>
            </div>
        </>
    );
}
