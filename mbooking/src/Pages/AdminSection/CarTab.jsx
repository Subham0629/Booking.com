import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CarDetailDelete, carDataName } from "../../Redux/CarRental/action";
export const CarTab = () => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.CarReducer);
  console.log("carRedu", car);
  const handleDelete = (id) => {
    console.log("id", id);
    dispatch(CarDetailDelete(id)).then(() => dispatch(carDataName()));
  };

  useEffect(() => {
    dispatch(carDataName());
  }, []);

  return (
    <>
      <Box
        style={{ display: "grid", gap: "20px" }}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {car?.carRental?.reverse().map((el) => {
          return (
            <Card maxW="sm" key={el.id} style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
              <CardBody>
                <Image
                  src={el.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  height={"200px"}
                  width="80%"
                  margin={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    fontStyle={"italic"}
                    color="#000"
                    fontFamily={"Lobster Two cursive"}
                    size="sm"
                    fontWeight={"700"}
                  >
                    Supplier{" "}
                    <Text fontWeight={"700"} size={"sm"} color="red">
                      {" "}
                      {el.supply}
                    </Text>
                  </Heading>

                  <Text
                    color="blue.600"
                    fontSize="sm"
                    fontStyle={"italic"}
                    fontWeight={"700"}
                  >
                    From ₹{el.fair} per day
                  </Text>
                  <Text
                    color="blue.600"
                    fontSize="sm"
                    fontWeight={"700"}
                    fontFamily={"Lobster Two cursive"}
                    fontStyle="italic"
                  >
                    {el.Milage}
                  </Text>
                  <Text
                    color="red.600"
                    fontSize="sm"
                    fontWeight={"700"}
                    fontFamily={"Lobster Two cursive"}
                    fontStyle="italic"
                  >
                    Rating: {el.rating}/5
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    Update
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card> 
          );
        })}
      </Box>
    </>
  );
};
