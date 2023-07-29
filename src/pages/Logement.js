import React from "react";
import Footer from "../composant/Footer";
import Navigation from "../composant/Navigation";
import LogementContent from "../composant/LogementContent";

import Slider from "../composant/Slider";

const Logement = () => {
  return (
    <div className="page-position">
      <Navigation />
      <LogementContent />
      <Footer />
    </div>
  );
};

export default Logement;
