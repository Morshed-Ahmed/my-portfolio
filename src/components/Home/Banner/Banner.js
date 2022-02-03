import React from 'react';
import { Button } from 'react-bootstrap';
import "./Banner.css"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div>
            <div className="container banner-style">
                <div className="row header ">
                    <div className="col-md-6 col-sm-12">
                        <div className="header-left ">
                            <div data-aos="fade-up">
                                <span className='header-sub-title'>WELCOME TO MY WORLD</span>
                                <h1 className='header-title'>
                                    Hi, I’m <span  > Morshed Ahmed</span> <br />
                                    <span >a</span>

                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={[' Developer.', ' Mean Stack Developer', ' Professional Coder']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                                <Button className='mt-4' variant="danger"> <a className="resume-link" href="https://drive.google.com/file/d/1r51zF7l9Hp-vUBpCNla0qYHxkF8yV4-S/view?usp=sharing">MY RESUME</a> </Button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-sm-12  banner-ims ">
                        <div className='  banner-im'>
                            <img className="img-fluid banner-img" src="https://i.ibb.co/nDtVnp7/20220118-181805-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;