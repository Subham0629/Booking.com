import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HotelCart from './HotelCart'
import CarCart from './CarCart'
const Cartbag = () => {
  return (
    <div>
      <Tabs size='md' variant='enclosed' w="80%" m="auto" border="2px solid grey" borderRadius={"10px"} p="20px"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <TabList >
    <Tab>Hotels</Tab>
    <Tab>Cars</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <HotelCart/>
    </TabPanel>
    <TabPanel>
      <CarCart/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Cartbag