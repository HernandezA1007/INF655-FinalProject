import React from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes as RR } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import ProjectsPage from "../pages/projects/ProjectsPage";

const Routes = () => {

    return (
        <Router>
            <RR>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </RR>
        </Router>
    );
};

export default Routes;