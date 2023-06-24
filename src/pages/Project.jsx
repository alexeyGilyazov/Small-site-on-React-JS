import React from 'react';
import { useParams } from 'react-router-dom';


import { projects } from '../helpers/projectList';


import BtnGitHum from '../components/btnGitHub/BtnGitHum';



const Project = () => {

    const {id} = useParams()
    const project = projects[id]

    // console.log(project);

    return (
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1">{project.title}</h1>

                        <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                            <div className="project-details__desc">
                                <p>{project.skills}</p>
                            </div>
                    {project.gitHubLink && (
                        <BtnGitHum link='https://github.com/'/>
                    )}
                    
                    </div>
                </div>
            </main>
        </>
    );
}

export default Project;
