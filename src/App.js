import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      <Navbar navHandler={navHandler} nav={nav} />
      <Hero nav={nav} />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
