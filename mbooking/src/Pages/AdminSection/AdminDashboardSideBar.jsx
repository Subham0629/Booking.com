import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CarTab } from "./CarTab";
import { FlightTab } from "./FlightTab";
import { HotelTab } from "./HotelTab";
import SideBar from "./AdminSidebar";

const AdminDashboardSideBar = () => {
  return (
    <>
      <Flex>
        <Box width="20%">
          {/* //Sidebar */}

          <SideBar />
        </Box>

        <Box width="80%"  style={{overflowY:"scroll"}}>
          <Image
            width="100%"
            borderRadius={"5px"}
            src="https://user-images.githubusercontent.com/106021674/229291932-2b5a2be7-8397-4f08-8d43-77c0ae9b0b07.png"
            alt="edition"
          />
          <br />
          <Tabs>
            <TabList>
              <Tab fontWeight="700">
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229294029-a1622d06-36d4-49e5-b8ef-7137bc107805.png"
                  alt="car"
                />
                Cars Available
              </Tab>
              <Tab fontWeight="700">
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229294084-19bce467-634c-4e67-89f2-d86d5429d87b.png"
                  alt="flight"
                />
                Flight Available
              </Tab>
              <Tab fontWeight="700">
                {" "}
                <Image
                  width="30px"
                  height="30px"
                  src="https://user-images.githubusercontent.com/106021674/229294307-e3bea22d-b687-44fc-83cc-9448a57069ea.png"
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
