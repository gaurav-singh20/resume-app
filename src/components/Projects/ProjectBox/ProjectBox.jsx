import './ProjectBox.css';

export default function ProjectBox({ title, image, sentences, link, onClick }) {
    return (
        <div className='project_box_container' onClick={onClick}>
            <div className='project_box_image_container'>
                <img src={image} alt={title} />
            </div>
            <div className='project_box_description_container'>
                <div className='project_box_title'>
                    {title}
                </div>
                <div className='project_box_sentences_container'>
                    {sentences.map((sentence, index) => (
                        <p key={index}>{sentence}</p>
                    ))}
                </div>
                <div className='project_box_link'>
                    <span>Link:</span>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        {title}
                    </a>
                </div>
            </div>
        </div>
    );
}