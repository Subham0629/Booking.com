import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./AdminSidebar";
import { Image } from "@chakra-ui/react";
export const AdminOrder = () => {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Sidebar />
        </Box>
        <Box width="80%">
          <Box
            style={{
              display: "grid",
              gridTemplatesColumns: "repeat(3,1fr)",
              gap: "30px",
            }}
          >
            <Image width="200px" src="https://user-images.githubusercontent.com/106021674/229350074-a9bb9623-db23-4293-837a-8814eb90a0c8.png" />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
