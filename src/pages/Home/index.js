import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p className="greeting">Hi, nice to meet you,</p>
        <h1>
          Matt here{" "}
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="60px"
            alt="waving hand"
          />
        </h1>
        <p className="job">a software engineer based in Manchester.</p>
        <a href="mailto:mattwilliamsdev@gmail.com" className="contact-btn">
          <FontAwesomeIcon icon={faAt} /> Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
