import "./App.scss";
import "../src/assets/scripts/cursor.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Topnav } from "./components/Topnav";
import { Backdrop } from "./helpers/Backdrop";
import { Hero } from "./components/Hero";
import { Backdrop1 } from "./helpers/Backdrop1";
import { Backdrop2 } from "./helpers/Backdrop2";
import { Glow } from "./components/Glow";
import { Game } from "./components/Game";
import { About } from "./components/About";
import { Toolbag } from "./components/Toolbag";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Hero />
      <Backdrop />
      <Backdrop1 />
      <Backdrop2 />
      <Topnav />
      <Glow />
      <Game />
      <About />
      <Toolbag />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
