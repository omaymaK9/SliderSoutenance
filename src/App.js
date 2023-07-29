import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Errorpage from "./pages/Errorpage";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Logement from "./pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
/* creation des routes pour chaque fichier*/ 