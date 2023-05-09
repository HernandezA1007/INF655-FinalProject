import React from "react";
import Card from "../../components/Card";
import fhsuStudent from "../../assets/images/fhsuStudent.jpg";
import "./aboutpage.css";

const AboutPage = () => {
    return (
        <section id="about" className="about">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="about-image">
                    <img src={fhsuStudent} alt="Profile" />
                </div>

                <div className="about-text">
                    <p>Hello, my name is Antonio, I was born and raised in Garden City, Kansas, spent my whole life in
                        the same town. I currently live in Hays, Kansas attending FHSU working on getting my Bachelors
                        in Computer Science. I am also getting a minor in Web Development. 
                    </p>
                    <Card className="about-card">
                    <h2>Education</h2>
                    <p>Computer Science student at FHSU</p>
                    </Card>

                    <Card className="about-card">
                    <h2>Work Experience</h2>
                    <p>Delivery driver for Doordash</p>
                    </Card>

                    <Card className="about-card">
                    <h2>Achievements</h2>
                    <p>Received high academic achievement scholarship</p>
                    </Card>
                </div>
            </div>

            {/* Github, LinkedIn, Social media? */}
        </section>

    );
};

export default AboutPage;