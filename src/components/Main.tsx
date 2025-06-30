import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import displayPic2 from '../assets/images/DisplayPic4.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={displayPic2} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/VLimbhar22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vedant-limbhare/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vedant Shamling Limbhare</h1>
        
          <h2>Data Analyst</h2>

          <p>I’m passionate about transforming Healthcare & Finance data into actionable insights. Skilled in SQL, Python, Excel, and BI tools, I thrive at the intersection of analytics and business strategy.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/VLimbhar22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vedant-limbhare/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div className="download-resume">
            <a href="/Vedant_Limbhare_Resume.pdf" download>
              <button
                style={{
                  backgroundColor: '#5000ca',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '20px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  animation: 'fadeInUp 0.8s ease-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#37008c';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#5000ca';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;