import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Navbar from "./components/Navbar";
import Rent from "./components/Rent";
import Review from "./components/Review";

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
    </div>
  );
}

export default App;
