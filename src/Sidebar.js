import React from 'react';
import './App';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <h3>CONTACT</h3>

        <div className="contact-info">
        <p> aldyneronquillo@gmail.com
        <img 
          src="https://www.leedsot.co.uk/images/mail.png" 
          alt="Email Icon" 
          className="email"/>
        </p>
        <p> (0968) 537 4295
        <img 
          src="https://www.pngkey.com/png/full/648-6483874_phone-phone-icon-grey-png.png" 
          alt="Contact Icon" 
          className="contact"/>
        </p>
        <p> Pampanga, Philippines
        <img 
          src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-1024.png" 
          alt="Location Icon" 
          className="location"/>
        </p>
      </div>

      <div className="socials">
        <p>
          <a href="https://www.facebook.com/aldyne.ronquillo.9/" target="_blank" rel="noopener noreferrer"> Facebook </a>
          <img 
            src="https://www.warehousestoragesolutions.com/wp-content/themes/understrap-child-master/assets/img/facebook-icon.png" 
            alt="LinkedIn Icon" 
            className="linkedin-icon" /> 
        </p>
        <p>
            <a href="https://github.com/aldyneronqs" target="_blank" rel="noopener noreferrer"> GitHub </a>
            <img 
              src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" 
              alt="GitHub Icon" 
              className="github-icon" />
        </p>
      </div>

      </div>


      <div className="education">
        <h3>EDUCATION</h3>
        <p>Bachelor of Science <br></br> Information Technology</p>
        <p>University of the Assumption</p>
        <p>2022 - 2026</p>
        <p>CSFP, PH</p>
      </div>
      <div className="section">
        <h3>SKILLS</h3>
        <ul className="skills">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
          <li>UX and UI Design</li>
          <li>CSS Frameworks</li>
        </ul>
      </div>
    </div>
    
  );
};

export default Sidebar;
