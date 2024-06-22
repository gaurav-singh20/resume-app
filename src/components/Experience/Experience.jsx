import './Experience.css';

import js from '../../assets/jsIcon.png';
import cpp from '../../assets/cppIcon.png';
import css from '../../assets/cssIcon.png';

import ExperienceCard from './ExperienceCard/ExperienceCard';


function Experience(){
    const statements = [
        "I worked on the front-end of the website using React.js and Redux.",
        "I worked on the back-end of the website using Node.js and Express.",
        "I worked on the database using MongoDB and Mongoose.",
        "I worked on the front-end of the website using Angular.js.",
    ]
    
    const iconImages = [js,cpp,css]

    return(
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyName = "ABC Pvt Ltd"
                    designation = 'SDE 2'
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard 
                    companyName = "XYZ Pvt Ltd"
                    designation = 'SDE 1'
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard 
                    companyName = "PQR Pvt Ltd"
                    designation = 'Intern'
                    statements = {statements}
                    iconImages = {iconImages}
                />
            </div>
        </div>
    )
}

export default Experience;