import "./Index.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/AboutMe";

// What will be my main component to reference other React components?
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
    </>
  );
}

export default App;
