import './ContactForm.css'
import {useState} from "react";

// const nodemailer = require('nodemailer')

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
    //     event.preventDefault();
    //
    //     try {
    //         const transporter = nodemailer.createTransport({
    //             host: "smtp.forwardemail.net",
    //             port: 465,
    //             secure: true,
    //             auth: {
    //                 user: 'rookieeew@mail.com',
    //                 pass: 'ucd5619123'
    //             }
    //         });
    //
    //         const mailOptions = {
    //             from: 'rookieeew@mail.com',
    //             to: email,
    //             subject: 'Come from My Website: ' + name,
    //             text: message
    //         };
    //
    //         const info = await transporter.sendMail(mailOptions);
    //         console.log('Email sent:', info.messageId);
    //     } catch (error) {
    //         console.error('Error occurred:', error);
    //     }
    //
    //
        // Clear the form fields after submission
       if (name != "" && email != "" && message !="") {
            setName('');
            setEmail('');
            setMessage('');
            alert("Submitted successfully!")
        }else {
           alert("Please finish all required information!")
       }

    };

    return (
        <div className={"contact-form"}>
            <form>
                <h2>SEND ME A NOTE</h2>
                <div className={"contact-form-body"}>
                    <input className={"contact-form-name"} type={"text"} placeholder={"  Name"} value={name}
                           onChange={(event) => setName(event.target.value)}/>
                    <input className={"contact-form-email"} type={"email"} placeholder={"  Email"} value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <textarea className={"contact-form-text"} placeholder={"  Tell me your needs"}
                              rows={5} value={message} onChange={(event) => setMessage(event.target.value)}/>
                </div>
            </form>
            <button className={"send-message"} type={"submit"} onClick={handleSubmit}>Send Message</button>
        </div>
    )
    // return (
    //     <div className={"contact-form"}>
    //         <form>
    //             <h2>SEND ME A NOTE</h2>
    //             <div className={"contact-form-body"}>
    //                 <input className={"contact-form-name"} type={"text"} placeholder={"  Name"}/>
    //                 <input className={"contact-form-email"} type={"email"} placeholder={"  Email"}/>
    //                 <textarea className={"contact-form-text"} placeholder={"  Tell me your needs"}
    //                           rows={5}/>
    //             </div>
    //
    //         </form>
    //         <button className={"send-message"} type={"submit"}>Send Message</button>
    //     </div>
    // )
}

export default ContactForm