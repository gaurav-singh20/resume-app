import './TechStackIcons.css';
import {animate, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container_y = (d) => ({
    hidden: { y:-500,opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.8
        }
    }
})


export default function TechStackIcons(props){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return(
        <motion.div 
        ref={ref}
        variants={container_y(props.delay)}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className='techstack_icons'>
            <img src={props.src} alt="image" />
            <p>{props.title}</p>
        </motion.div>
    )
}
