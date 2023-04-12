import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Navbar from "./components/Navbar";
import Rent from "./components/Rent";
import Review from "./components/Review";

import { getFire } from "./utils/firebase";

function App() {
  getFire().then((res) => console.log(res));
  return (
    <div className="App">
      <Navbar />
      <section class="layout-lg">
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
