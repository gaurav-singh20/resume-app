import './HomePage.css';

import githubIcon from '../../assets/githubIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'


function HomePage(){
    return(
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_p1'>
                    <span className='hi_span'>Hi,</span> My name is
                </p>

                <p className='homepage_left_p2'>
                    Gaurav Singh
                </p>

                <p className='homepage_left_p3'>
                    Developer at <span className='hi_span'>ABC pvt ltd</span>
                </p>

                <p className='homepage_left_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut illum sequi fugiat reiciendis officia veritatis dicta perspiciatis, saepe quo at numquam ducimus molestias animi maiores assumenda labore quaerat eaque.
                    Lorem, ipsum dolor.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio doloribus accusantium debitis illum deleniti facere in maiores, at reprehenderit earum rem sint eligendi. Recusandae magni perspiciatis exercitationem nihil ipsum possimus corporis ipsa repudiandae sint eligendi aut libero officia molestias, aperiam, quaerat sed aspernatur consectetur laboriosam quibusdam repellat? Ipsum, ipsa.
                </p>

                <div>
                    <a href='https://github.com/gaurav-singh20' target='_blank'>
                        <img 
                            src={githubIcon} 
                            alt="githubIcon" 
                            className='homepage_icons'
                        />
                    </a>
                    <a href='https://x.com/singh_gauravv20' target='_blank'>
                        <img 
                            src={twitterIcon} 
                            alt="twitterIcon" 
                            className='homepage_icons'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/gauravxingh-17j' target='_blank'>
                        <img 
                            src={linkedinIcon} 
                            alt="linkedinIcon" 
                            className='homepage_icons'
                        />
                    </a>
                </div>

                <a href="mailto:gauravostro15@gmail.com">
                    <button className='homepage_left_button'>Get in touch</button>
                </a>
                
            </div>

            <div className='homepage_right'>
                <img src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif" alt="profilePicture" />
            </div>
        </div>
    );
}

export default HomePage;