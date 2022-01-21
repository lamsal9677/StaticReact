import React from "react";

export default function About() {
  return (
    <div className="about">
      <div>
        <h2 className="about--head">About</h2>
        <p className="about--body">
          Hi. My name is Sanskar Lamsal and I am a Junior at The University of
          Toledo pursiong my CSE degree.
        </p>
      </div>
      <br />
      <div>
        <h2 className="about--head">Interests</h2>
        <div className="about--body">
          I am interetsed in React. Let's learn react.
          <ul>
            <li>React is interesting</li>
            <li>React is fun</li>
            <li>React is modular</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
