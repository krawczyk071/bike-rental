import React from "react";

const Hero = () => {
  return (
    <div class="bg-wrapper">
      <div class="hero">
        <div class="hero__text">
          <h1>
            Looking to <span>rent</span> a bike
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            molestias.
          </h2>
          <button class="btn hero__btn">Join free</button>
        </div>
        <div class="hero__photo">
          <img src="./img/bk4.png" alt="heros" />
        </div>
      </div>
      <div class="calendar">
        <div class="calendar__form shadow-sm">
          <label for="a">Location:</label>
          <input id="a" type="text" class="ipt" />
          <label for="b">Pickup date:</label>
          <input id="b" type="date" class="ipt" />
          <label for="c">Return Date:</label>
          <input id="c" type="date" class="ipt" />
          <button class="btn btn__primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
