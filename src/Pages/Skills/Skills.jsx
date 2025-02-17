import React from "react";

import '../Skills/SkillsStyle.css';

function Skills(){
    return(
        <div className="skills-body">
            <div className="Language-body skills-component">
                <div className="skill-head">LANGUAGES</div>
                <div className="list">
                    <li>java</li>
                    <li>C</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </div>
            </div>
            <div className="Framework-body skills-component">
                <div className="skill-head">FRAMEWORK/LIBRARIES</div>
                <div className="list">
                    <li>Spring-boot</li>
                    <li>Reactjs</li>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>scikit-learn</li>
                    <li>Firebase</li>
                </div>
            </div>
            <div className="DevlopmentTools-body skills-component">
                <div className="skill-head">DEVLOPMENT TOOLS</div>
                <div className="list">
                    <li>Github</li>
                    <li>Git</li>
                    <li>Terminal</li>
                    <li>Postman</li>
                </div>
            </div>
            <div className="Databases-body skills-component">
                <div className="skill-head">DATABASES</div>
                <div className="list">
                    <li>postgreSQL</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                </div>
            </div>
        </div>
    );
}

export default Skills;