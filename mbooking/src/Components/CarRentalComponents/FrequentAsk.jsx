import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import "./popularCarDestination.css";
const FrequentAsk = () => {
  return (
    <>
      <Box width={"80%"} margin="auto">
        <Heading textAlign={"left"} fontSize={"2xl"}>
          Frequently asked questions
        </Heading>
        <br />

        <Flex marginLeft={""}>
          <Box style={{ border: "1px solid black", borderRadius: "20px" }}>
            <Box w={"90%"} margin="auto">
              <Text
                textAlign={"left"}
                fontSize="sm"
                fontFamily={" Lobster Two cursive"}
                fontWeight="600"
              >
                What do I need to rent a car?
              </Text>
              <Text
                textAlign={"left"}
                fontSize="sm"
                fontFamily={" Lobster Two cursive"}
              >
                When you’re booking the car, you just need a debit or credit
                card.
                <br />
                <Text
                  fontFamily={" Lobster Two cursive"}
                  style={{ textAlign: "left" }}
                  fontSize="sm"
                >
                  At the rental counter, you’ll need:
                </Text>
              </Text>

              <Text
                style={{ textAlign: "left" }}
                fontFamily={" Lobster Two cursive"}
                fontSize="sm"
              >
                Important: Please make sure you check the car’s rental terms as
                well, as each rental company has its own rules. For example?
                They might need to see some extra ID. They might not accept
                certain types of credit card. Or they might not rent to any
                driver who hasn’t held their driving licence for 36 months or
                more.
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              border: "1px solid black",
              marginLeft: "30px",
              borderRadius: "20px",
            }}
          >
            <Box w="80%" margin={"auto"}>
              <Text fontFamily={" Lobster Two cursive"} fontWeight="600" fontSize={"sm"} textAlign="left"   >
                Am I old enough to rent a car
              </Text>
              <Text fontFamily={" Lobster Two cursive"} fontSize="sm"   >
                Most companies will rent you a car if you’re at least 21 (and
                some will rent to younger drivers). But if you’re under 25, you
                might still have to pay.
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              border: "1px solid black",
              marginLeft: "30px",
              borderRadius: "20px",
            }}
          >
            <Box w="80%" margin={"auto"}>
              <Text fontSize="sm" fontWeight={"600"} fontFamily={" Lobster Two cursive"} textAlign="left"    >
                Can I Book a Car for my partner ,frined ,colleguse,etc?
              </Text>
              <Text fontSize="sm" fontFamily={" Lobster Two cursive"}  textAlign="left"  >
                Of course. Just put their details in the ‘Driver Details’ form
                when you’re booking the car.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box width={"80%"} margin="auto">
        {/* //Second Part */}
        <br />
        <Flex>
       
          <Box
            style={{
              border: "1px solid black",
              borderRadius: "20px",
              marginLeft: "20px",
            }}
          >
            <Box width={"80%"} margin="auto">
              <Text
                fontSize="sm"
                fontWeight={"600"}
                fontFamily={" Lobster Two cursive"}
                textAlign="left"
              >
                Is the rental price all inclusive?
              </Text>
              <Text fontSize={"sm"} textAlign="left">
                The price you see includes the car, mandatory cover (e.g. Theft
                Protection and Collision Damage Waiver) and fees that, if they
                apply, are usually payable at pick-up (e.g. any one-way fees,
                airport surcharges or local taxes). It also includes any extras
                you’ve already added (e.g. GPS or baby seats). It doesn’t
                include any extra cover you buy when you get to the rental
                counter. Tip: There’s a full price breakdown on the Payment
                page.
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              border: "1px solid black",
              marginLeft: "30px",
              borderRadius: "20px",
            }}
          >
            <Box w="80%" margin={"auto"}>
              <Text fontSize="sm" fontFamily={" Lobster Two cursive"}   fontWeight="600"textAlign={"left"}  >
                Can I Book a Car for my partner ,frined ,colleguse,etc?
              </Text>
              <Text fontSize="sm" fontFamily={" Lobster Two cursive"}   textAlign="left"  >
                Of course. Just put their details in the ‘Driver Details’ form
                when you’re booking the car.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FrequentAsk;
