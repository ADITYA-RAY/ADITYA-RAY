import React from "react";
import { FaReact, FaVuejs } from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  SiGithub,
  SiSass,
} from "react-icons/si";
import Fade from "react-reveal/Fade";

export const Toolbag = () => {
  return (
    <div>
      <div className="about_wrapper" id="toolbag">
        <Fade bottom>
          <div className="heading">My Toolbag,</div>
        </Fade>
        <Fade bottom>
          <p>
            As different projects requires different set of technologies, I keep
            exploring new tools regularly to keep myself updated to the world.
            Some of the noteworthy technologies used by me are,
          </p>
        </Fade>
        <br />
        <br />
        <Fade bottom>
          <div className="icon" style={{ color: "#e34c26" }}>
            <SiHtml5 />
          </div>
          <div className="icon" style={{ color: "  #264de4" }}>
            <SiCss3 />
          </div>
          <div className="icon" style={{ color: "#f0db4f" }}>
            <SiJavascript />
          </div>
          <div className="icon" style={{ color: "#7cc5d9" }}>
            <FaReact />
          </div>
          <div className="icon" style={{ color: "#42b883" }}>
            <FaVuejs />
          </div>
          <div className="icon" style={{ color: "#563d7c" }}>
            <SiBootstrap />
          </div>
          <div className="icon" style={{ color: "#cc6699" }}>
            <SiSass />
          </div>
          <div className="icon" style={{ color: "#4584b6" }}>
            <SiPython />
          </div>
          <div className="icon" style={{ color: "#092e20" }}>
            <SiDjango />
          </div>
          <div className="icon">
            <SiGithub />
          </div>
        </Fade>
      </div>
      <br />
      <br />
    </div>
  );
};
