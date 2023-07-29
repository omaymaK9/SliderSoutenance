

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Logementsdata from "./Logementsdata";
import Dropdown from "./Menu";
import Error404 from "./Error404";
import Slider from "./Slider";

const LogementContent = () => {
  const { id } = useParams();
  const logementsData = Logementsdata();
  const logement = logementsData.find((logement) => logement.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!logement) {
    return <Error404 />;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1
    );
  };

  const hostnamearray = logement.host.name.split(" ");

  return (
    <div className="housing-content">
      <div className="carrousel-position">
        {/* Ajouter une vérification pour s'assurer que logement.pictures existe */}
        {logement.pictures && logement.pictures.length > 0 ? (
          <Slider pictures={logement.pictures} />
        ) : (
          <p>Aucune image disponible.</p>
        )}
      </div>
      <div className="infos-position">
        <div className="logement-infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="host-and-rate">
          <div className="host-infos">
            <div className="host-name">
              <p>{hostnamearray[0]}</p>
              <p>{hostnamearray[1]}</p>
            </div>
            <img src={logement.host.picture} alt="" />
          </div>
          <div className="rate">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                src={
                  index < logement.rating
                    ? "./img/star-active.png"
                    : "./img/star-inactive.png"
                }
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="housing-dropdown">
        <Dropdown title="Description">
          <p>{logement.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
};

export default LogementContent;
