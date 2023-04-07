// Nothing to import for now - possibly images later

const AboutMe = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();

  return (
    <div id="about" className="aboutContainer">
      <div>
        {/* <h2 className="reveal">About Me</h2> */}
        <h3 className="reveal1 aboutTitle">Let me introduce myself!</h3>
        <p className="reveal aboutSubTitle">
          My name is Mariah Feser, I am a full-stack developer from British
          Columbia, Canada.
        </p>
        <h6 className="reveal aboutText">
          From almost a decade in the beauty industry as an owner and operator,
          it was time to switch gears. Although the love of doing permanent
          cosmetic tattoos is still strong, the search for a more mentally
          challenging career landed myself in the world of software and web
          development. This new world seems to have no end in sight of the
          possibilities of learning and forward thinking. <br></br> Thank you
          for taking the time to visit my react portfolio and I look forward to
          chatting soon!
        </h6>
      </div>
    </div>
  );
};

export default AboutMe;
