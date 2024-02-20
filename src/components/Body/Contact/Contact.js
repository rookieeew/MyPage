import './Contact.css'
import AddressInfo from "./AddressInfo/AddressInfo";
import ContactForm from "./ContactForm/ContactForm";
import ContactTitle from "./ContactTitle/ContactTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Section from "../../InViewSection/Section";

function Contact() {
    return (
        <Section>
            <div className={"contact"} id={"contact"}>
                <ContactTitle/>
                <div className={"contact-content"}>
                    <AddressInfo/>
                    <ContactForm/>
                </div>
            </div>
        </Section>
    )
}

export default Contact