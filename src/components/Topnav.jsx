import React from "react";
import "../assets/stylesheets/topnav.css";

export const Topnav = () => {
  // var t1 = 800;
  // var t2 = 1300;
  // var t3 = 700;
  // var t4 = 500;
  var status = false;
  const openMenu = () => {
    document.querySelector("#menu_btn").classList.toggle("change");
    var ele = document.querySelector(".wrap_out").style;
    var wrapin = document.querySelector(".wrap_in").style;
    var content = document.querySelector(".wrap_content").style;
    var links = document.getElementsByClassName("navlink");
    if (status === false) {
      status = true;
      ele.width = "100%";
      setTimeout(function () {
        content.display = "block";
        wrapin.height = "300%";
        wrapin.width = "300%";
        wrapin.top = "-150%";
        wrapin.right = "-150%";
      }, 800);
      setTimeout(function () {
        for (var i = 0; i < 5; i++) {
          links[i].style.marginLeft = "0%";
        }
      }, 1300);
    } else {
      status = false;
      for (var i = 0; i < 5; i++) {
        links[i].style.marginLeft = "-100%";
      }

      wrapin.height = "0%";
      wrapin.width = "0%";
      wrapin.top = "0%";
      wrapin.right = "0%";
      setTimeout(function () {
        content.display = "none";
      }, 700);
      setTimeout(function () {
        ele.width = "0%";
      }, 500);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          openMenu();
        }}
        id="menu_btn"
        className="menu_button"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
      <div className="wrap_out">
        <div className="wrap_in"></div>

        <div className="wrap_content">
          <div className="navlink">
            <a
              href="/"
              onClick={() => {
                openMenu();
              }}
            >
              <div className="letter">H</div>
              <div className="letter">o</div>
              <div className="letter">m</div>
              <div className="letter">e</div>
            </a>
          </div>
          <div className="navlink">
            <a
              href="#about"
              onClick={() => {
                openMenu();
              }}
            >
              <div className="letter">A</div>
              <div className="letter">b</div>
              <div className="letter">o</div>
              <div className="letter">u</div>
              <div className="letter">t</div>
            </a>
          </div>
          <div className="navlink">
            <a
              href="#projects"
              onClick={() => {
                openMenu();
              }}
            >
              <div className="letter">P</div>
              <div className="letter">r</div>
              <div className="letter">o</div>
              <div className="letter">j</div>
              <div className="letter">e</div>
              <div className="letter">c</div>
              <div className="letter">t</div>
              <div className="letter">s</div>
            </a>
          </div>
          <div className="navlink">
            <a
              href="#toolbag"
              onClick={() => {
                openMenu();
              }}
            >
              <div className="letter">T</div>
              <div className="letter">o</div>
              <div className="letter">o</div>
              <div className="letter">l</div>
              <div className="letter">b</div>
              <div className="letter">a</div>
              <div className="letter">g</div>
            </a>
          </div>
          <div className="navlink">
            <a
              href="#contact"
              onClick={() => {
                openMenu();
              }}
            >
              <div className="letter">C</div>
              <div className="letter">o</div>
              <div className="letter">n</div>
              <div className="letter">t</div>
              <div className="letter">a</div>
              <div className="letter">c</div>
              <div className="letter">t</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
