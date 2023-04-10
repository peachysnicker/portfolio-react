const Landing = () => {
  return (
    <div>
      <img
        id="landing"
        src="./images/landing-image.png"
        width="100%"
        height="5%"
        className="d-inline-block align-top d-flex justify-content-start"
        alt="Mariah's Landing"
      />
      <h6 className="centered">Mariah Feser</h6>
      <p className="centered-subtext">Full-Stack Developer</p>
      <div className="bounce">
        <a href="#about">
          <i className="arrow"></i>
        </a>
      </div>
    </div>
  );
};

export default Landing;
