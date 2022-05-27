import React from "react";
import "./nav.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

export default Nav;
