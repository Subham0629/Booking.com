import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./AdminSidebar";
import { Image } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
// import {BiLike} from "@chakra-ui/BiLike"
// import {BiShare} from "@chakra-ui/BIshare"
// import {BiChat} from "@chakra-ui/BiChat"

const data = [
  {
    id: 1,
    name: "jenna",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvuzxt_CMH60YitJ1-NUg5CEt-EJzLwQclA&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 2,
    name: "luci",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJg0THUq3aChd8-ibExVLrxRUo4jvLog6fA&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 3,
    name: "hemmant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf86zpFYftu3ICcb65SPJMaw9nbTJPBwqTA&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 4,
    name: "kunal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OIHckcpNeno7oFx_pw0izU0o2hQs50p4jw&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 10,
    name: "jenny",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF88x_TSb3s2a3A3K86327MHBg_J2RHBwbDsLEayafdQk4fZJfQkyyudaDwyRb4UcbmNI&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 5,
    name: "Stepheny",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTcmG17vsxSJyjuv-AimcvDKuZpTKhjQKt1QB1a6BPxiT0JP17zE4f6hwVdBq2wKzn0M&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 6,
    name: "shubham",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiKUMUB93uwFeyiNa3Bn09teheF2gF4OY3w&usqp=CAU",
    reviews: "",
  },
  {
    id: 7,
    name: "dharmik",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf86zpFYftu3ICcb65SPJMaw9nbTJPBwqTA&usqp=CAU",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
  {
    id: 8,
    name: "pulkit",
    image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    reviews: "Super and exiting website easy to manage and book the hotel ",
  },
];

export const AdminOrder = () => {
const [count,setCount]=useState(0);
const handleLike=()=>{
  setCount((p)=>p+1)
}

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
         
              gap: "30px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              
            }}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          
          >
            {data.map((el, i) => {
              return (
                <Card maxW="md">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Avatar name="Segun Adebayo" src={el.image} />

                        <Box>
                          <Heading size="sm">{el.name}</Heading>
                          <Text></Text>
                        </Box>
                      </Flex>
                      <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                      />
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>{el.reviews}</Text>
                  </CardBody>
                  <Image
                    width="300px"
                    height="300px"
                    margin="auto"
                    objectFit="cover"
                    src={el.image}
                    alt="Chakra UI"
                  />

                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "136px",
                      },
                    }}
                  >
                    <Button flex="1" variant="ghost" onClick={handleLike}>
                      <Image width="25px" src="https://user-images.githubusercontent.com/106021674/229360381-3ef4b062-cb34-4ff3-82a4-f61f1bc2efb5.png"/>Like
                    </Button>
                    <Button flex="1" variant="ghost">
                     <Image width="25px" src="https://user-images.githubusercontent.com/106021674/229360459-10cc6cc1-fff9-4ea1-b914-8b6cd3ca51c4.png" /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                    <Image width="25px" src="https://user-images.githubusercontent.com/106021674/229360508-0c34fc84-5481-4562-9f3f-59c194ad9d48.png" />   Share
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </>
  );
};
