import React from "react";
import { links, socials } from "./data"; // swap them up, I don't use most
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_black"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>2023 Antonio Hernandez Portfolio&copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;