import React, { useEffect } from 'react'
import { asiaData, europeData, flightData, northAmericaData, oceaniaData, popularFligthData, trendingCitiesData } from '../../Redux/flightReducer/action';
import {useDispatch, useSelector} from "react-redux";
import "./Flight.css";
import { Link } from "react-router-dom";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import "swiper/css";
import "swiper/css/pagination";
import PopularFlight from './PopularFlights/PopularFlight';
import TrendingCity from './TrendingCity/TrendingCity';
import World from './World/World';
import Faq from './Faq/Faq';

const Flight = () => {

    const dispatch = useDispatch();
    const {popularFlight,trendingCity,asiaa,europee,northAmericaa,oceaniaa} = useSelector((state)=> state.flightReducer);


    useEffect(()=>{
        dispatch(popularFligthData);
        dispatch(trendingCitiesData);
        dispatch(asiaData);
        dispatch(europeData);
        dispatch(northAmericaData);
        dispatch(oceaniaData);
    },[]);
    

  return (
    <>
      <div className='corona' >
        <p> <InfoOutlineIcon w={5} h={8} color="red.500" marginRight="8px" /> Coronavirus (COVID-19) may affect your travel plans. <Link style={{color:"blue",textDecoration:"underline"}}>Learn more</Link></p> 
      </div>
      <PopularFlight key={popularFlight.id} data={popularFlight} />
      <br />
      <br />
      <TrendingCity key={trendingCity.id} data={trendingCity} />
      <br />
      <br />
      <div className='hidden-fee'>
        <div >
          <div>
            <h3>Huge selection</h3>
            <p>Easily compare thousands of flights, all in one place</p>
          </div>
          <div>
            <h3>No hidden fees</h3>
            <p>Always know exactly what you’re paying for</p>
          </div>
          <div>
            <h3>More flexibility</h3>
            <p>Keep your travel dates open with flexible plane ticket options</p>
          </div>
        </div>
      </div>
      <br />
      <World asia={asiaa} ocean={oceaniaa} europe={europee} northAmerica={northAmericaa} />
      <Faq />
      <div className='about'>
        <div>
          <h3>About Booking.com</h3>
          <h3>Terms & Conditions</h3>
          <h3>How We Work</h3>
          <h3>Privacy & Cookie statement</h3>
          <h3>Flights Help</h3>
        </div>
      </div>
    </>
  )
}

export default Flight;
