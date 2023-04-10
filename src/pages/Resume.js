import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const Resume = () => {
  return (
    <div>
      <div id="resume" className="resumeContainer">
        {/* <p className="resumeTitle">Resume</p> */}

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

        <img
          className="resumeImage"
          src="./images/resume.png"
          alt="resume"
        ></img>
        <div className="downloadContainer2">
          <a href="./images/resume.pdf" download>
            <p className="resumeDownload2">Click to Download</p>
          </a>
          <div className="downloadLink">
            <a href="./images/resume.pdf" download>
              <img
                className="downloadIcon2"
                src="./images/download.png"
                alt="download symbol"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
