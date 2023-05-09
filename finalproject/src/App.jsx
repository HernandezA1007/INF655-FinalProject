// import "./App.css";
import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import HomePage from "./sections/home/HomePage";
import AboutPage from "./sections/about/AboutPage"; // information
import ProjectsPage from "./sections/projects/ProjectsPage";
import ContactPage from "./sections/contact/ContactPage"; // comments
import Footer from "./sections/footer/Footer";


const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </main>
    </>
  );
};

export default App;
 