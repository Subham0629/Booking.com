import React from "react";
import { Image } from "@chakra-ui/image";
import CleanCar from "../../Components/CarRentalComponents/CleanCar";
import Popular from "../../Components/CarRentalComponents/Popular";
import SearchInputCar from "../../Components/CarRentalComponents/SearchInputCar";
import FrequentAsk from "../../Components/CarRentalComponents/FrequentAsk";
import TopWorldCar from "../../Components/CarRentalComponents/TopWorldCar";
import CarSaveTimeSection from "../../Components/CarRentalComponents/CarSaveTimeSection";

const Carrental = () => {
  return (
    <div>
      <SearchInputCar />
      <br />
      <CleanCar />
      <br />
      <Popular />
      <br />
      <Image
        src="https://user-images.githubusercontent.com/106021674/228573884-5acc6bc0-1946-4438-84ec-ae32c2062d3a.png"
        alt="cancellation"
      />
      <br />
      <FrequentAsk />
      <br />
      <TopWorldCar />
      <br />
      <CarSaveTimeSection />
    </div>
  );
};

export default Carrental;
