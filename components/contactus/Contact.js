import React, {useEffect} from 'react';

import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(props) {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])
    return (
        <>
             <section className="contact" data-AOS='fade-right'>
        <h2 className="text-center">Contact Us</h2>
        <div className="form">
            <input className="form-input" type="text" name="name" id="name" placeholder="Enter your Name"/>
            <input className="form-input" type="text" name="phone" id="phone" placeholder="Enter your phone Number"/>
            <input className="form-input" type="text" name="email" id="email" placeholder="Enter your Email"/>
            <textarea className="form-input" name="text" id="text" cols="30" rows="10">Ellaborate your concern</textarea>
            <button className="contact-btn">Sumit</button>

        </div>
    </section>
        </>
    );
}

export default Contact;