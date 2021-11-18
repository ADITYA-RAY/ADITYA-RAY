import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiCodechef } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export const Contact = () => {
  return (
    <div>
      <div className="about_wrapper conwrap" id="contact">
        <div className="heading" style={{ textAlign: "center" }}>
          <Fade bottom>Get in Touch</Fade>
        </div>
        <br />
        <p className="conpar">
          <center>
            <Fade bottom>
              Want to collaborate or just want to interact with me? Feel free to
              reach me anytime. I will try my best to help.
            </Fade>
          </center>
        </p>
        <br />
        <div className="contact_tab">
          <div className="contact_item">
            <center>
              <div className="mybtn conbtn">
                <Fade bottom>
                  <a href="mailto:aditya90005@gmail.com"> Say Hi</a>
                </Fade>
              </div>
            </center>
          </div>
        </div>
        <br />
        <br />
        <Fade bottom>
          <p className="conpar lst">Designed & Developed by Aditya Ray</p>
        </Fade>
        <br />
        <Fade bottom>
          <p className="conpat lst vlst">
            <a href="https://github.com/ADITYA-RAY">
              <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/aditya-ray-4b6062202/">
              <SiLinkedin />
            </a>

            <a href="https://www.instagram.com/meadityaray/">
              <SiInstagram />
            </a>

            <a href="https://www.codechef.com/users/adityray/">
              <SiCodechef />
            </a>

            <a href="https://codepen.io/aditya-ray-the-selector">
              <FaCodepen />
            </a>
          </p>
        </Fade>
        <br />
      </div>
    </div>
  );
};
