import React from "react";

const Card = () => {
  return (
    <div class="rent__card shadow-sm">
      <div class="rent__photo">
        <img src="./img/rev1.jpg" alt="" />
      </div>
      <p class="rent__badge">Lorem, ipsum.</p>
      <h2>Lorem, ipsum.</h2>
      <p class="rent__text">Lorem ipsum dolor sit amet consectetur.</p>
      <button class="btn btn__primary">Select</button>
    </div>
  );
};

export default Card;
