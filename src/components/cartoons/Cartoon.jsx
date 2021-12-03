import React from "react";

const Cartoon = ({ title, year, image }) => {
  return (
    <li>
      <h1>
        {title} <small>({year})</small>
      </h1>
      <img src={image} alt={title} width="200" />
    </li>
  );
};

export default Cartoon;
