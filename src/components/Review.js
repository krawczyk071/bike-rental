import React from "react";

const Review = () => {
  return (
    <div className="review">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div className="review__three">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Review;

const ReviewCard = () => {
  return (
    <div className="review__card shadow-sm">
      <div className="review__head">
        <img src="./img/rev2.jpg" alt="" />
      </div>
      <h2>ipsum dolor</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
        architecto ratione laborum. Sunt voluptate, voluptatum illum excepturi
        officia obcaecati vitae provident necessitatibus quo eius, totam fuga
        repudiandae atque. Eius debitis ut odio animi quam assumenda, harum
        voluptatem ad ipsam soluta aut? Nobis commodi, in ipsam consequatur
        aspernatur minima similique! Alias.
      </p>
    </div>
  );
};
