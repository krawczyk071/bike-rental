import React from "react";
import Bike from "../components/Bike";
import { useParams } from "react-router-dom";

const More = () => {
  const { id } = useParams();
  return (
    <section className="layout-lg">
      <Bike id={id} />
    </section>
  );
};

export default More;
