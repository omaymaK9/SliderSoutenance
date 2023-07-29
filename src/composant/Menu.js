import React, { useState } from "react";

const Dropdown = ({ title, content, children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className={`dropdown ${openDropdown ? "open" : "close"}`}>
      <div className="dropdown_bar">
        <h1>{title}</h1>
        <img src="./img/arrow_icon.png" alt="flèche" onClick={toggleDropdown} />
      </div>
      <div className="dropdown_content">{children}</div>
    </div>
  );
};

export default Dropdown;
