import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CarName, carCartAdd } from "../../Redux/CarRental/action";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";

export default function CarNameSinglePageId() {
  const { id } = useParams();
  const state = useSelector((state) => state.CarReducer.carId);
  const dispatch = useDispatch();
  console.log("state", state);

  const handleAddCart = (image, premium, supply, fair, rating, Milage) => {
    let payload = {
      image,
      premium,
      supply,
      fair,
      rating,
      Milage,
    };
    dispatch(carCartAdd(payload));
  };

  useEffect(() => {
    dispatch(CarName(id));
  }, []);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={state.Milage}
            src={state.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              From ₹{state.fair} per day
            </Heading>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                <Text fontWeight={"800"} color="#127f4a">
                  Current Deals
                </Text>
                <Text fontWeight={"600"} fontStyle="italic">
                  Explore our current deals and promotions or start a
                  reservation to find the right vechical everyday at low price
                  rate
                </Text>
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"800"}
                textTransform={"uppercase"}
                mb={"4"}
                fontStyle="italic"
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem fontWeight={"600"} fontStyle="italic">
                    Rear Camera Feature
                  </ListItem>
                  <ListItem fontWeight={"600"} fontStyle="italic">
                    4 seeter
                  </ListItem>{" "}
                  <ListItem fontWeight={"600"} fontStyle="italic">
                    {" "}
                    tyre pressure measuring
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem fontWeight={"600"} fontStyle="italic">
                    Door Service
                  </ListItem>
                  <ListItem fontWeight={"600"} fontStyle="italic">
                    Chronometer
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"800"}
                textTransform={"uppercase"}
                mb={"4"}
                fontStyle="italic"
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Between lugs:
                  </Text>{" "}
                  Super Comfort
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Case:
                  </Text>{" "}
                  Air purifer
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Fully Clean
                  </Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"} fontStyle="italic">
                    Sun Roof
                  </Text>{" "}
                  fornt and back seat belt extra space for lauggage
                </ListItem>
              </List>
            </Box>
          </Stack>{" "}
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() =>
              handleAddCart(
                state.Milage,
                state.image,
                state.supply,
                state.fair,
                state.premium,
                state.rating
              )
            }
            fontStyle="italic"
          >
            Add to Bag
          </Button>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text fontStyle={"italic"} fontWeight={"800"}>
              Taxi will be on the gate of airpot for your service
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
