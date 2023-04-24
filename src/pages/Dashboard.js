import React, { useContext, useEffect, useState } from "react";
import UserStatus from "../components/UserStatus";
import { AuthContext } from "../context/AuthContext";
import { editBike, getFire, getOne } from "../utils/firebase";
import EditCard from "../components/EditCard";

const Dashboard = () => {
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
    alert("Bike data updated");
  }
  return (
    <div className="dashboard layout-lg">
      <h2>Access level: {userData.admin ? "admin" : "standard"}</h2>
      {!userData.admin && (
        <>
          <h2>Bikes rented: </h2>
          {userData.bikes ? (
            <h2> You have rented bike no: {userData.bikes.id}</h2>
          ) : (
            <h2>No bikes currently rented.</h2>
          )}
        </>
      )}

      {!allBikes.loading && userData.admin && (
        <>
          <h2>Manage Inventory:</h2>

          <div className="dashboard__cards">
            {allBikes.data.map((a) => (
              <EditCard
                bike={a}
                handleChange={handleChange}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </>
      )}
      <UserStatus />
    </div>
  );
};

export default Dashboard;
