import styles from "./App.css";
import { About } from "./Components/About/About";
import { Contacts } from "./Components/Contacts/Contacts";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts/>
    </div>
  );
}
export default App;