import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const HotelTab = () => {
  const [car, setCar] = useState([]);

  let carData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/hotels`);
      setCar(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleDelete = () => {};

  useEffect(() => {
    carData();
  }, []);

  return (
    <>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {car?.map((el) => {
          return (
            <Card
                  maxW="sm"
                  key={el.id}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <CardBody>
                    <Image
                      w={"100%"}
                      src={el.url}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{el.name}</Heading>
                      <Text color="black" fontSize="2xl">
                        Price: ₹{el.price}
                      </Text>
                      <Text color="black" fontSize="2xl">
                        Rating: {el.rating}/5
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup m={"auto"} spacing="2">
                      <Link to={`/hotel/${el.id}`}>
                        <Button variant="ghost" colorScheme="blue">
                          See Details
                        </Button>
                      </Link>
                      {/* <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button> */}
                    </ButtonGroup>
                  </CardFooter>
                </Card>
          );
        })}
      </Box>
    </>
  );
};
