import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrental from "../Pages/CarRental/Carrental";
import LondonCar from "../Components/CarRentalComponents/LondonCar";
import ParisCar from "../Components/CarRentalComponents/ParisCar";
import Madrid from "../Components/CarRentalComponents/Madrid";

import Flight from "../Pages/FlightPage/Flight";
import Flights from "../Pages/FlightPage/Filghts/Flights";
import SingleFlightPage from "../Pages/FlightPage/SingleFlightPage/SingleFlightPage";

import HotelCard from "../Pages/Stays/HotelCard";
import Stay from "../Pages/Stays/Stay";
import DubaiCar from "../Components/CarRentalComponents/DubaiCar";
import CarName from "../Components/CarRentalComponents/CarName";
import CarNameSinglePageId from "../Components/CarRentalComponents/CarNameSinglePageId";
import PaymentSection from "../Pages/PaymentSection/PaymentSection";
import Cartbag from "../Pages/CartComponents/Cartbag";
import FlightCartPage from "../Pages/FlightPage/FlightCartPage/FlightCartPage";
import BookFlight from "../Pages/FlightPage/BookFlight/BookFlight";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/london" element={<LondonCar />} />
      {/* <Route path={`/london/:id`}  element={} */}
      <Route path="/paris" element={<ParisCar />} />
      <Route path="/madrid" element={<Madrid />} />
      <Route path="/carrental" element={<Carrental />} />
      
      <Route path="/flight" element={<Flight />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/flights/:id" element={<SingleFlightPage />} />
      <Route path="/flightCart" element={<FlightCartPage/>} />
      <Route path="/flights/bookflight/:id" element={<BookFlight/>} />
    
      <Route path="/" element={<Stay />} />
      <Route path="/hotel/:id" element={<HotelCard />} />
      <Route path="/london" element={<LondonCar />} />
      <Route path="/madrid" element={<Madrid />} />
      <Route path="/dubai" element={<DubaiCar />} />
      <Route path="/carName" element={<CarName />} />
      <Route path="/carName/:id" element={<CarNameSinglePageId />} />
      <Route path="/payment" element={<PaymentSection />} />
      <Route path="/cart" element={<Cartbag />} />

    </Routes>
  );
};

export default MainRouter;
