// Import the components from AboutMe and Header and FOOTER(UNCREATED)
import AboutMe from "../components/AboutMe";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer"; //Dont forget to name Footer.js

const AboutMe = () => {
  return (
    <section>
      <PageHeader title="About Mariah" description="Nice to meet you!" />
      {/* Will it render the entire About Me just putting it like below */}
      <AboutMe />
    </section>
  );
};

export default AboutMe;
