import React from "react";
const Resume = require("../Assets/resume/paulDelpadreResume.pdf")
// import DataArea from "./DataArea";

function Footer () {
    return (
      <>
      <div className="footerP">
      <hr></hr>
      <br></br>
      <p className="contactInfo">@Paul DelPadre</p>
      <p  className="contactInfo"><a className="footerContact" href="https://www.linkedin.com/in/pauldelpadre/">LinkedIn</a></p>
      <p  className="contactInfo"><a className="footerContact" href="Paul@delpadre.xyz">Paul@delpadre.xyz</a></p>
      <p  className="contactInfo"><a className="footerContact" href={Resume}>Resume</a></p>
      <p  className="contactInfo"><a className="footerContact" href="https://github.com/whiterice2020">GitHub</a></p>
      <p  className="contactInfo">(407)519-0606</p>
      </div>
      </>
    );
  };

export default Footer;
