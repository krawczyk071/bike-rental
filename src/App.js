import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Rent from "./components/Rent";
import Review from "./components/Review";
import Signup from "./components/Signup";
import UserStatus from "./components/UserStatus";

import { getFire, getSelected } from "./utils/firebase";
// import { fin } from "./utils/api";

function App() {
  getFire().then((res) => console.log(res));
  getSelected().then((res) => console.log(res));

  return (
    <div className="App">
      <Navbar />
      <section className="layout-lg">
        <Hero />
        <How />
        <Rent />
        <About />
        <Review />
      </section>
      {}
      <Footer />
      <Signup />
      <Login />
      <UserStatus />
    </div>
  );
}

export default App;
