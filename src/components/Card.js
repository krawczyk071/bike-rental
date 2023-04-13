import React from "react";

const Card = () => {
  return (
    <div className="rent__card shadow-sm">
      <div className="rent__photo">
        <img src="./img/rev1.jpg" alt="" />
      </div>
      <p className="rent__badge">Lorem, ipsum.</p>
      <h2>Lorem, ipsum.</h2>
      <p className="rent__text">Lorem ipsum dolor sit amet consectetur.</p>
      <button className="btn btn__primary">Select</button>
    </div>
  );
};

export default Card;
