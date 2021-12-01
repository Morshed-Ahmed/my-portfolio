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
        <div className="container my-5">
            <div className="my-4">
                <span>CONTACT</span>
                <h2>Contact With Me</h2>
            </div>
            <div className="row">
                <div className="col-md-6 border ">
                    <div>
                        <img className="img-fluid" src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" alt="" />
                    </div>
                    <div>
                        <h4>Morshed Ahmed</h4>
                        <span> Learning Progaming</span>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <span>Phone: 0170000000</span> <br />
                        <span>Email: morshed@gmail.com</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={sendEmail}>
                        <label>Name</label> <br />
                        <input type="text" name="name" /> <br />
                        <label>Email</label> <br />
                        <input type="email" name="user_email" /> <br />
                        <h4>message</h4>
                        <textarea name="message" /> <br />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;