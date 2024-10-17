export default function ContactMap() {
    return (
        <>
            <div className="px-[10%] py-16 bg-[url('/src/assets/images/background/bg-bottom-portfolio-content.png')] bg-right bg-no-repeat">
                <p className="text-xl tracking-wide py-3">
                    <span className="font-bold">Office Address:</span> NIECO
                    NEST, 2nd & 3rd Floor, 194 Central Bashabo, Sabujbag,
                    Dhaka-1214, Bangladesh
                </p>
                <div className="rounded-lg p-3 bg-white shadow-md h-[80vh]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4531.939113062997!2d90.43187687605106!3d23.740896189139853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9004d45fe81%3A0x4569e0c97796f1d3!2sNIECO%20NEST!5e1!3m2!1sen!2sbd!4v1729188979874!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
