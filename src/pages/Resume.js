import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="resumeContainer">
      <p className="resumeTitle">Resume</p>
      <div className="downloadContainer">
        <p className="resumeDownload">Click to Download</p>
        <a href="./images/resume.pdf" download>
          <img
            className="downloadIcon"
            src="./images/download.png"
            alt="download symbol"
          ></img>
        </a>
      </div>

      <img className="resumeImage" src="./images/resume.png" alt="resume"></img>
    </div>
  );
};

export default Resume;
