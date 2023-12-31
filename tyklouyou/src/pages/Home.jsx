import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Header from "../components/Header";
import Reservation from "../components/Reservation";

const Home = () => {

    const [toggleDate , setToggleDate]=useState(false)

  return (
    <div className="accueil">
      <Header  toggleDate={toggleDate}/>
      <Reservation toggleDate={toggleDate} setToggleDate={setToggleDate}/>
      <Page1/>
      <Page2/>
    </div>
  );
};

export default Home;
