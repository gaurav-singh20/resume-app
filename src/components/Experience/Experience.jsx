import './Experience.css';

import js from '../../assets/jsIcon.png';
import cpp from '../../assets/cppIcon.png';
import css from '../../assets/cssIcon.png';

import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import oracle from '../../assets/oracle.png';

import ExperienceCard from './ExperienceCard/ExperienceCard';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container_y = (d) => ({
    hidden: { x:-400,opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.3
        }
    }
})
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

function Experience(){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const statements = [
        "I worked on the front-end of the website using React.js and Redux.",
        "I worked on the back-end of the website using Node.js and Express.",
        "I worked on the database using MongoDB and Mongoose.",
        "I worked on the front-end of the website using Angular.js.",
    ]
    
    const iconImages = [js,cpp,css]

    return(
        <div id='experience' className="experience_container">
            <motion.p 
            ref={ref}
            variants={container_x(0.2)}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="experience_title">
                Experience
            </motion.p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyLogo = {google}
                    companyName = "ABC Pvt Ltd"
                    designation = 'SDE 2'
                    statements = {statements}
                    iconImages = {iconImages}
                    delay = {0.8}
                />
                <ExperienceCard 
                    companyLogo = {amazon}
                    companyName = "XYZ Pvt Ltd"
                    designation = 'SDE 1'
                    statements = {statements}
                    iconImages = {iconImages}
                    delay = {0.6}
                />
                <ExperienceCard 
                    companyLogo = {oracle}
                    companyName = "PQR Pvt Ltd"
                    designation = 'Intern'
                    statements = {statements}
                    iconImages = {iconImages}
                    delay = {0.4}
                />
            </div>
        </div>
    )
}

export default Experience;