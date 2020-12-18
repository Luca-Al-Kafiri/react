import React, { useState, useEffect, useRef } from "react";
import { links, social } from "./data";
import { FaBars, FaLeaf, FaTwitter } from "react-icons/fa";
import logo from "./logo.svg";
const Nav = () => {
  const [show, setShow] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [show]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button onClick={toggle} className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((iconLink) => {
            const { id, url, icon } = iconLink;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
