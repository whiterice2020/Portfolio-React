import React from "react";
const Me = require("./Images/Me.jpg")

function About () {
    return (
      <>
      <div>
      <h1>About Me</h1>
      {/* Image Here to the Side */}
      <img src={Me} className="imgMe" alt="Picutre of Paul DelPadre"></img>
       <p className="aboutP">Motivated IT professional with entry level experience in JavaScript, HTML, CSS, and Node.  Attending UCF Boot Camp for Full Stack Developer for a duration of 3 months with over 40 hours of technical work per week in school projects and personal projects.</p>
       <p className="aboutP">Extensive IT experience with Technical Support and System Administration, but was always fascinated with coding and web development which inspired to do a career change in Development.</p>
       <p className="aboutP">
       An eager learner who is ready to jump in and take on challenges in order to assist with the efficiency of the department and company.  A team player who loves to work in groups to share ideas, knowledge, and new technologies.

       </p>
       </div>
      </>
      );
  };

export default About;
