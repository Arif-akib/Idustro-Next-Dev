import ContactAddress from "/app/components/Contact/Address";
import ContactForm from "/app/components/Contact/Form";
import ContactMap from "/app/components/Contact/Map";
import Hero from "/app/components/Shared/Hero";

export default function Contact() {
    const HeroLable = "Contact Us";
    const bread = "Home >>";
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />
            <ContactAddress />
            <ContactMap />
            <ContactForm />
        </>
    );
}
