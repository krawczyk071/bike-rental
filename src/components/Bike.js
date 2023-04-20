import React from "react";
import { one } from "../utils/data";

const Bike = () => {
  const [imgFirst, ...imgRest] = one.images;
  const tags = Object.entries(one.filter).map((a) => <span>{a[1]} </span>);
  //    Array.from(one.filter).map((a) => <span>{afterAll}</span>);
  return (
    <div className="bike">
      <h1>{one.title}</h1>
      <div className="bike__tags">{tags}</div>
      <div className="bike__imgfirst">
        <img src={imgFirst + "?wid=600"} alt="" />
      </div>
      <div className="bike__imgrest">
        {imgRest.map((i) => (
          <img src={i + "?wid=200"} alt="" />
        ))}
      </div>
      <h1>Price: {one.price}</h1>
      <h2>
        RATING: {one.rating} ({one.rating_count})
      </h2>
      <div
        className="bike__desc"
        dangerouslySetInnerHTML={{ __html: one.downstream_description }}
      ></div>
      <br />

      <div className="bike__soft">
        <ul>
          {one.bullets.map((b) => (
            <li>{b}</li>
          ))}
        </ul>
      </div>
      <br />
      <div className="bike__bull">
        {" "}
        <ul>
          {one.bullet_descriptions.map((b) => (
            <li dangerouslySetInnerHTML={{ __html: b }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bike;
