import './Contact.css'
import AddressInfo from "./AddressInfo/AddressInfo";
import ContactForm from "./ContactForm/ContactForm";
import ContactTitle from "./ContactTitle/ContactTitle";

function Contact() {
    return (
        <div className={"contact"} id={"contact"}>
            <ContactTitle/>
            <div className={"contact-content"}>
                <AddressInfo/>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact