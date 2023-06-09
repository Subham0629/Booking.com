import React from "react";
import "./SearchInputCar.css";
import { Flex, Box } from "@chakra-ui/react";
const SearchInputCar = () => {
  return (
    <div
      style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid #e6e6e6" }}
    >
      <div
        style={{
          margin: "auto",
          width: "80%",
        }}
      >
        <h1 className="h1Tag">
          <span classname="sb-searchbox__title-text">
            Car hire for any kind of trip
          </span>
        </h1>

        <h2 className="h2Tag">Compare deals from the biggest car hire companies</h2>
        <br />
        <br />
        <Flex style={{ gap: "10px" }}>
          <input type="radio" />

          <label className="label_search">Return to same location</label>
          <input type="radio" />
          <label className="label_search">Return to different location</label>
        </Flex>
      </div>
      <br />
    </div>
  );
};

export default SearchInputCar;
