import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Carrental from "../Pages/CarRental/Carrental"
import HotelCard from '../Pages/Stays/HotelCard'
import Stay from '../Pages/Stays/Stay'
const MainRouter = () => {
  return (
  <Routes>
    <Route path="/car" element={<Carrental/>}/>
    <Route path="/" element={<Stay/>}/>
    <Route path='/hotel/:id' element={<HotelCard/>}/>
    <Route/>
  </Routes>
  )
}

export default MainRouter