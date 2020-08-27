import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>React로 만든 첫번째 Movie App 입니다.</span>
    </div>
  );
}

export default About;
