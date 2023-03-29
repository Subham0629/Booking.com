import React from 'react'
import CleanCar from '../../Components/CarRentalComponents/CleanCar'
import Popular from '../../Components/CarRentalComponents/Popular'
import SearchInputCar from '../../Components/CarRentalComponents/SearchInputCar'
import PopularCarSlide from '../../Components/Spiwer/PopularCarSlide'
const Carrental = () => {
  return (
    <div>
        <SearchInputCar/>
        <br/>
        <CleanCar/>
        <br/>
        <Popular/>
        <br/>
       
    </div>
  )
}

export default Carrental