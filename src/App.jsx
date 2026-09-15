import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Users from "./components/Users";
import Features from "./components/Features";
import Benefit from "./components/Benefit";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Partners />
        <Users />
        <Features />
        <Benefit />
        <Testimonial />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;