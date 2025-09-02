// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Reports from "./components/Reports";
import SecondOpinion from "./components/SecondOpinion";
import SoShowcase from "./components/SoShowcase";
import SuccessStories from "./components/SuccessStories";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      {/* reserve space for fixed header (64px) */}
      <main style={{ paddingTop: 0 }}>
        <Hero />

        {/* About section added right below Hero */}
        <About />

        <Reports />

        <SecondOpinion />

        <SoShowcase />

        <SuccessStories /> {/* <-- new component inserted here */}

        <Faqs />

        <Testimonials />

        <Insights />

        <Footer />
      </main>
    </>
  );
}

export default App;
