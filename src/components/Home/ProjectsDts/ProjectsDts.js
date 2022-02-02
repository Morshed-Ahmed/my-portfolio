import React, { useEffect, useState } from 'react';
import './ProjectsDts.css'
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProjectsDts = () => {
    const { projectId } = useParams();

    const [projects, setProjects] = useState()

    useEffect(() => {
        fetch("/portfolio.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [projectId])
    /* console.log(projects) */
    const project = projects?.filter(pt => pt.id === parseInt(projectId))
    console.log(project)
    /* const [name, username, img] = (project);
    console.log(project) */

    return (
        <div>
            <Header />
            <div className="container project-details" >


                {
                    project?.map(pr =>
                        <div className="row  my-5">
                            <div className="col-md-6 col-sm-12  ">

                                <div className="border m-3 ">
                                    <img className="img-fluid " src={pr.img} alt="" />
                                </div>
                                <div className="border m-3">
                                    <img className="img-fluid mb-4" src={pr.img2} alt="" />
                                </div>
                                <div className="border m-3">
                                    <img className="img-fluid mb-4" src={pr.img3} alt="" />
                                </div>

                            </div>
                            <div className="col-md-6 col-sm-12 mt-4 dita ">

                                <div>
                                    <h3>{pr.title}</h3>
                                    <p>{pr.detail2}</p>
                                </div>

                                <div className="details-button">
                                    <a className=" links " href={pr.live}> Live site</a>
                                    <a className="m-2 links " href={pr.link1}> client site link</a>
                                    <a className=" links" href={pr.link2}> Server site link</a>
                                </div>

                            </div>
                        </div>



                    )
                }


            </div>
            <Footer />

        </div>
    );
};

export default ProjectsDts;

