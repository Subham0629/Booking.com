import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CarTab } from "./CarTab";
import { FlightTab } from "./FlightTab";
import { HotelTab } from "./HotelTab";
import SideBar from "./AdminSidebar";
import "./AdminAnalytics"

const AdminDashboardSideBar = () => {
  return (
    <>
      <Flex>
        <Box width="20%">
          {/* //Sidebar */}

          <SideBar />
        </Box>

        <Box
          width="80%"
          style={{
            overflowY: "scroll",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Image
            width="100%"
            borderRadius={"5px"}
            src="https://user-images.githubusercontent.com/106021674/229291932-2b5a2be7-8397-4f08-8d43-77c0ae9b0b07.png"
            alt="edition"
          />
          <br />
          <Tabs margin={"auto"} style={{backgroundColor:"#001f49"}}>
            <TabList style={{backgroundColor:"#001f49"}} margin={"auto"}>
              <Tab fontWeight="700" color={"#fff"} className="Box1" >
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229294029-a1622d06-36d4-49e5-b8ef-7137bc107805.png"
                  alt="car"
                />
                Cars Available
              </Tab>
              <Tab fontWeight="700" color={"#fff"}>
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229294084-19bce467-634c-4e67-89f2-d86d5429d87b.png"
                  alt="flight"
                />
                Flight Available
              </Tab>
              <Tab fontWeight="700" color={"#fff"}>
                {" "}
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229346658-49075fae-abcc-411a-8324-a6ffd235dae0.png"
                  alt=""
                />{" "}
                Hotel Available
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CarTab />
              </TabPanel>

              <TabPanel>
                <FlightTab />
              </TabPanel>
              <TabPanel>
                <HotelTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default AdminDashboardSideBar;
