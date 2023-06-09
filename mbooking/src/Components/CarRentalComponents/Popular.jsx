import React from "react";
import "./Popular.css";
import PopularSlide from "../Spiwer/PopularCarSlide";
import PopularDestination from "./PopularDestination";
const Popular = () => {
  return (
    <div>
      <div style={{ textAlign: "left", width: "80%", margin: "auto" }}>
        <h2 className="popular_car">Popular car hire brands</h2>
      </div>
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <PopularSlide />
      </div>
      <br/>
      <div style={{ width: "80%", margin: "auto",textAlign:"left" }}>
        <PopularDestination />
      </div>
    </div>
  );
};

export default Popular;
