import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ToTop from "./components/ToTop.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
