
import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrental from "../Pages/CarRental/Carrental";
import LondonCar from "../Components/CarRentalComponents/LondonCar";
import ParisCar from "../Components/CarRentalComponents/ParisCar";
import Madrid from "../Components/CarRentalComponents/Madrid";
import HotelCard from '../Pages/Stays/HotelCard'
import Stay from '../Pages/Stays/Stay'
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/car" element={<Carrental />} />
      <Route path="/london" element={<LondonCar />} />
      {/* <Route path={`/london/:id`}  element={} */}
      <Route path="/paris" element={<ParisCar />} />
      <Route path="/madrid" element={<Madrid />} />
      <Route path="/carrental" element={<Carrental />} />
         <Route path="/car" element={<Carrental/>}/>
    <Route path="/" element={<Stay/>}/>
    <Route path='/hotel/:id' element={<HotelCard/>}/>
    </Routes>
  );
};



export default MainRouter;
