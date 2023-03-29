import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./CleanCar.css"
const CleanCar = () => {
  return (
    <div className="main_clean" style={{width:"80%",border:"1px solid #949494",margin:"auto",height:"60px"}}>
    <div style={{ width: "80%",margin:"auto",backgroundColor:"#fff",textAlign:"center",justifyContent:"center",marginTop:"10px" }}>
      <Box>
        <Flex>
            <img width={"40px"} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT5FMZIt71KlPG8apjQRpYgDEzDmwGSEbaOj8-bkO-tEbOvWbZ" alt="i_cons" />
        <div>
            <div className="clean">
                Clean Cars.Flexible bookings.Socially distant rental counters
            </div>
            <div>
            <div className="db29ecfbe2">We’re working with our partners to keep you safe and in the driving seat.</div>
            </div>
        </div>
        </Flex>
      </Box>
    </div>
    </div>
  );
};

export default CleanCar;
