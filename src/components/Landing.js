const Landing = () => {
  return (
    <section>
      <img
        id="landing"
        src="./images/landing-image.png"
        width="100%"
        height="5%"
        className="d-inline-block align-top d-flex justify-content-start"
        alt="Mariah's Landing"
      />
      <div>
        <h6 className="centered">Mariah Feser</h6>
        <p className="centered-subtext">Full-Stack Developer</p>
        <div className="bounce">
          <a href="#about">
            <i className="arrow"></i>
          </a>
        </div>
        <div class="socials">
          <a
            href="https://github.com/peachysnicker"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/github-icon-white.png" alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mariah-feser-ab8250243/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/linked-in-icon-white.png" alt="Linked In icon" />
          </a>
          <a
            href="https://www.instagram.com/mariah.feser/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/instagram-white-icon.png" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
