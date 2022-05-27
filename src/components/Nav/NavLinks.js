import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  return (
    <nav>
      <NavLink
        to="/"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        Projects
      </NavLink>
      <a
        href="https://docs.google.com/document/d/1UKTs6GrN8YXVVdM-F_MoXhKxkkvzg0cQWURy1-S-9yk/edit?usp=sharing"
        target="__blank"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        Resume
      </a>
    </nav>
  );
}

export default NavLinks;
