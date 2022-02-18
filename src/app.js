import React from "react";
import HeadShot from "./components/headshot";
import MainBody from "./components/mainbody";
import Footer from "./components/footer";

//Making a simple change for the PR
export default function App() {
  return (
    <div className="main">
      <HeadShot />
      <HeadShot />

      <MainBody />
      <Footer />
    </div>
  );
}
