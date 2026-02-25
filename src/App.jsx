import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer /> {/* Footer only here */}
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;