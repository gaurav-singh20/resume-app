import { projectData } from '../../constants';
import ProjectBox from './ProjectBox/ProjectBox';
import './Projects.css' ;
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container_x = (d) => ({
    hidden: { x:-400,opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.5
        }
    }
})
const container_y = (d) => ({
    hidden: { x:100,opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.8
        }
    }
})


function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    return <div id='projects' className='project_box'>
        <motion.p 
        ref={ref}
        variants={container_x(0.2)}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className="projects_title">Projects</motion.p>
        <motion.div 
        ref={ref}
        variants={container_y(0.7)}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'} className='projects_box_container'>

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
        </motion.div>
    </div>
}

export default Projects;