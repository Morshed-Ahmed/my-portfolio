import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container about-st ">
            <div className="row about">

                <div className="col-md-6 col-sm-12 ">
                    <img className="img-fluid banner-img" src="https://i.ibb.co/99Zhgdw/20200314-172411-removebg-preview.png" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 about-style">
                    <span>FEATURES</span>
                    <h2>About</h2>
                    <div className='about-description'>
                        <small >Hi,I'm Morshed Ahmed</small>
                        <p >I'm a  MEAN Stack Developer with over 2 years of experience. I am also a hard worker and team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal. I have acquired the skills and knowledge necessary to make your project a success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

