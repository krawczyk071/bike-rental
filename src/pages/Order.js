import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const { d } = useSearchParams();
  console.log(d);
  return (
    <div className="order">
      {/* <h2>Thank you for your order</h2> */}
      <h1>{location.state?.msg}</h1>
    </div>
  );
};

export default Order;
