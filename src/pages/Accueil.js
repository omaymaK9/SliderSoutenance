import React from "react";
import Navigation from "../composant/Navigation.js";
import Footer from "../composant/Footer.js";
import AccueilContent from "../composant/AccueilContent.js";

const Acceuil = () => {
  return (
    <div className="page-position">
      <Navigation />
      <AccueilContent />
      <Footer />
    </div>
  );
};

export default Acceuil;
