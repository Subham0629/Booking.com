import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { carDataName } from "../../Redux/CarRental/action";
import Loader from "../Loader";
import { Box, Image, Flex } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import FilterSorting from "./FilterSorting";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const CarName = () => {
  const carData = useSelector((state) => state.CarReducer);
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("search", Number(searchParam.getAll("star")));
  let obj = {
    params: {
      _sort: "fair",
      _order: searchParam.get("order"),
      supply: searchParam.getAll("supply"),
      premium: searchParam.getAll("price"),
      rating: searchParam.getAll("star"),
    },
  };

  useEffect(() => {
    dispatch(carDataName(obj));
  }, [location.search]);

  return (
    <div>
      {carData?.loading && <Loader />}
      {carData?.error && (
        <Image
          src="https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?s=612x612&w=0&k=20&c=QqNEXgbPj31_dIabFdYxu61_H0XJCKc5S_2LO7Z_TeU="
          alt="error"
        />
      )}
      <Flex width={"90%"} margin="auto">
        <Box style={{ borderRight: "1px dotted black" }}>
          <FilterSorting />
        </Box>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            width: "70%",
            margin: "auto",
          }}
        >
          {carData?.carRental?.map((el) => {
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
                    <Button variant="solid" colorScheme="blue">
                      <Link to={`/carName/${el.id}`}>Book Now</Link>
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Box>
      </Flex>
    </div>
  );
};

export default CarName;
