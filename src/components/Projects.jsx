import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
import lemin from "../assets/images/lemin.png";
import affpc from "../assets/images/aff.png";
import cspc from "../assets/images/cspc.png";
export const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <div className="project_wrapper" id="projects">
        <div className="heading">What things have I made?</div>
        <br />
        <Row>
          <Col xs={12} md={6}>
            <img src={cspc} alt="cspc" className="project_pc" />
          </Col>
          <Col xs={12} md={6}>
            <a href="https://adityaray.netlify.app" target="_blank">
              <div className="pro_c"> CODESPARK</div>
            </a>
            <div className="pro_card">
              An learning portal for developers and programmers!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <div className="project_wrapper">
        <Row>
          <Col xs={12} md={6}>
            <a href="https://adityaforging.com" target="_blank">
              <div className="pro_c_r">ADITYA FORGING</div>
            </a>
            <div className="pro_card_r" style={{ zIndex: "2" }}>
              Website for a Manufacturing Company!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col style={{ zIndex: "-1" }} xs={12} md={6}>
            <img src={affpc} alt="cspc" className="project_pc_l" />
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />

      <div className="project_wrapper">
        <Row>
          <Col xs={12} md={6}>
            <img src={lemin} alt="cspc" className="project_pc" />
          </Col>
          <Col xs={12} md={6}>
            <a href="https://lemmebuy.in/" target="_blank">
              <div className="pro_c">LEMMEBUY</div>
            </a>
            <div className="pro_card one">
              An E-Commerce shopping destination powering local vendors!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* --------------------------------- */}
      <br />
      <br />
      <br />
      <br />

      <div className="project_wrapper">
        <Row>
          <div className="heading">My Other Projects,</div>
          <br />

          <br />
          <br />
          <Col xs={12} md={4}>
            <a href="https://robotix.nitrr.ac.in" target="_blank">
              <div className="pro_c ch1">ROBOTIX</div>
            </a>
            <div className="pro_card_o c1">
              Robotix Club NIT Raipur's official website!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <a
              href="https://aditya-ray.github.io/woofy-frontend/"
              target="_blank"
            >
              <div className="pro_c ch2">WOOFY</div>
            </a>
            <div className="pro_card_o c2">
              An IOT based infant monitoring system!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <a href="https://fudview.netlify.app" target="_blank">
              <div className="pro_c ch3">FUDVIEW</div>
            </a>
            <div className="pro_card_o c3">
              Online menu for best dining experience!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} md={4}>
            <a href="https://typerr.netlify.app" target="_blank">
              <div className="pro_c ch4">TYPERR</div>
            </a>
            <div className="pro_card_o c4">
              Touch typing help with typing speed calculator!
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <a href="https://calceasy.netlify.app" target="_blank">
              <div className="pro_c ch5">CALCEASY</div>
            </a>
            <div className="pro_card_o c5">
              Industrial Metal Weight Calculator for ease to small buisiness
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <a href="http://icpc2t.nitrr.ac.in" target="_blank">
              <div className="pro_c ch6">ICPC2T</div>
            </a>
            <div className="pro_card_o c6">
              Conference on power, control and soft computing technologies.
              <div className="web_links">
                <a href="https://github.com/ADITYA-RAY">
                  <SiGithub />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
