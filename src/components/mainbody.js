import React from "react";

import About from "./mainbody/about";
import EmailButton from "./mainbody/emailbutton";
import LinkedinButton from "./mainbody/LinkedInbutton";
import Name from "./mainbody/name";

export default function MainBody() {
  return (
    <div className="mainbody">
      <Name />
      <div className="buttons">
        <EmailButton />
        <LinkedinButton />
      </div>
      <About />
    </div>
  );
}
