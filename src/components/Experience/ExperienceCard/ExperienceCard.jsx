import './ExperienceCard.css'

function ExperienceCard(
    {companyName, designation, statements, iconImages}
){
    return(
        <div className="ex_card_container">
            <p className="ex_card_title">{companyName}</p>

            <p className="ex_card_subtitle">Designation : {designation}</p>

            {
                statements.map((item, index) => (
                    <p key={item} className="ex_card_sentences">
                        {item}
                    </p>
                ))
            }

            <p className='ex_card_texh_used_title'>Technologies Used:</p>

            <div className="ex_card_icon_images_container">
                {
                    iconImages.map((icon, index) => (
                        <img key={icon} src={icon} alt="icon" className="ex_card_icon_image"/>
                    ))
                }
            </div>
        </div>
    )
}

export default ExperienceCard;