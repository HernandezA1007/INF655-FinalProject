import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import data from "./data";
import soccer from "../../assets/images/soccer.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="icon-button">
                    <GiSoccerBall style={{ color: "black", fontSize: "2rem"}} />
                </button>

                <ul className="nav-links">
                    {data.map((item) => (
                        <li key={item.id} className="nav-item">
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                <a href="index.html" className="logo">
                    <img src={soccer} alt="Logo" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

