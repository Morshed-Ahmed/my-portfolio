import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Portfolio></Portfolio>
            {/* <Skills></Skills> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;