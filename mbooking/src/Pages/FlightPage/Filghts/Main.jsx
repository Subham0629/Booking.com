import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flightData } from '../../../Redux/flightReducer/action';
import { Button } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Main = () => {

    const dispatch = useDispatch();
    const {flightss} = useSelector((store)=>store.flightReducer);
    const [searchParams] = useSearchParams();
    console.log(flightss);

    let paramObj = {
        params : {
            name : searchParams.getAll("category"),
            _sort : searchParams.get("order") && "price",
            _order : searchParams.get("order") 
        }
    }


    useEffect(()=>{
        dispatch(flightData(paramObj))
    },[searchParams])

  return (
    <div>
        {flightss.map((data)=>{
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
                        <Button marginTop={5} colorScheme='blue' variant='outline'>
                            See Flight
                        </Button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Main;