import React from "react";

const How = () => {
  return (
    <div class="how">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div class="how__three">
        <div class="how__card">
          <div class="how__icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            doloremque!
          </p>
        </div>
        <div class="how__card">
          <div class="how__icon">
            <i class="fa-regular fa-calendar"></i>
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
    <div class="how__card">
      <div class="how__icon">
        <i class="fa-solid fa-calendar-check"></i>
      </div>
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
        doloremque!
      </p>
    </div>
  );
};
