import { Box, Divider, Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import "./popularCarDestination.css";
const FrequentAsk = () => {
  return (
    <div
      style={{ width: "80%", margin: "auto", border: "1px dotted #e7e7e7   " }}
    >
      <div
        class="b3d1cacd40 fa9b321dfd a2cb913cd1"
        style={{
          marginBottom: "8px",
          backgroundColor: "#fff",
          borderRadius: "2px",
        }}
      >
        <div class="e1f827110f f0d4d6a2f5 fda3b74d0d">
          Frequently asked questions
        </div>
      </div>
      <br />
      <Box>
        <div className="w-full px-4 pt-16">
          <div>
            <Box>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <h3
                        style={{
                          textAlign: "left",
                          marginLeft: "-450px",
                          fontWeight: "700",
                          fontFamily: "Lobster Two cursive",
                          lineHeight: "28px",
                          fontSize: "20px",
                        }}
                      >
                        What do I need a rental Car?
                      </h3>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <span
                        className="text_disclosure"
                        style={{ fontFamily: "Lobster Two cursive" }}
                      >
                        Important: Please make sure you check the car’s rental
                        terms as well, as each rental company has its own rules.
                        For example? They might need to see some extra ID. They
                        might not accept certain types of credit card. Or they
                        might not rent to any driver who hasn’t held their
                        driving licence for 36 months or more.
                      </span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Box>
            <Divider />
            <Box>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <h3
                        style={{
                          textAlign: "left",
                          fontWeight: "700",
                          fontFamily: "Lobster Two cursive",
                          lineHeight: "28px",
                          fontSize: "20px",
                          marginLeft: "-450px",
                        }}
                      >
                        Am I old enough to rent a car?{" "}
                      </h3>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <span
                        className="text_disclosure"
                        style={{ fontFamily: "Lobster Two cursive" }}
                      >
                        Most companies will rent you a car if you’re at least 21
                        (and some will rent to younger drivers). But if you’re
                        under 25, you might still have to pay a ‘young driver
                        fee’.
                      </span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Box>
            <Divider />
            {/* Another Box */}
            <Box>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <h3
                        style={{
                          textAlign: "left",
                          fontWeight: "700",
                          fontFamily: "Lobster Two cursive",
                          lineHeight: "28px",
                          fontSize: "20px",
                          marginLeft: "-450px",
                        }}
                      >
                        Can I Book a car for my Partner,freind,colleague,etc?{" "}
                      </h3>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <span
                        className="text_disclosure"
                        style={{ fontFamily: "Lobster Two cursive" }}
                      >
                        Of course. Just put their details in the ‘Driver
                        Details’ form when you’re booking the car.
                      </span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Box>
            <Divider />
            <Box>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <h3
                        style={{
                          textAlign: "left",
                          fontWeight: "700",
                          fontFamily: "Lobster Two cursive",
                          lineHeight: "28px",
                          fontSize: "20px",
                          marginLeft: "-450px",
                        }}
                      >
                        Any tips on choosing the right car?{" "}
                      </h3>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <span
                        className="text_disclosure"
                        style={{ fontFamily: "Lobster Two cursive" }}
                      >
                        <li>
                          Think about where you’re going. An SUV might be great
                          for cruising down a Texas freeway, but a smaller car’s
                          probably much easier to drive in Rome.
                        </li>
                        <li>
                          See what other people think. You’ll find lots of
                          reviews and ratings on our site, so find out what
                          other customers liked (and didn’t like) about each
                          rental company.
                        </li>
                        <li>
                          Don’t forget the gearbox. In some countries, nearly
                          everyone drives a manual car. In others, automatics
                          are the norm. Make sure you rent one you can drive!
                        </li>
                      </span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Box>
            <Divider />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FrequentAsk;
