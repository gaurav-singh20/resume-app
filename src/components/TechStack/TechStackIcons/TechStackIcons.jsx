import './TechStackIcons.css';

export default function TechStackIcons(props){
    return(
        <div className='techstack_icons'>
            <img src={props.src} alt="image" />
            <p>{props.title}</p>
        </div>
    )
}
