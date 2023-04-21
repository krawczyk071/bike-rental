import React from "react";

const Hero = () => {
  return (
    <div className="bg-wrapper">
      <div className="hero">
        <div className="hero__text">
          <h1>
            Looking to <span>rent</span> a bike?
          </h1>
          <h2>
            Rent and explore the world around you, while reducing your carbon
            footprint and staying active.
          </h2>
          <button className="btn hero__btn">Join free</button>
        </div>
        <div className="hero__photo">
          <img src="./img/bk4.png" alt="heros" />
        </div>
      </div>
      <div className="calendar">
        <div className="calendar__form shadow-sm">
          <label htmlFor="a">Location:</label>
          <input id="a" type="text" className="ipt" />
          <label htmlFor="b">Pickup date:</label>
          <input id="b" type="date" className="ipt" />
          <label htmlFor="c">Return Date:</label>
          <input id="c" type="date" className="ipt" />
          <button className="btn btn__primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
