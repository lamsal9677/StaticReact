import React from "react";
import li from "../../images/li.png";

export default function LinkedinButton() {
  return (
    <div className="buttons--li">
      <img src={li} alt="" className="buttons--li--logo" />
      <div className="buttons--li--text">Linkedin</div>
    </div>
  );
}
