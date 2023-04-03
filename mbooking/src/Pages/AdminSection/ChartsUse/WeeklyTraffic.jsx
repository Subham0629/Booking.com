import React from "react";
import Chart from "react-apexcharts";
import { Text } from "@chakra-ui/react";
const WeeklyTraffic = () => {
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
          Show that the Customer Traffic
        </Text>
      <Chart
        type="pie"
        width={500}
        height={350}
        series={[300,250,350,150,650,750,1200,2400]}
        options={{
          labels: ["monday", "Tuesday", "Wednesday","thursday","friday","saturday","sunday"],
        }}
      ></Chart>
    </div>
  );
};

export default WeeklyTraffic;