// import "./App.css";
import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Header from "./pages/header/Header";
import Routes from "./routes/Routes";
import Footer from "./pages/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
 