import React, { useContext, useEffect, useState } from "react";
import UserStatus from "../components/UserStatus";
import { AuthContext } from "../context/AuthContext";
import { editBike, getFire, getOne } from "../utils/firebase";
import Card from "../components/Card";

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  const [userData, setUserData] = useState("");
  useEffect(() => {
    getOne("users", uid).then((data) => setUserData(data));
  }, [uid]);

  const [allBikes, SetAllBikes] = useState({ data: [], loading: true });

  useEffect(() => {
    getFire().then((data) => SetAllBikes({ data, loading: false }));
  }, []);

  // const [edit, setEdit] = useState("");
  function handleChange(e, a) {
    SetAllBikes((prev) => {
      return {
        ...prev,
        data: prev.data.map((d) => {
          if (d.tcin === a.tcin) {
            return { ...d, [e.target.id]: e.target.value };
          } else {
            return d;
          }
        }),
      };
    });
  }
  function handleEdit(a) {
    editBike(a);
  }
  return (
    <div className="dashboard layout-lg">
      <h2>Access level:{userData.admin ? "admin" : "standard"}</h2>
      <h2>Bikes rented:{userData.bikes}</h2>

      {!allBikes.loading && userData.admin && (
        <div className="dashboard__cards">
          {allBikes.data.map((a) => (
            <div className="dashboard__edit">
              <Card item={a} />
              <input
                type="text"
                placeholder="price"
                id="price"
                value={a.price}
                onChange={(e) => handleChange(e, a)}
              />
              <input
                type="text"
                placeholder="pricecat"
                id="pricecat"
                value={a?.pricecat}
                onChange={(e) => handleChange(e, a)}
              />
              <input
                type="text"
                placeholder="status"
                id="status"
                value={a.status}
                onChange={(e) => handleChange(e, a)}
              />
              <button onClick={() => handleEdit(a)}>OK</button>
            </div>
          ))}
        </div>
      )}
      <UserStatus />
    </div>
  );
};

export default User;
