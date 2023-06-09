import React from "react";
import Chart from "react-apexcharts";
import { Text } from "@chakra-ui/react";
const Horizontal = () => {
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
          Show that the Total number of booking present by coustomer
        </Text>
      <Chart
        type="pie"
        width={500}
        height={350}
        series={[41.1, 14.3, 17.9]}
        options={{
          labels: ["popular Car", "popular flight", "Number of visiter in hotels"],
        }}
      ></Chart>
    </div>
  );
};

export default Horizontal;
