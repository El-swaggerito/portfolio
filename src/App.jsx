import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";

const App = () => {
  return (
    <main className=" mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
