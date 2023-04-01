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
export const CarTab = () => {
  const [car, setCar] = useState([]);

  let carData = async () => {
    try {
      let res = await axios.get(`  http://localhost:8080/car-availables`);
      setCar(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleDelete = () => {};

  useEffect(() => {
    carData();
  }, []);

  return (
    <>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {car?.map((el) => {
          return (
            <Card maxW="sm" key={el.id}>
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
                    onChange={() => handleDelete(el.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onChange={() => handleDelete(el.id)}
                  >
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
