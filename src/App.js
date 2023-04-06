import "./Index.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/AboutMe";
import Form from "./components/Form";
import Footer from "./components/Footer";

// What will be my main component to reference other React components?
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default App;
