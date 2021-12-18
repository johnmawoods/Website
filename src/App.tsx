import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Projects";

const App:React.FC = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
