import React from "react";
import email from "../../images/email.png";

export default function EmailButton() {
  return (
    <div className="buttons--email">
      <img src={email} alt="" className="buttons--email--logo" />
      <div className="buttons--email--text">Email</div>
    </div>
  );
}
