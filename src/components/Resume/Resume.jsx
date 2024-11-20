import React from "react";
import { useNavigate } from "react-router-dom"; 
import Res from "../../assets/Resume.png"; 
import './Resume.css'; 
import ResPDF from "../../assets/Resume.pdf"; 

const Resume = () => {
  const navigate = useNavigate(); 


  const goBack = () => {
    navigate("/"); 
  };

  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <img
        src={Res}
        className="resume-image"
        alt="Resume"
            />
            <p>
        <a href={ResPDF} download className="resume-download-link">
          Download Resume PDF
        </a>
            </p>
            <div>
              
        <button
          onClick={goBack}
          className="resume-back-button"
        >
          Go Back to Website
        </button>
      </div>
    </div>
  );
};

export default Resume;
