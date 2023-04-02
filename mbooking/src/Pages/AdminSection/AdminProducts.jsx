import React, { useState, useEffect } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import Sidebar from "./AdminSidebar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import { CarAdd } from "../../Components/AdminADD/CarAdd";
import { FlightAdd } from "../../Components/AdminADD/FlightAdd";
import { HotelAdd } from "../../Components/AdminADD/HotelAdd";
export const AdminProducts = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <Flex>
        <Box width="20%" style={{ position: "sticky" }}>
          <Sidebar />
        </Box>
        <Box
          width="80%"
          style={{ overflowY: "scroll" }}
        >
          <Image
            src="https://user-images.githubusercontent.com/106021674/229307846-81d1982f-8b3b-460a-abf4-1c6327f56b4d.png"
            alt=""
          />
          <br />
          <br />
          <Box>
            <Input
              type="range"
              min="0"
              max="2"
              value={tabIndex}
              onChange={handleSliderChange}
              border="3px solid #003b95"
            />

            <Tabs index={tabIndex} onChange={handleTabsChange}>
              <TabList>
                <Tab>
                  <Image
                    width="30px"
                    height="30px"
                    src="https://user-images.githubusercontent.com/106021674/229294307-e3bea22d-b687-44fc-83cc-9448a57069ea.png"
                    alt=""
                  />{" "}
                  Hotel Available
                </Tab>
                <Tab>
                  <Image
                    width="30px"
                    height="30px"
                    src="https://user-images.githubusercontent.com/106021674/229294084-19bce467-634c-4e67-89f2-d86d5429d87b.png"
                    alt="flight"
                  />
                  Flight Available
                </Tab>
                <Tab>
                  <Image
                    width="30px"
                    height="30px"
                    src="https://user-images.githubusercontent.com/106021674/229294029-a1622d06-36d4-49e5-b8ef-7137bc107805.png"
                    alt="car"
                  />
                  Cars Available
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <HotelAdd />
                </TabPanel>
                <TabPanel>
                  <FlightAdd />
                </TabPanel>
                <TabPanel>
                  <CarAdd />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
