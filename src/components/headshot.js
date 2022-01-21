import React from "react";
import pp from "../images/headsht.jpg";
console.log(pp);
export default function HeadShot() {
  return (
    <div className="headshot">
      <img src={pp} alt="" className="headshot" />
    </div>
  );
}
