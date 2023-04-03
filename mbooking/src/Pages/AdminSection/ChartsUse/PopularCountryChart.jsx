import React from "react";
import Chart from "react-apexcharts";
import { Text } from "@chakra-ui/react";
const PopularCountryChart = () => {
  return (
    <div  style={{width:"40%"}}>
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
         Most popular city People book from our site
        </Text>
      <Chart
        type="pie"
        width={500}
        height={350}
        series={[20, 18, 12,26,10,14]}
        options={{
          labels: ["london", "paris", "madrid","Dubai","Malaga","lisbon"],
        }}
      ></Chart>
    </div>
  );
};

export default PopularCountryChart;
