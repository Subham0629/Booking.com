import React from 'react'
import {Flex,Box} from "@chakra-ui/react"
import Sidebar from "./AdminSidebar"
const AdminCoustomer = () => {
  return (
  <>
    <Flex>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Flex style={{ gap: "30px" }}>
            <Box>
            
            </Box>
            <Box></Box>
            <Box></Box>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default AdminCoustomer