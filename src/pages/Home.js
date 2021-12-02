import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Logo />
      <Countries />
    </div>
  );
}

export default Home;
