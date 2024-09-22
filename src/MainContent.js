import React from 'react';
import './App.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="section">
        <h2>WORK EXPERIENCE</h2>
        <p id='h_exp'>Senior Web Developer</p>
        <p id='comp_name'>Mack Media Group</p>
        <p id='time-place'>2040 - current / Manila, PH</p>
        <ul>
          <li>Led development of client websites, improving load times by 40% through optimized front-end techniques (HTML, CSS, JavaScript).</li>
          <li>Integrated PHP and Laravel-based systems for e-commerce clients, increasing site scalability and reducing downtime by 35%.</li>
          <li>Collaborated with UX/UI designers to implement modern, intuitive designs that boosted customer satisfaction ratings to 95%.</li>
          <li><u><strong>Successfully deployed web applications with a 98% on-time completion rate</strong></u>, contributing to an increase in customer retention by 20%.</li>
        </ul>
      </div>
      <div className="section">
        <p id='h_exp'>Web Development Team Lead</p>
        <p id='comp_name'>Deployed Philippines Inc</p>
        <p id='time-place'>2032 - 2040 / Pasig City, PH</p>
        <ul>
          <li>Managed a team of 8 developers in delivering web solutions for enterprise clients, reducing project completion time by 30% with agile methodologies.</li>
          <li>Developed and maintained scalable web services and APIs, <u><strong> Improving system uptime to 99.8%</strong></u>.</li>
          <li>Provided mentorship and training to junior developers, resulting in a 15% improvement in team productivity.</li>
          <li>Created dynamic, single-page applications with React.js and integrated back-end systems using RESTful APIs.</li>
        </ul>
      </div>
      <div className="section">
        <p id='h_exp'>Full Stack Developer</p>
        <p id='comp_name'>PRIME Philippines</p>
        <p id='time-place'>2027 - 2032 / Quezon City, PH</p>
        <ul>
          <li>Optimized web applications for maximum speed and scalability, <u><strong>leading to a 20% increase in customer usage. </strong></u> </li>
          <li>Built and maintained back-end services using Node.js and Express, improving data retrieval times by 45%.</li>
          <li>Worked closely with cross-functional teams to define project requirements and deliver high-quality solutions.</li>
          <li>Created dynamic, single-page applications with React.js and integrated back-end systems using RESTful APIs.</li>  
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
