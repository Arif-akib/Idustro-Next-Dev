import Form from "../Shared/Form";

export default function ContactForm() {
  return (
    <>
      <div className="pb-20 px-[10%]">
        <div className="pb-5">
          <p className="text-lg font-bold primary-color text-center pb-3">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold text-center w-1/2 mx-auto">
            Feel free to contact with us any time.
          </h2>
        </div>
        <Form/>
      </div>
    </>
  );
}
