const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <navigator className="nav">
          <a
            className="nav-item col-4 d-flex justify-content-center"
            href="https://github.com/peachysnicker"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/github-icon-white.png" alt="Github icon" />
          </a>
          <a
            className="nav-item col-4 d-flex justify-content-center"
            href="https://www.linkedin.com/in/mariah-feser-ab8250243/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/linked-in-icon-white.png" alt="Linked In icon" />
          </a>
          <a
            className="nav-item col-4 d-flex justify-content-center"
            href="https://www.instagram.com/microbeautystudio/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/instagram-white-icon.png" alt="Instagram Icon" />
          </a>
          <p className="col-12 pt-3 d-flex justify-content-center">
            Created with ♥ by Mariah Feser
          </p>
          <p className="col-12  d-flex justify-content-center"> © 2023</p>
        </navigator>
        {/* <a className="emailLink" href="mailto:feser.mk@gmail.com">
          📧
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
