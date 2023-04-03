import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { carDataName } from "../../../Redux/CarRental/action";
import { getHotels } from "../../../Redux/Stay/action";
import axios from "axios";
import { Text } from "@chakra-ui/react";
export function PieChart() {
  const dispatch = useDispatch();
  const carLength = useSelector((state) => state.CarReducer);
  const hotelLength = useSelector((state) => state.hotelReducer);

  const [val, setval] = useState(0);
  const flightData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/hotels`);
      setval(res.data.length);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    dispatch(carDataName());
    flightData();
    dispatch(getHotels());
  }, []);

  return (
    <>
      <div class="container-fluid"  style={{width:"40%"}}>
        <Text
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            fontWeight: "900",
            opacity: "0.9",
            margin: "0",
            
            fontFamily: "DM Sans sans-serif",
            fontStyle: "italic",
            color:"#fff"
          }}
        >
          Show that the Total number of product present in the Data
        </Text>
        <Chart
          type="pie"
          width={500}
          height={350}
          series={[
            carLength?.carRental.length,
            hotelLength?.hotels.length,
            val,
          ]}
          options={{
            labels: ["Car", "Hotels", "Flight"],
          }}
        ></Chart>
      </div>
    </>
  );
}
