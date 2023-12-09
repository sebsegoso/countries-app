import ContactForm from "@/components/forms/ContactForm/ContactForm";
import "./contact.scss";

export const metadata = {
  title: "Contact us",
};
const ContactUsPage = () => {
  return (
    <main className="contact-page">
      <section className="wrapper">
        <div className="contact-page__container">
          <ContactForm
            formHeader={
              <div>
                <h1>Contact us</h1>
                <h2>Let us a message</h2>
              </div>
            }
          />
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
