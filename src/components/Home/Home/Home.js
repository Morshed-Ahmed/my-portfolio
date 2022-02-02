import React from 'react';
import './Home.css'
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div className="home-style">
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;