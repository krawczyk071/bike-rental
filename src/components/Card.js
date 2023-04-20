import React from "react";

const Card = ({ item }) => {
  const img = item.images[0] + "?wid=200";
  const tags = Object.entries(item.filter).map((a) => <span>{a[1]} </span>);

  return (
    <div className="rent__card shadow-sm">
      <div className="rent__photo">
        <img src={img} alt="" />
      </div>
      <p className="rent__badge">Lorem, ipsum.</p>
      <h2>{item.title}</h2>
      <p className="rent__text">{tags}</p>
      <button className="btn btn__primary">Select</button>
    </div>
  );
};

export default Card;
