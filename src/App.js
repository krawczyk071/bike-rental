import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import More from "./pages/More";
import User from "./pages/User";
import Order from "./pages/Order";
import Layout from "./components/Layout";
import UserLayout from "./components/UserLayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Details from "./components/Details";
import MorePhotos from "./components/MorePhotos";
import Pricing from "./components/Pricing";

function App() {
  const currentUser = false;
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user" />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/bike/:id" element={<Details />}>
              <Route index element={<More />} />
              <Route path="moreinfo" element={<MorePhotos />} />
              <Route path="price" element={<Pricing />} />
            </Route>
            <Route
              path="/order"
              element={
                <RequireAuth>
                  <Order />
                </RequireAuth>
              }
            />
            <Route path="user" element={<UserLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
