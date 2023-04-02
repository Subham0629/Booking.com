import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelCart } from "../../Redux/Stay/action";
import { Box, Image, Flex } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import {carCartGet} from '../../Redux/CarRental/action'
const CarCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.carRental);
  console.log(data);
  useEffect(() => {
    dispatch(carCartGet())
  }, []);
  return (

    <div>
      {data?.cart?.map((el) => {
        return (
          <Card maxW="sm" key={el.id}>
            <CardBody>
              <Image
                src={el.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                height={"200px"}
                width="80%"
                margin={"auto"}
              />
              <Stack mt="6" spacing="3">
                <Heading
                  fontStyle={"italic"}
                  color="#000"
                  fontFamily={"Lobster Two cursive"}
                  size="sm"
                  fontWeight={"700"}
                >
                  Supplier{" "}
                  <Text fontWeight={"700"} size={"sm"} color="red">
                    {" "}
                    {el.supply}
                  </Text>
                </Heading>


                <Text
                  color="blue.600"
                  fontSize="sm"
                  fontStyle={"italic"}
                  fontWeight={"700"}
                >
                  From ₹{el.fair} per day
                </Text>
                <Text
                  color="blue.600"
                  fontSize="sm"
                  fontWeight={"700"}
                  fontFamily={"Lobster Two cursive"}
                  fontStyle="italic"
                >
                  {el.Milage}
                </Text>
                <Text
                  color="red.600"
                  fontSize="sm"
                  fontWeight={"700"}
                  fontFamily={"Lobster Two cursive"}
                  fontStyle="italic"
                >
                  Rating: {el.rating}/5
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default CarCart;
