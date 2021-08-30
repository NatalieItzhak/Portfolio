import React from "react";

const Tile = ({ title, mediumTitle, desc, desc2 }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="mtb-10"
      style={{ background: "#fff", padding: "25px", width: "300px" }}
    >
      <p className="primaryColor font-18 bold-500 mtb-10 uppercase">{title}</p>
      <p className="textColor font-16 bold-600 mtb-10 uppercase">
        {mediumTitle}
      </p>
      <p className="grey font-14 mtb-10 ">{desc}</p>
      <p className="grey font-14 mtb-10 ">{desc2}</p>
    </div>
  );
};

export default Tile;
