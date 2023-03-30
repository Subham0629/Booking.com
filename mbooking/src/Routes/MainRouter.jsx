import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Carrental from "../Pages/CarRental/Carrental"
const MainRouter = () => {
  return (
  <Routes>
    <Route path="/car" element={<Carrental/>}/>
    <Route/>
    <Route/>
    <Route/>
  </Routes>
  )
}

export default MainRouter