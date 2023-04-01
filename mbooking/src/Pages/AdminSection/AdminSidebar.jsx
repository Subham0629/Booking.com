import React, { useState } from "react";
import "./SideBar.css";

import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <Box style={{ left: "5%", position: "fixed" }}>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpaned(!expanded)}
        >
          <UilBars />
        </div>
        <motion.div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
          {/* logo */}
          <div className="logo">
            <Image
              src="https://user-images.githubusercontent.com/106021674/229298462-30fce48f-0523-4c4f-8b82-2c19144610f7.png"
              alt=""
            />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>

          <div className="menu">
            {SidebarData.map((item, index) => {
              return (
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <Link to={item.to}>
                    <span>{item.heading}</span>
                  </Link>
                </div>
              );
            })}
            {/* signoutIcon */}
            <div className="menuItem">
              <UilSignOutAlt />
            </div>
          </div>
        </motion.div>
      </Box>
    </>
  );
};

export default Sidebar;
