import React from "react";
import "./about.css";
import myImage from "../../assets/images/me.jpg";
import htmlIcon from "../../assets/logos/html.svg";
import cssIcon from "../../assets/logos/css.png";
import jsIcon from "../../assets/logos/js.png";
import reactIcon from "../../assets/logos/react.png";
import nodeIcon from "../../assets/logos/node.png";
import mongodbIcon from "../../assets/logos/mongodb.svg";
import graphqlIcon from "../../assets/logos/graphql.png";
import mysqlIcon from "../../assets/logos/mysql.svg";
import gitIcon from "../../assets/logos/git.png";
import herokuIcon from "../../assets/logos/heroku.svg";

function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <h2 className="about-heading">about</h2>
          <p>
            I am currently a web development project manager based in
            Manchester. I recently graduated from the University of Manchester's
            coding bootcamp and am looking for a full stack web developer
            opportunity. While on the course, I picked up a host of skills,
            tools and languages, some of which you can see below{" "}
            {`(more info on my resume)`}. I am currently working on the{" "}
            <span className="future-research">MERN</span> stack and am
            interested in looking into{" "}
            <span className="future-research">AWS</span>,{" "}
            <span className="future-research">Next.js</span> and{" "}
            <span className="future-research">game development</span> in the
            near future.
          </p>
          <section className="skills-icons">
            <img src={htmlIcon} className="skill-icon" alt="HTML icon" />
            <img src={cssIcon} className="skill-icon" alt="CSS icon" />
            <img src={jsIcon} className="skill-icon" alt="Javascript icon" />
            <img src={reactIcon} className="skill-icon" alt="React icon" />
            <img src={nodeIcon} className="skill-icon" alt="Node icon" />
            <img src={mongodbIcon} className="skill-icon" alt="Mongo DB icon" />
            <img src={graphqlIcon} className="skill-icon" alt="Graph QL icon" />
            <img src={mysqlIcon} className="skill-icon" alt="My SQL icon" />
            <img src={gitIcon} className="skill-icon" alt="Git icon" />
            <img src={herokuIcon} className="skill-icon" alt="Heroku icon" />
          </section>
        </div>
        <img src={myImage} className="my-image" alt="Matthew Williams" />
      </section>
    </>
  );
}

export default About;
