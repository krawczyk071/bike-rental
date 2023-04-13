import React from "react";

const How = () => {
  return (
    <div className="how">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div className="how__three">
        <div className="how__card">
          <div className="how__icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            doloremque!
          </p>
        </div>
        <div className="how__card">
          <div className="how__icon">
            <i className="fa-regular fa-calendar"></i>
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            doloremque!
          </p>
        </div>
        <HowCard />
      </div>
    </div>
  );
};

export default How;

const HowCard = () => {
  return (
    <div className="how__card">
      <div className="how__icon">
        <i className="fa-solid fa-calendar-check"></i>
      </div>
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
        doloremque!
      </p>
    </div>
  );
};
