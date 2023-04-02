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
import { useDispatch } from "react-redux";

export const CarAdd = () => {
  const dispatch = useDispatch();

  const [supply, setSupply] = useState("");
  const [fair, setFair] = useState(0);
  const [Images, setImages] = useState("");

  const [Milage, setMilage] = useState(0);
  const [rating, setRating] = useState("");
  const [premium, setPremium] = useState("");
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handleSupply = (e) => {
    setSupply(e.target.value);
  };
  const handleFair = (e) => {
    setFair(Number(e.target.value));
  };

  const handleImage = (e) => {
    setImages(e.target.value);
  };

  const handleMilage = (e) => {
    setMilage(Number(e.target.value));
  };

  const handlePremium = (e) => {
    setPremium(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      supply,
      fair,
      Milage,
      premium,
      image: Images,
      rating,
    };
  
    dispatch(carAddDATA(payload));
    setFair(0);
    setImages("");
    setMilage(0);
    setPremium("");
    setRating("");
    setSupply("");
  };

  return (
    <>
      <Box width="60%" margin={"auto"} style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Box width="80%" margin="auto">
          <Text fontSize={"xl"} fontStyle={"italic"} fontWeight={"700"}>
            Add Car Details
          </Text>
          <Divider />
          {/* //Image Add */}
          <Input
            onChange={handleImage}
            type="url"
            placeholder={"image url🚗"}
            value={Images}
          />
          <FormLabel>Add Image URL</FormLabel>
          {/* Milage add */}
          <Divider />
          <Input
            onChange={handleMilage}
            type="number"
            placeholder="Add Milage of Car 🎖️"
            value={Milage}
          />
          <FormLabel>Add MIlage of Car</FormLabel>
          {/* <Prmium></Prmium> */}
          <Divider />
          <Select onChange={handlePremium}>
            <option value=""></option>
            <option value="low">low🪫</option>
            <option value="medium">medium5️⃣0️⃣</option>
            <option value="high">high🔋</option>
          </Select>
          <FormLabel>Level of comfort</FormLabel>
          {/* //Fair price */}
          <Divider />
          <Input
            onChange={handleFair}
            type="number"
            placeholder="Enter Fair of Car"
            value={fair}
          />
          <FormLabel>Fair Add Please 💶</FormLabel>
          {/* ///Supplier Name */}
          <Divider color="red" />
          <Select onChange={handleSupply}>
            <option value=""></option>
            <option value="Alamo">Alamo</option>
            <option value="Avis">medium</option>
            <option value="Budget">Budget</option>
            <option value="Citi Rental">Citi Rental</option>
            <option value="Currie Motors">Currie Motors</option>
            <option value="Easirent">Easirent</option>
            <option value="Enterprise">Enterprise</option>
          </Select>
          <FormLabel>Add Supply Name </FormLabel>
          <Divider />
          {/* <Rating></Rating> */}
          <Input
            onChange={handleRating}
            type="number"
            placeholder="Add Rating ⭐"
            value={rating}
          />
          <FormLabel>Add Star Rating</FormLabel>
          <br />
          <Button colorScheme='red' onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </>
  );
};
