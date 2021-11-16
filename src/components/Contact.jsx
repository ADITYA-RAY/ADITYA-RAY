import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiCodechef } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <div className="about_wrapper conwrap" id="contact">
        <div className="heading" style={{ textAlign: "center" }}>
          Get in Touch
        </div>
        <br />
        <p className="conpar">
          <center>
            Want to collaborate or just want to interact with me? Feel free to
            reach me anytime. I will try my best to help.
          </center>
        </p>
        <br />
        <div className="contact_tab">
          <div className="contact_item">
            <center>
              <div className="mybtn conbtn">
                <a href="mailto:someone@example.com"> Say Hi</a>
              </div>
            </center>
          </div>
        </div>
        <br />
        <br />

        <p className="conpar lst">Designed & Developed by Aditya Ray</p>

        <br />
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
        <br />
      </div>
    </div>
  );
};
