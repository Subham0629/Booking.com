import React from "react";
import "./popularCarDestination.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CarPopularDestinationCard = ({
  id,
  image,
  city,
  carDetail,
  fair,
  Link,
}) => {
    console.log(`/${Link}`)
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={city} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading color={"#000"} size="md">
            {city}
          </Heading>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "400px",
              lineHeight: "20px",
            }}
          >
            {carDetail}
          </Text>
          <Text color="#262626" fontSize="sm">
            <Image
              src="https://user-images.githubusercontent.com/106021674/228558541-2e39c8c1-2735-4152-8428-201040805844.png"
              alt="car"
              width={"30px"}
              height="30px"
              color={"#262626"}
            />{" "}
            From ₹{fair} per day
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/${Link}`}>
            {" "}
            <Button variant="solid" colorScheme="blue">
              Watch
            </Button>
          </Link>
          <Link to={`/${Link}`}>
            <Button variant="ghost" className="Btn6">
              More Detail
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CarPopularDestinationCard;
//<div>From ₹&nbsp;2,970.57 per day</div>
