import React, { useEffect, useState } from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import axios from 'axios';
  //import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
 // import { MdLocalShipping } from 'react-icons/md';

  export default function HotelCard() {
    const {id} =useParams()
    const data=useSelector(store=>store.hotelReducer.hotels)
    const [product,setProduct]=useState()
    useEffect(()=>{
      axios.get(` http://localhost:8080/hotels/${id}`).then((res)=>setProduct(res.data))
      // const singleProd=data.filter((el)=>el.id===+id)
      // setProduct(singleProd)
    },[])
    
    //console.log(product);
    return (
      <div style={{display:"flex",width:"80%", margin:"auto",border:"2px solid grey",padding:"20px",borderRadius:"10px"}}>
        <div style={{width:"30%",borderRight:"1px solid gray",marginTop:"100px",paddingRight:"20px"}}>
         <SideBar image={product?.url} price={product?.price} name={product?.name} availrooms={product?.availableRooms}/>
        
        
        </div>
      <div style={{width:"70%"}}>
      <Container maxW={'7xl'} >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={product?.url}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {product?.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ₹{product?.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              {/* <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack> */}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Facilities
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Breakfast: {product?.breakFast}</ListItem>
                    <ListItem>Cancellation: {product?.cancellation}</ListItem>{' '}
                    <ListItem>Distance:{product?.distance}kms</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>View: {product?.view}</ListItem>
                    {/* <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem> */}
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Room Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Room Size:
                    </Text>{' '}
                    {product?.roomSize}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Beds:
                    </Text>{' '}
                    {product?.bedSize}
                  </ListItem>
                   <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Available Rooms:
                    </Text>{' '}
                    {product?.availableRooms}
                  </ListItem>
                 {/* <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
            </ListItem> */}
                  
                </List>
              </Box>
            </Stack>
  
            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to bag
            </Button> */}
  
             <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              {/* <Text>2-3 business days delivery</Text> */}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </div>
      </div>
    );
    
  }