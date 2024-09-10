import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkedElements = links.map((link,index) => <a href={`#${link}`} key={index}>{link}</a>)
  return <nav>{linkedElements}</nav>
}

export default NavBar;
