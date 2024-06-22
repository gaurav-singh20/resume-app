import './TechStack.css'

import {TechStakeData,TechStakeData2} from '../../constants/index'

import TechStackIcons from './TechStackIcons/TechStackIcons'

function TechStack(){
    return(
        <div className="techstack_container">
            <p className='techstack_title'>Tech Stack</p>
            <div className='techstack_icon_container'>

                {
                    TechStakeData.map(function(data, index){
                        return (<TechStackIcons key={data.ImageTitle} title={data.ImageTitle} src={data.ImageSrc}/>)
                    })
                }

            </div>
            <div className='techstack_icon_container'>

                {
                    TechStakeData2.map(function(data, index){
                        return (<TechStackIcons key={data.ImageTitle} title={data.ImageTitle} src={data.ImageSrc}/>)
                    })
                }

            </div>
        </div>
    );
}

export default TechStack;