import React from 'react';
import './Skills.css'
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    const HTML = 85;
    const JavaScript = 80;
    const React = 70;
    const Node = 40;
    const MongoDb = 90;
    const PHOTOSHOP = 85;
    const FIGMA = 95;
    const DESIGN = 90;
    return (
        <div className="container">
            <div className="my-5 skill-title">
                <span>7+ YEARS OF EXPERIENCE</span>
                <h2>My Resume</h2>
            </div>
            <div className="row">

                <div className="col-md-6 skills-style">
                    <div className="design">
                        <span>Features</span>
                        <h4>Development Skill</h4>
                    </div>
                    <h6>HTML/CSS</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={HTML} label={`${HTML}%`} />
                    <h6>JavaScript</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={JavaScript} label={`${JavaScript}%`} />
                    <h6>React Js</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={React} label={`${React}%`} />
                    <h6>Node Js</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={Node} label={`${Node}%`} />
                    <h6>MongoDb</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={MongoDb} label={`${MongoDb}%`} />

                </div>
                <div className="col-md-6 skills-style">
                    <div className="design">
                        <span>Features</span>
                        <h4>Design Skill</h4>
                    </div>
                    <h6>PHOTOSHOP</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={PHOTOSHOP} label={`${PHOTOSHOP}%`} />
                    <h6>FIGMA</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={FIGMA} label={`${FIGMA}%`} />
                    <h6>DESIGN</h6>
                    <ProgressBar variant="danger" style={{ width: 450 }} now={DESIGN} label={`${DESIGN}%`} />
                </div>
            </div>


        </div>
    );
};

export default Skills;