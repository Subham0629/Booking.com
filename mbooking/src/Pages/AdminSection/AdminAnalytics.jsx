import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import Sidebar from "./AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { carDataName } from "../../Redux/CarRental/action";

import { getHotels } from "../../Redux/Stay/action";
import axios from "axios";
import { PieChart } from "./ChartsUse/PieChart";
import "./AdminAnalytics.css";
import Horizontal from "./ChartsUse/Horizontal";
import PopularCountryChart from "./ChartsUse/PopularCountryChart";
import WeeklyTraffic from "./ChartsUse/WeeklyTraffic";

// import Horizontalchart from "../AdminSection/ChartsUse/Horizontal";

export const AdminAnalytics = () => {
  const dispatch = useDispatch();
  const carLength = useSelector((state) => state.CarReducer);
  const hotelLength = useSelector((state) => state.hotelReducer);

  const [val, setval] = useState(0);

  const flightData = async () => {
    try {
      let res = await axios.get(`https://booking-backend-w7ce.onrender.com/hotels`);
      setval(res.data.length);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    dispatch(carDataName());
    flightData();
    dispatch(getHotels());
  }, []);
  //{carLength.carRental?.length}
  // {hotelLength.hotels?.length}
  let today = new Date();
  let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
  let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
  let year = today.getFullYear();
  return (
    <>
      <Box>
        <Flex>
          <Box width="20%">
            <Sidebar />
          </Box>
          <Box width={"80%"} style={{ backgroundColor: "#001f49" }}>
            {/* <Image
              height={"60%"}
              src="https://user-images.githubusercontent.com/106021674/229345830-28029438-079b-4618-a77e-580804ed7480.png"
              alt="pie"
              borderRadius={"12px 20px"}
            /> */}
            <br />
            <Flex
              justifyContent={"space-evenly"}
              textAlign={"center"}
              width="80%"
              margin={"auto"}
            >
              <Text
                style={{
                  fontSize: "29px",
                  lineHeight: "32px",
                  fontWeight: "900",
                  opacity: "0.9",
                  margin: "0",
                  fontFamily: "DM Sans sans-serif",
                  fontStyle: "italic",
                  color: "#fff",
                }}
              >
                Total Number of Product
              </Text>
              <Text
                style={{
                  fontStyle: "italic",
                  fontFamily: "DM Sans sans-serif",
                  fontWeight: "800",
                  lineHeight: "23px",
                  fontSize: "22px",
                  opacity: ".9",
                  color: "#fff",
                }}
              >
                {`${day}/${month}/${year}`}
              </Text>
            </Flex>
            <br />
            <br />

            <Flex
              style={{
                gap: "0px",
                width: "90%",
                margin: "auto",

                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Flex
                  gap={"40px"}
                  border={"1px solid green"}
                  className="Box1"
                  width="100%"
                  height={"100px"}
                  borderRadius={"12px 17px"}
                >
                  {/* //Number of customers */}

                  <Box marginLeft={"4px"}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontStyle: "italic",
                        fontWeight: "800",
                        color: "#ffff",
                      }}
                    >
                      4 Members
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "20px",
                        fontStyle: "italic",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      Team
                    </span>
                  </Box>
                  <Image
                    textAlign={"center"}
                    width="50px"
                    height={"50px"}
                    marginTop={"4px"}
                    marginRight={"6px"}
                    src="https://user-images.githubusercontent.com/106021674/229342715-a9e4bddb-a1fd-4c7c-a2b2-99e295e2fed5.png"
                    alt="people"
                  />
                </Flex>
              </Box>
              <Box>
                <Flex
                  gap={"40px"}
                  border={"1px solid green"}
                  className="Box1"
                  width="100%"
                  height={"100px"}
                  borderRadius={"12px 17px"}
                >
                  {/* //Number of  Products*/}

                  <Box marginLeft={"4px"}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontStyle: "italic",
                        fontWeight: "800",
                        color: "#ffff",
                      }}
                    >
                      Total Products
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "20px",
                        fontStyle: "italic",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      {carLength?.carRental.length +
                        hotelLength?.hotels.length +
                        val}
                    </span>
                  </Box>
                  <Image
                    textAlign={"center"}
                    width="50px"
                    height={"50px"}
                    marginTop={"4px"}
                    marginRight={"6px"}
                    src="https://user-images.githubusercontent.com/106021674/229344132-b88fbe46-730f-45ff-9d24-1e7fd9626011.png"
                    alt="product"
                  />
                </Flex>
              </Box>
              <Box>
                <Flex
                  gap={"40px"}
                  border={"1px solid green"}
                  className="Box1"
                  width="100%"
                  height={"100px"}
                  borderRadius={"12px 17px"}
                >
                  {/* //Number of customers */}

                  <Box marginLeft={"4px"}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontStyle: "italic",
                        fontWeight: "800",
                        color: "#ffff",
                      }}
                    >
                      Numbers of Days
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "20px",
                        fontStyle: "italic",
                        fontWeight: "600",
                        color: "#ffff",
                      }}
                    >
                      To complete 5 days
                    </span>
                  </Box>
                  <Image
                    textAlign={"center"}
                    width="50px"
                    height={"50px"}
                    marginTop={"4px"}
                    marginRight={"6px"}
                    src="https://user-images.githubusercontent.com/106021674/229344251-ace4d109-1c0a-49ee-ada2-2a51ca124e22.png"
                    alt="days"
                  />
                </Flex>
              </Box>
            </Flex>
            <br />
            <br />
            <Flex justifyContent={"space-evenly"}>
              <PieChart />
              <Horizontal />
            </Flex>
            <Flex   justifyContent={"space-evenly"}>
              <PopularCountryChart />
              <WeeklyTraffic />
            </Flex>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
