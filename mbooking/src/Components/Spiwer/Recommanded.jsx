import "./Recommanded.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Text, Box } from "@chakra-ui/react";
export default function RecommanedCarSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide  style={{border:"1px solid black",borderRadius:"7px"}} >
          <Box style={{height:"120px",width:"80%",margin:"auto"}}>
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London City Airpot
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide   style={{border:"1px solid black",borderRadius:"7px"}}   >
          <Box style={{height:"120px",width:"80%",margin:"auto"}}   >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at Gatwick Airpot
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{border:"1px solid black",borderRadius:"7px"}}  >
          <Box  style={{height:"120px",width:"80%",margin:"auto"}}>
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at Haeathrow Airpot
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide  style={{border:"1px solid black",borderRadius:"7px"}}  >
          <Box  style={{height:"120px",width:"80%",margin:"auto"}}  >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London Stansted Airpot
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide  >
        <SwiperSlide   style={{border:"1px solid black",borderRadius:"7px"}} >
          <Box   style={{height:"120px",width:"80%",margin:"auto"}}   >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London-Park Royal
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide   >
        <SwiperSlide style={{border:"1px solid black",borderRadius:"7px"}} >
          <Box    style={{height:"120px",width:"80%",margin:"auto"}}  >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London -St Pancras
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{border:"1px solid black",borderRadius:"7px"}}    >
          <Box   style={{height:"120px",width:"80%",margin:"auto"}}  >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London SoutthGate
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{border:"1px solid black",borderRadius:"7px"}}   >
          <Box   style={{height:"120px",width:"80%",margin:"auto"}}  >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London -Sephard Bush
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{border:"1px solid black",borderRadius:"7px"}}   >
          <Box   style={{height:"120px",width:"80%",margin:"auto"}}  >
            <h2
              style={{ textAlign: "left", fontSize: "22px", fontWeight: "700" }}
            >
              Car hire at London -Russel Square
            </h2>
            <Text
              lineHeight={"24px"}
              fontWeight="400"
              fontSize={"16px"}
              fontFamily={
                "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-seri"
              }
              textAlign="left"
            >
              {" "}
              Search rental car at this pick-up location
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
