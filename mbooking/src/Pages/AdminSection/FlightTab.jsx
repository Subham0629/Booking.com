import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Box,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {flightDelete} from "../../Redux/flightReducer/action"
export const FlightTab = () => {
  const [car, setCar] = useState([]);
  const dispatch = useDispatch();
  let carData = async () => {
    try {
      let res = await axios.get(` https://booking-backend-w7ce.onrender.com/popular-flight`);
      setCar(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleDelete = (id) => {
    dispatch(flightDelete())
  };

  useEffect(() => {
    carData();
  }, []);

  return (
    <>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {car?.reverse().map((el) => {
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
                    origin{" "}
                    <Text fontWeight={"700"} size={"sm"} color="red">
                      {" "}
                      {el.origin}
                    </Text>
                  </Heading>

                  <Text
                    color="blue.600"
                    fontSize="sm"
                    fontStyle={"italic"}
                    fontWeight={"700"}
                  >
                    Destination {el.destination}
                  </Text>
                  <Text
                    color="blue.600"
                    fontSize="sm"
                    fontWeight={"700"}
                    fontFamily={"Lobster Two cursive"}
                    fontStyle="italic"
                  >
                    StartTime {el.startTime}
                  </Text>
                  <Text
                    color="red.600"
                    fontSize="sm"
                    fontWeight={"700"}
                    fontFamily={"Lobster Two cursive"}
                    fontStyle="italic"
                  >
                    EndTime: {el.endTime}
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
