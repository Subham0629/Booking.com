import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import  AdminDashboardSidebar from './AdminDashboardSideBar'

const AdminPage = () => {
  return (
    <div>
      <Flex>
        <Box>
          <AdminDashboardSidebar/>
        </Box>
        <Box></Box>
      </Flex>
    </div>
  )
}

export default AdminPage