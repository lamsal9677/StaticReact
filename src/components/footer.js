import React from "react";

import fb from "../images/fb.png";
import ig from "../images/ig.png";
import yt from "../images/yt.png";
import tw from "../images/tw.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={fb} alt="" className="footer--img" />
      <img src={ig} alt="" className="footer--img" />
      <img src={yt} alt="" className="footer--img" />
      <img src={tw} alt="" className="footer--img" />
    </div>
  );
}
