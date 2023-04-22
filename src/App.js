import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/bike/:id" element={<Details />}>
              <Route index element={<More />} />
              <Route path="morephotos" element={<MorePhotos />} />
            </Route>
            <Route path="/order" element={<Order />} />
            <Route path="user" element={<UserLayout />}>
              <Route index element={<User />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
