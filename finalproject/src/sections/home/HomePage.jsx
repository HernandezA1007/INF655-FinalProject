import React from "react";
import "./homepage.css";

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-page-container">
                <h2 className="home-page-title">Personal Statement</h2>
                <p className="home-page-description">
                    I'm a passionate first-generation College student interested in IT with experience in 
                    a variety of technologies and tools. From data structures and algorithms to frontend and 
                    backend development. In my free time, I watch sports like soccer, boxing and F1, watch
                    movies and tv shows, and play video games.
                </p>

                <div className="skills">
                    <h3 className="skills-title">Skills:</h3>
                    <ul className="skills-list">
                        <li>HTML/CSS/JavaScript</li> {/* Can move these into a data.js */}
                        <li>React/Redux</li>
                        <li>Node.js/Express</li>
                        <li>MongoDB/SQL</li>
                        <li>Python</li>
                        <li>Java/C++</li>
                    </ul>
                </div>
                <div className="interests">
                    <h3 className="interests-title">Interests:</h3>
                    <ul className="interests-list">
                        <li>Soccer</li>
                        <li>Movies/TV shows</li>
                        <li>Traveling</li>
                        <li>Video Games</li>
                        <li>Architecture</li>
                    </ul>
                </div>
            </div>
        </section>
      );
};

export default HomePage;