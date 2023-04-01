import React from 'react';
import "./Flights.css";
import Sidebar from './Sidebar';
import Main from './Main';

const Flights = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"85%",margin:"auto"}}>
      <div style={{width:"37%"}} >
        <Sidebar />
      </div>
      <div style={{width:"63%"}} >
        <Main />
      </div>
    </div>
  )
}

export default Flights