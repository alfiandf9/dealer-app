import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Header />
      <Card />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
