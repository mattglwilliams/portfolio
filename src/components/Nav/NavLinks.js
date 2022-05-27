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
        home
      </NavLink>
      <NavLink
        to="/about"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        about
      </NavLink>
      <NavLink
        to="/portfolio"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        portfolio
      </NavLink>
      <NavLink
        to="/contact"
        activeclassname="active"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        contact
      </NavLink>
      <a
        href="https://docs.google.com/document/d/1UKTs6GrN8YXVVdM-F_MoXhKxkkvzg0cQWURy1-S-9yk/edit?usp=sharing"
        target="__blank"
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        resume
      </a>
    </nav>
  );
}

export default NavLinks;
