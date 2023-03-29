import { async } from "q";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popularCarDestination.css";
import { Box } from "@chakra-ui/layout";
import CarPopularDestinationCard from "./CarPopularDestinationCard";
const PopularDestination = () => {
  const [car, setCar] = useState([]);

  const PopularData = async () => {
    try {
      let res = await axios.get(` http://localhost:8080/popular_city_car_hire`);
      setCar(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    PopularData();
  }, []);
  console.log("res", car);
  return (
    <div>
      <h2 class="cars__header">Popular destinations for car hire</h2>
      <br />
      <Box style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {car?.map((el) => {
          return (
            <Box>
              <CarPopularDestinationCard
                key={el.id}
                image={el.image}
                city={el.city}
                carDetail={el.carDetail}
                fair={el.fair}
                Link={el.Link}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default PopularDestination;
