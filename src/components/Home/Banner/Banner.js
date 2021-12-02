import React from 'react';
import { Button } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-style">
            <div className=" container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="banner-heder">
                            <div className="header">
                                <h2>MORSHED AHMED</h2>
                                <h4>I am a web developer</h4>
                                <Button variant="danger"> <a className="resume-link" href="https://drive.google.com/file/d/1r51zF7l9Hp-vUBpCNla0qYHxkF8yV4-S/view?usp=sharing">MY RESUME</a> </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <img src="https://i.ibb.co/99Zhgdw/20200314-172411-removebg-preview.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;


