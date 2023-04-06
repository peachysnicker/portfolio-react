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
        <h2 className="reveal">About Me</h2>
        <h3 className="reveal">Let me introduce myself!</h3>
        <h6 className="reveal">
          My name is Mariah Feser, I am a full-stack developer from British
          Columbia, Canada.
        </h6>
        <h6 className="reveal">
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        </h6>
      </div>
    </div>
  );
};

export default AboutMe;
