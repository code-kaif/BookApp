import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen md:mb-0 mb-24">
        <AboutMe />
      </div>
      <Footer />
    </>
  );
};

export default About;
