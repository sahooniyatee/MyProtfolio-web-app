import React , {useRef} from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
const Contact = () =>{
    const form = useRef();

  const sendEmail = (e) => {
      alert("Are you sure to submit :) 😺")
    e.preventDefault();

    emailjs.sendForm('service_1rwhcwc', 'template_i30h85z', form.current, 'OFmfy0Grx88tespN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
        <div className="c-wrapper" id='Contact'>
            <div className="touch">
                <span>Get In Touch</span><br />
                <span> With Me 🤝</span>
            </div>
            <div className="contact">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Enter your Name" />
                <input type="email" name="user_email" placeholder="Enter your Email"/>
                <input type="number" placeholder="Enter your Number"/>
                <textarea type="text" name="message" placeholder="Message" />
                <button className="button1" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
};
export default Contact;