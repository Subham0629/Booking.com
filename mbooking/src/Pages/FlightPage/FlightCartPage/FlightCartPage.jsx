import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FlightCartPage = ({id}) => {

    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);
    const navigate = useNavigate();

    let handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/flightcart/${id}`);
        setCount(count+1);
    };

    const handleClick = (id)=>{
        navigate(`/flights/bookflight/${id}`)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/flightcart`).then((res)=>setData(res.data))
    },[data]);

    

  return (
    <div style={{width:"60%", margin:"auto"}} >
        {data.map((data)=>{
            return (
                <div style={{height:"180px",marginBottom:"20px",borderRadius:"5px",border:"1px solid rgb(235,235,235)",display:"flex",justifyContent:"space-evenly"}} >
                    <div style={{border:"1px solid solid rgb(235,235,235)", width:"70%", margin:"auto"}} >
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img width={30} src={data.logo} alt="img" />    
                        <div style={{marginLeft:"10px"}} >{data.name}</div>
                    </div>
                        <div style={{display:'flex', justifyContent:'space-evenly',alignItems:"center",height:"60px"}} >
                            <div>
                                <h3 style={{fontSize:"20px", fontWeight:"600"}} >{data.departureTime}</h3>
                                <p style={{fontSize:"12px", fontWeight:"400"}} >{data.date}</p>
                            </div>
                            <div style={{width:"30%"}} >
                                <hr style={{border:"1px solid gray"}}/>
                            </div>
                            <div>
                            <div>
                                <h3 style={{fontSize:"20px", fontWeight:"600"}} >{data.arrivalTime}</h3>
                                <p style={{fontSize:"12px", fontWeight:"400"}} >{data.date}</p>
                            </div>
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly',alignItems:"center",height:"60px"}} >
                            <div>
                                <h3 style={{fontSize:"20px", fontWeight:"600"}} >{data.rdepatureTime}</h3>
                                <p style={{fontSize:"12px", fontWeight:"400"}} >{data.rDate}</p>
                            </div>
                            <div style={{width:"30%"}} >
                                <hr style={{border:"1px solid gray"}}/>
                            </div>
                            <div>
                                <h3 style={{fontSize:"20px", fontWeight:"600"}} >{data.returnTime}</h3>
                                <p style={{fontSize:"12px", fontWeight:"400"}} >{data.rDate}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                        <p style={{marginTop:"10px",marginRight:"12px",textAlign:"right",fontWeight:"400",fontSize:"15px"}} >Included: personal item, cabin bag, checked bag</p>
                        <p style={{marginTop:"10px",marginRight:"12px",textAlign:"right",fontWeight:"700",fontSize:"20px"}} >INR {data.price}.00</p>
                        <p style={{marginRight:"12px",textAlign:"right",fontWeight:"400",fontSize:"11px"}}>Total price for all travellers</p>
                    </div>
                        <Button onClick={()=>handleClick(data.id)} marginTop={5} colorScheme='blue' variant='outline'>
                            Book Now
                        </Button>
                        <Button onClick={()=>handleDelete(data.id)} marginTop={5} colorScheme='blue' variant='outline'>
                            Remove
                        </Button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default FlightCartPage;