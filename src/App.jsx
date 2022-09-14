import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Header />
      <Card />
      <Banner />
      <Contact />
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
