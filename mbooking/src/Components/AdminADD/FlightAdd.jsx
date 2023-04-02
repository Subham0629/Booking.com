import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  FormLabel,
  Input,
  Select,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { carAddDATA } from "../../Redux/CarRental/action";
import { addPopularFlight } from "../../Redux/flightReducer/action";
import { useDispatch } from "react-redux";

export const FlightAdd = () => {
  const [Image, setImage] = useState("");
  const [origin, setOrigin] = useState("");
  const [destinantion, setDestinantion] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const dispatch = useDispatch();
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleOrigin = (e) => {
    setOrigin(e.target.value);
  };

  const handleStart = (e) => {
    setStartTime(e.target.value);
  };

  const handleEnd = (e) => {
    setEndTime(e.target.value);
  };

  const handleDestinantion = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      origin: origin,
      destinantion,
      startTime,
      endTime,
      image: Image,
    };
    dispatch(addPopularFlight(payload));
  };
  return (
    <>
      <Box width="60%" margin={"auto"} style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Box width="80%" margin="auto">
          <Text fontSize={"xl"} fontStyle={"italic"} fontWeight={"700"}>
            Add Popular Flight Destination Details
          </Text>
          <Divider />
          {/* //Image Add */}
          <Input
            onChange={handleImage}
            type="url"
            placeholder={"image url🚗"}
            value={Image}
          />
          <FormLabel>Add Image URL</FormLabel>
          {/* Milage add */}
          <Divider />
          <Input
            onChange={handleOrigin}
            type="number"
            placeholder="Add Milage of Car 🎖️"
            value={origin}
          />
          <FormLabel>Add Origin from where to start</FormLabel>
          {/* <Prmium></Prmium> */}
          <Divider />
          <Input
            placeholder="Enter Destination"
            type="text"
            value={destinantion}
            onChange={handleDestinantion}
          />
          <FormLabel>Destinantin Enter</FormLabel>
          {/* //Fair price */}
          <Divider />
          <Input
            onChange={handleStart}
            type="number"
            placeholder="Enter Fair of Car"
            value={startTime}
          />
          <FormLabel>StartTime Add Please 💶</FormLabel>
          {/* ///Supplier Name */}
          <Divider color="red" />
          <Input
            placeholder="endTime"
            type="number"
            onChange={handleEnd}
            value={endTime}
          />
          <FormLabel>Add EndTimes </FormLabel>
          <Divider />
          {/* <Rating></Rating> */}

          <br />
          <Button colorScheme='red' onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </>
  );
};
