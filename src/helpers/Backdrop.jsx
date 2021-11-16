import React, { useEffect } from "react";

export const Backdrop = () => {
  useEffect(() => {
    var main = document.getElementById("main_wrapper");
    var no = 200;

    for (var i = 0; i < no; i++) {
      main.innerHTML += "<div class='dots'>.</div>";
    }

    var direction = "";
    var oldx = 0;
    var oldy = 0;
    const mousemovemethod = function (e) {
      if (e.pageX > oldx && e.pageY === oldy) {
        direction = "East";
      } else if (e.pageX === oldx && e.pageY > oldy) {
        direction = "South";
      } else if (e.pageX === oldx && e.pageY < oldy) {
        direction = "North";
      } else if (e.pageX < oldx && e.pageY === oldy) {
        direction = "West";
      }
      oldx = e.pageX;
      oldy = e.pageY;
      if (direction === "West") {
        main.style.transform = "translateX(20px)";
      } else if (direction === "East") {
        main.style.transform = "translateX(-20px)";
      } else if (direction === "North") {
        main.style.transform = "translateY(20px)";
      } else if (direction === "South") {
        main.style.transform = "translateY(-20px)";
      }
    };
    document.addEventListener("mousemove", mousemovemethod);
  });
  return <div className="main_wrapper" id="main_wrapper"></div>;
};
