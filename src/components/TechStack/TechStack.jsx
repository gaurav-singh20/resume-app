import './TechStack.css'

import {TechStakeData,TechStakeData2} from '../../constants/index'

import TechStackIcons from './TechStackIcons/TechStackIcons'

import {animate, motion} from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y:-10},
    visible: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat : Infinity,
            repeatType: 'reverse'
        }
    }

})


const container_x = (delay) => ({
    hidden: { x:-100,opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

function TechStack(){
    return(
        <div id='tools' className="techstack_container">
            <motion.p 
            variants={container_x(1.8)}
            initial='hidden'
            animate='visible'
            className='techstack_title'>Tech Stack</motion.p>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='visible'
            className='techstack_icon_container'>

                {
                    TechStakeData.map(function(data, index){
                        return (<TechStackIcons key={data.ImageTitle} title={data.ImageTitle} src={data.ImageSrc} delay={data.delay}/>)
                    })
                }

            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='visible'
            className='techstack_icon_container'>

                {
                    TechStakeData2.map(function(data, index){
                        return (<TechStackIcons key={data.ImageTitle} title={data.ImageTitle} src={data.ImageSrc} delay={data.delay}/>)
                    })
                }

            </motion.div>
        </div>
    );
}

export default TechStack;