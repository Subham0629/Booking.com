import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./popularCarDestination.css";
import { Card, CardBody,Text,Heading, Image,Stack } from "@chakra-ui/react";

import axios from "axios";
const TopWorldCar = () => {
  const [val, setVal] = useState([]);

  const worldWide = async () => {
    try {
      let res = await axios.get(
        ` http://localhost:8080/top_worldwide_car_rental`
      );
      setVal(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    worldWide();
  }, []);
  console.log("val", val);
  return (
    <div>
      <Box style={{ width: "80%", margin: "auto" }}>
        <h2 className="_h2Tag_worldwide">
          Top worldwide locations for car rental
        </h2>
        <br />
        <Flex>
          {val?.map((data) => {
            return (
              <Card maxW="sm" key={data.id}>
                <CardBody>
                  <Image src={data.image} alt={data.city} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading color={"#000"} size="md">
                      {data.city}
                    </Heading>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "400px",
                        lineHeight: "20px",
                      }}
                    >
                      {data.carDetail}
                    </Text>
                    <Text color="#262626" fontSize="sm"  textAlign={"center"}>
                      <Image
                        src="https://user-images.githubusercontent.com/106021674/228558541-2e39c8c1-2735-4152-8428-201040805844.png"
                        alt="car"
                        width={"30px"}
                        height="30px"
                        color={"#262626"}
                        textAlign={"center"}
                      />{" "}
                      From ₹{data.fair} per day
                    </Text>
                  </Stack>
                </CardBody>
               
              
              </Card>
            );
          })}
        </Flex>
      </Box>
    </div>
  );
};

export default TopWorldCar;
