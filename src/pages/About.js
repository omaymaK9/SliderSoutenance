import React from "react";
import Navigation from "../composant//Navigation";
import Footer from "../composant/Footer";
import Aboutcontent from "../composant/Aboutcontent";

const About = () => {
  return (
    <div className="page-position">
      <Navigation />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default About;
