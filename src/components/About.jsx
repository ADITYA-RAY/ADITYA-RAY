import React from "react";
import Fade from "react-reveal/Fade";
export const About = () => {
  return (
    <div>
      <div className="about_wrapper" id="about">
        <Fade bottom>
          <div className="heading">Something About Me,</div>
        </Fade>
        <Fade bottom>
          <p>
            Although I am a full stack Web developer, I love making beautiful
            UI's the most. Web Developement is more of a hobby than a profession
            for me.
          </p>
          <p>
            I have worked with a vast set of web technologies over the period of
            an year since I started learning to make websites.
          </p>
          <p>
            The opportunity to learn something new every day is what acts as a
            fuel that drives me forward.
          </p>
        </Fade>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
