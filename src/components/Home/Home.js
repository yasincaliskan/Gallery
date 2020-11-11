import React from "react";
import "./home.css";
import github from "./icons/github.png";
import linkedin from "./icons/linkedin.png";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Yasin's Gallery-App!</h1>
      <p>
        A software developer who likes to write code, build systems and learn
        new technologies.
      </p>
      <div className="icons">
        <a target="_blank" href="https://www.github.com/yasincaliskan/">
          <img src={github} alt="github" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/yasincaliskandev/">
          <img src={linkedin} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Home;
