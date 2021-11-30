import React from 'react';
import './Portfolio.css'
import { Button, Card } from 'react-bootstrap';

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            img: 'https://i.ibb.co/K54NcnR/Screenshot-89.png',
            sector: 'DEVELOPMENT',
            title: ' SUNGLASS LUNETTES'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/bdP4GjH/Screenshot-88.png',
            sector: 'DEVELOPMENT',
            title: ' TRAVELS TOURISM'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/P9W6Mnb/Screenshot-91.png',
            sector: 'WEB DESIGN',
            title: 'HEALTH CARE'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/MP30cvr/Screenshot-93.png',
            sector: 'WEB DESIGN',
            title: 'EDUCATION  SERVICES'
        },
        {
            id: 5,
            img: 'https://i.ibb.co/cQ6GcZ1/Screenshot-95.png',
            sector: 'WEB DESIGN',
            title: 'DOCTORS TEAM'
        },
        {
            id: 6,
            img: 'https://i.ibb.co/hWj5Z9T/Screenshot-97.png',
            sector: 'WEB DESIGN',
            title: 'ONLINE SHOPPING'
        },
    ]
    return (
        <div className="container my-5">
            <span>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
            <h2>My Projects</h2>
            <div className="row ">

                {
                    portfolio.map(pf =>
                        <div className="mt-4 col-md-4 col-sm-12 ">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={pf.img} />
                                <Card.Body className="card-body">
                                    <p><small>{pf.sector}</small> </p>
                                    <Card.Title>{pf.title}</Card.Title>

                                    <Button variant="danger">Details</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default Portfolio;
