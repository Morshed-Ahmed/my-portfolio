import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ikfbtxk', 'template_ws7jajm', e.target, 'user_qFe4zWzy4A9OAT2MrAdQC').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();
    }
    return (
        <div className="container contact-style">
            <div className="my-4 contact-title">
                <span>CONTACT</span>
                <h2>Contact With Me</h2>
            </div>
            <div className="row  " >
                <div className="col-md-5">
                    <div className="contact-left"  >
                        <div className=" contact-img  ">
                            <img className="img-fluid " src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" alt="" />
                        </div>
                        <div className="contact-details">
                            <h4>Morshed Ahmed</h4>
                            <small > Learning Progaming</small>
                            <p className="mt-2">I am available for freelance work. <br /> Connect with me via and call in to my account.</p>
                            <h6>Phone: 01700000000</h6>
                            <h6>Email: morshed@gmail.com</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="contact-right">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <label>Name</label> <br />
                            <input type="text" name="name" /> <br />
                            <label>Email</label> <br />
                            <input type="email" name="user_email" /> <br />
                            <label>Message</label> <br />
                            <textarea name="message" /> <br />
                            <input className='contact-button' type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;