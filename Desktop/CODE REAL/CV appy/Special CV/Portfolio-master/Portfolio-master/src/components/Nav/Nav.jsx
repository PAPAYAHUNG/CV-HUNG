import React, { useEffect, useState } from "react";
// import NavLink from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";

const Nav = () => {
  const [showBG, setShowBG] = useState(false)
  const [hideNav, sethideNav] = useState(false)

  // Monitor action scroll on the UI
  const displayUI = () => {
    // console.log(window.scrollY)

    if (window.scrollY > 40) {
      sethideNav(true)
    }
    else {
      sethideNav(false)
    }
    if (window.scrollY > 990) {
      setShowBG(true)
      sethideNav(false)

    }
    else {
      setShowBG(false)
    }

  }


  useEffect(() => {
    window.addEventListener('scroll', displayUI)
    return () => {
      window.removeEventListener('scroll', displayUI)
    }
  }, [])

  return (
    <>
      <motion.nav
        className={`nav1 ${showBG && "showBG"} ${hideNav && "nav-none"}`}
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div className="main-menue">
          <ul>
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
