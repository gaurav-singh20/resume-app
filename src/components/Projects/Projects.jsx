import { projectData } from '../../constants';
import ProjectBox from './ProjectBox/ProjectBox';
import './Projects.css' ;


function Projects() {



    return <div>
        <p className="projects_title">Projects</p>
        <div className='projects_box_container'>

            {
                projectData.map((project, index) => (
                    <ProjectBox
                        key={index} 
                        title={project.title}
                        image={project.image}
                        sentences={project.sentences}
                        link={project.link}
                    />
                )
            )}
        </div>
    </div>
}

export default Projects;