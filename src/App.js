import About from "./components/About";
import Bike from "./components/Bike";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Hero from "./components/Hero";
import How from "./components/How";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Rent from "./components/Rent";
import Review from "./components/Review";
import Signup from "./components/Signup";
import UserStatus from "./components/UserStatus";

// import { fin } from "./utils/api";

function App() {
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
      <Footer />
      <Signup />
      <Login />
      <UserStatus />
      <Bike />
      {/* <Help /> */}
    </div>
  );
}

export default App;
