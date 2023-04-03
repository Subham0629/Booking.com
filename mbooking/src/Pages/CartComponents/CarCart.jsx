import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelCart } from "../../Redux/Stay/action";
import { Box, Image, Flex, useToast, background } from "@chakra-ui/react";
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
import { carCartGet } from "../../Redux/CarRental/action";
import { deleteCarCart } from "../../Redux/CarRental/action";
import { Link, useNavigate } from "react-router-dom";

const CarCart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  const data = useSelector((store) => store.CarReducer);
  const handleToast = useToast();
  const navigate = useNavigate();



  const handleDelete = (id) => {
    console.log("iddeleyepasdkjaks", id);

    handleToast({
      title: "Data Delete Successfull; .",
      description: "Delete Successfull.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    dispatch(deleteCarCart(id));
  };
  const val = data.cart;
  console.log("val", val);
  let ToTalData = () => {
    if (data.cart) {
      setTotal(val.reduce((acc, el) => acc + Number(el.fair), 0));
    } else {
      setTotal(0);
    }
  };
  setTimeout(() => {
    ToTalData();
  }, 100);

  const handlePayment = (id) => {
    handleToast({
      title: "Welcome to payment page; .",
      description: "welcome to payment page.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate(`/payment/${id}`);
  };

  useEffect(() => {
    dispatch(carCartGet());
    ToTalData();
  }, []);

  console.log("dataCartValue", data);
  return (
    <div>
      <Box>
        <Flex justifyContent="space-around">
          <Button
            variant="solid"
            bg="blue.600"
            color="#ffff"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
          >
            <Text fontWeight="700" fontStyle="italic">
              Total Cart Value{total}
            </Text>
          </Button>
          <Box>
            <Link to="/payment">
              <Button variant="solid" bg="blue.600" color="#ffff">
                Payment
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
      <br />
      <Divider />
      <br />

      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
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
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleDelete(el.id)}
                  >
                    Remove
                  </Button>
                  <Button color="#ffff" bg="blue.600"
                  
                 
                  onClick={() => handlePayment(el.id)}>Payment</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default CarCart;
