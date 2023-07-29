import React from "react";
import Navigation from "../composant/Navigation";
import Error404 from "../composant/Error404";
import Footer from "../composant/Footer";

const Errorpage = () => {
  return (
    <div className="page-position">
      <Navigation />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Errorpage;
