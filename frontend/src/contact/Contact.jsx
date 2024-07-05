import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MessegeMe from "../components/MessegeMe";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <MessegeMe />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
