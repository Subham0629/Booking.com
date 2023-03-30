import React, { useEffect, useState } from "react";
import CleanCar from "./CleanCar";
import { Flex, Box, Text } from "@chakra-ui/react";
import PopularCarSlide from "../Spiwer/PopularCarSlide";
import RecommandedCarSlide from "../Spiwer/Recommanded";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Stack,
} from "@chakra-ui/react";
import FrequentAsk from "./FrequentAsk";
import CarSaveTimeSection from "./CarSaveTimeSection";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterSorting from "./FilterSortingMadid";

const Lisbon = () => {
  const [car, setCar] = useState([]);
  const location = useLocation();
  const [searchParam] = useSearchParams();
  let obj = {
    params: {
      _sort: "fair",
      _order: searchParam.get("order"),
    },
  };

  const lisbon = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/lisbon`, obj);
      setCar(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    lisbon();
  }, [location.search]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "80%",
          }}
        >
          <h1 className="h1Tag">
            <span classname="sb-searchbox__title-text">Car hire in lisbon</span>
          </h1>

          <h2 class="h2Tag">Find great car deals for your trip in lisbon</h2>
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
      <br />
      <CleanCar />
      <br />
      <Box width={"80%"} margin="auto">
        <Text textAlign={"left"} fontWeight="700" fontSize={"2xl"}>
          {" "}
          Popular car hire brands
        </Text>
        <br />
        <PopularCarSlide />
      </Box>
      {/* //Recommended pick-up locations in lisbon */}
      <br />
      <Box width={"80%"} margin="auto">
        <Text textAlign={"left"} fontWeight="700" fontSize={"2xl"}>
          Recommended pick-up locations in lisbon
        </Text>
        <br />
      </Box>
      {/* //Sipwer V */}
      <br />
      <Box width={"80%"} margin="auto">
        <RecommandedCarSlide />
      </Box>
      <br />
      <Box>
        <Image
          src="https://user-images.githubusercontent.com/106021674/228821498-71232ec0-6643-41e3-bdf6-0e665e276f00.png"
          alt="cancellation"
        />
      </Box>
      {/* //Car hire destinations near lisbon */}
      <br />
      <FrequentAsk />
      <br />
      <Box width={"80%"} margin="auto">
        <Text fontSize="2xl" style={{ textAlign: "left", fontWeight: "700" }}>
          Popular car rental destinations in the lisbon
        </Text>
      </Box>
      <br />
      <Flex>
        <Box>
          <FilterSorting />
        </Box>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "30px",
            width: "80%",
            margin: "auto",
          }}
        >
          {car?.map((data) => {
            return (
              <Card maxW="sm">
                <CardBody>
                  <Image src={data.image} alt={data.city} borderRadius="lg" />
                  <Stack mt="6">
                    <h3
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontSize: "md",
                        textAlign: "left",
                      }}
                      color={"#000"}
                      size="md"
                      textAlign={"left"}
                    >
                      {data.city}
                    </h3>
                    <h4 style={{ textAlign: "left" }}>
                      Car hire at 1 Pickup location
                    </h4>
                    <Box width={"60%"} margin="auto">
                      <Text color="#262626" fontSize="sm" textAlign={"left"}>
                        <Image
                          src="https://user-images.githubusercontent.com/106021674/228558541-2e39c8c1-2735-4152-8428-201040805844.png"
                          alt="car"
                          width={"30px"}
                          height="30px"
                          color={"#262626"}
                        />{" "}
                        From ₹{data.fair} per day
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
                <Divider />
                <h4>More Details</h4>
              </Card>
            );
          })}
        </Box>
      </Flex>
      <br />
      <CarSaveTimeSection />
    </div>
  );
};

export default Lisbon;
