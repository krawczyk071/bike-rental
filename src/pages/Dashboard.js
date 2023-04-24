import React, { useContext, useEffect, useState } from "react";
import UserStatus from "../components/UserStatus";
import { AuthContext } from "../context/AuthContext";
import { editBike, editUser, getFire, getOne } from "../utils/firebase";
import EditCard from "../components/EditCard";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  const [userData, setUserData] = useState({ data: [], loading: true });
  const [allBikes, SetAllBikes] = useState({ data: [], loading: true });
  const [wait, SetWait] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getOne("users", uid).then((data) =>
      setUserData({ data: data, loading: false })
    );
  }, [uid]);

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
  async function handleReturn(bike) {
    SetWait(true);
    const oldUser = await getOne("users", currentUser.uid);

    const newBike = { ...bike, status: "ready" };
    const newUser = {
      ...oldUser,
      bikes: oldUser.bikes.filter((b) => b.id !== bike.id),
    };
    await editBike(newBike);
    await editUser(newUser);
    navigate("/order", {
      state: { msg: `Succesfully renturned bike : ${newBike.id}` },
    });
  }
  return (
    <div className="dashboard layout-lg">
      <Logout admin={userData.data.admin} />
      {!allBikes.loading && !userData.loading && (
        // console.log(userData)
        <>
          <h2>Bikes rented: </h2>
          {userData.data.bikes.length ? (
            <div className="rented__cards">
              {userData.data.bikes.map((b) => {
                return (
                  <div className="rented__card">
                    <Card item={b} />
                    <button className="btn" onClick={() => handleReturn(b)}>
                      {wait ? "Wait.." : "Return"}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2>No bikes currently rented.</h2>
          )}
        </>
      )}

      {!allBikes.loading && !userData.loading && userData.data.admin && (
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
    </div>
  );
};

export default Dashboard;
