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

const initialState = {
  name: "",
  url: "",
  reviews: "",
  rating: "",
  bedSize: "",
  roomSize: "Big size room",
  cancelationPolicy: "Will be charged",
  breakFast: "Included",
  cancellation: "Charged",
  availability: true,
  availableRooms: 3,
  price: 1030,
  discountedPrice: "",
  distance: "",

  view: "Very Good",
};

export const HotelAdd = () => {
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState("");
  const [rating, setRating] = useState("");
  const [url, setUrl] = useState("");
  const [bedSize, setBedSize] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      url,
      reviews,
      rating,
      bedSize,
      roomSize: "Big size room",
      cancelationPolicy: "Will be charged",
      breakFast: "Included",
      cancellation: "Charged",
      availability: true,
      availableRooms: 3,
      price,
      discountedPrice,
      distance,
      city,

      view: "Very Good",
    };
  };
  return (
    <>
      <Box width="60%" margin={"auto"} style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Box width="80%" margin="auto">
          <Text fontSize={"xl"} fontStyle={"italic"} fontWeight={"700"}>
            Add Hotel Details
          </Text>
          <Divider />
          {/* //Image Add */}
          <FormLabel>Add Image URL</FormLabel>
          <Input
            type="url"
            placeholder={"image url🚗"}
            name="url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Divider />
          {/* <>Name </> */}
          <FormLabel>Add Name of Hotel</FormLabel>
          <Input
            type="text"
            placeholder="Add Name of Hotel 🏨"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Divider />
          {/* <City></City> */}
          <FormLabel>Enter City🏙️🏙️🏙️ </FormLabel>
          <Input
            type="text"
            placeholder="Enter City"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          {/* bedroomSize */}
          <Divider color="red" />
          <FormLabel>Bed Size 🏘️</FormLabel>
          <Input
            type="number"
            placeholder="Bed Size"
            name="bedSize"
            onChange={(e) => setBedSize(e.target.value)}
          />
          <Divider />
          {/* Price */}
          <FormLabel>Enter Price of Room</FormLabel>
          <Input
            type="price"
            placeholder="Enter price of room 💶"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <Divider />
          {/* <DiscountPrice></DiscountPrice> */}
          <FormLabel>Enter Discount-Price of Room</FormLabel>
          <Input
            type="price"
            placeholder="Enter Discount Available of room 💶"
            name="discountedPrice"
            onChange={(e) => setDiscountedPrice(e.target.value)}
          />

          <Divider />
          {/* <>Distance</> */}
          <FormLabel>Airpot🛬 to Hotel🏩 Distance</FormLabel>
          <Input
            type="number"
            placeholder="Enter distance in KM"
            name="distance"
            onChange={(e) => setDistance(e.target.value)}
          />
          {/* <Rating></Rating> */}
          <FormLabel>Add Star Rating</FormLabel>
          <Input
            type="number"
            placeholder="Add Rating ⭐"
            name="rating"
            onChange={(e) => setRating(e.target.value)}
          />
          <Divider />
          {/* <Reviews></Reviews> */}
          <FormLabel>Add Reviews </FormLabel>
          <Input
            type="number"
            placeholder="Add Reviews ⭐"
            name="reviews"
            onChange={(e) => setReviews(e.target.value)}
          />
          <Divider />
          <br />
          <Button colorScheme='red' onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </>
  );
};
