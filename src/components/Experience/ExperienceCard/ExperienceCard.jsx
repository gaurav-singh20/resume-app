import './ExperienceCard.css'
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

function ExperienceCard(
    {companyLogo ,companyName, designation, statements, iconImages, delay}
){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return(
        <motion.div 
        ref={ref}
        variants={container_y(delay)}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className="ex_card_container">
            <div className='ex_card_logo_container'>
                <img src={companyLogo} alt="company logo" className="ex_card_logo"/>
            </div>
            
            <p className="ex_card_title">{companyName}</p>

            <p className="ex_card_subtitle">Designation : <span className='ex_card_desig'> {designation} </span> </p>

            <div className="ex_card_sentences">
                {
                    statements.map((item, index) => (
                        <p key={item} className="ex_card_sentence">
                            {item}
                        </p>
                    ))
                }
            </div>

            <p className='ex_card_texh_used_title'>Technologies Used:</p>

            <div className="ex_card_icon_images_container">
                {
                    iconImages.map((icon, index) => (
                        <img key={icon} src={icon} alt="icon" className="ex_card_icon_image"/>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default ExperienceCard;