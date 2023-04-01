import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import "./World.css";
import { Link } from 'react-router-dom';

const World = ({asia,northAmerica,ocean,europe}) => {
  return (
    <div className='main'>
        <h2>Fly worldwide with Booking.com</h2>
        <p>Flights from wherever you are to wherever you want to go</p>
        <Tabs>
        <TabList>
            <Tab>Europe</Tab>
            <Tab>Oceania</Tab>
            <Tab>North America</Tab>
            <Tab>Asia</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
            <div className='europe'>
                {europe.map((data)=>{
                    return (
                        <Link to="/flights">
                        <div className='europe-main'>
                            <img src={data.image} alt="img" />
                            <div>
                                <h4>{data.origin} to {data.destination}</h4>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
            </TabPanel>
            <TabPanel>
            <div className='europe'>
                {ocean.map((data)=>{
                    return (
                        <Link to="/flights">
                        <div className='europe-main'>
                            <img src={data.image} alt="img" />
                            <div>
                                <h4>{data.origin} to {data.destination}</h4>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
            </TabPanel>
            <TabPanel>
            <div className='europe'>
                {northAmerica.map((data)=>{
                    return (
                        <Link to="/flights">
                        <div className='europe-main'>
                            <img src={data.image} alt="img" />
                            <div>
                                <h4>{data.origin} to {data.destination}</h4>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
            </TabPanel>
            <TabPanel>
            <div className='europe'>
                {asia.map((data)=>{
                    return (
                        <Link to="/flights">
                        <div className='europe-main'>
                            <img src={data.image} alt="img" />
                            <div>
                                <h4>{data.origin} to {data.destination}</h4>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </div>
  )
}

export default World