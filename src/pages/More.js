import React from "react";
import Bike from "../components/Bike";
import { useOutletContext, useParams } from "react-router-dom";

const More = () => {
  // const { id } = useParams();
  const bike = useOutletContext();

  return (
    <section className="layout-lg">
      <Bike bike={bike} />
    </section>
  );
};

export default More;
