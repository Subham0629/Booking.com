import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrental from "../Pages/CarRental/Carrental";
import LondonCar from "../Components/CarRentalComponents/LondonCar";
import ParisCar from "../Components/CarRentalComponents/ParisCar";
import Madrid from "../Components/CarRentalComponents/Madrid";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/car" element={<Carrental />} />
      <Route path="/london" element={<LondonCar />} />
      {/* <Route path={`/london/:id`}  element={} */}
      <Route path="/paris" element={<ParisCar />} />
      <Route path="/madrid" element={<Madrid />} />
      <Route path="/carrental" element={<Carrental />} />
    </Routes>
  );
};

export default MainRouter;
