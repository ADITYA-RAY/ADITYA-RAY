import React from "react";

export const Glow = () => {
  const onMouseMove = (e) => {
    let circle = document.getElementById("cursor");
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };
  document.addEventListener("mousemove", onMouseMove);
  return (
    <div>
      <div className="cursor" id="cursor"></div>
    </div>
  );
};
