import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Specializing from "./components/Specializing";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Recommendations/>
      <Footer/>
    </div>
  );
};
export default App;
