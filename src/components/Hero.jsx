import React from "react";
import myavatar from "../assets/images/myavatar.jpeg";
import "../assets/stylesheets/topnav.css";
import { BsEmojiLaughing } from "react-icons/bs";

export const Hero = () => {
  return (
    <div>
      {/* <div class="butterfly">
        <div class="wing">
          <div class="bit"></div>
          <div class="bit"></div>
        </div>
        <div class="wing">
          <div class="bit"></div>
          <div class="bit"></div>
        </div>
      </div> 
      <div class="shadow"></div>*/}

      <div className="my_name">
        <div className="avatar_wrapper">
          <img src={myavatar} alt=".." className="avatar" />
        </div>
        <div className="prename">
          Hello <BsEmojiLaughing /> I am,
        </div>
        <div className="letter name">A</div>
        <div className="letter name">d</div>
        <div className="letter name">i</div>
        <div className="letter name">t</div>
        <div className="letter name">y</div>
        <div className="letter name">a</div>
        <div className="letter name">_</div>
        <div className="letter name">R</div>
        <div className="letter name">a</div>
        <div className="letter name">y</div>
        <div className="postname">
          A FullStack Web Developer. I create beautiful and functional Web Apps
          that lives on internet.
        </div>
        <button className="mybtn">
          <a href="mailto:aditya90005@gmail.com">Say Hi</a>
        </button>
        <div className="btn_wrap"></div>
      </div>
    </div>
  );
};
