import React, { useEffect, useState } from "react";
import "./nav.css";
import user from "../assets/user.png";

function Nav(props) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img className="nav__user" src={user} alt="Netflix logo" />
    </div>
  );
}

export default Nav;
