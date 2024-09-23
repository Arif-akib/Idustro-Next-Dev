import Hero from '/app/components/Shared/Hero'
import ContactAddress from '/app/components/Contact/Address'
import ContactMap from '/app/components/Contact/Map'
import ContactForm from '/app/components/Contact/Form'

export default function Contact() {
    const HeroLable = 'Contact Us'
    const bread = 'Home >>'
    return (
        <>
            <Hero HeroLable={HeroLable} bread={bread} />  
            <ContactAddress />
            <ContactMap/>
            <ContactForm/>
        </>
    )
}