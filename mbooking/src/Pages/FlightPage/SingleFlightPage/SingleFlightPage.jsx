import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const SingleFlightPage = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [data, setData] = useState({});


const singleFlightData=async()=>{
try{
let res=await axios.get(`http://localhost:8080/flights/${id}`);
setData(res.data)
}
catch(err){
    console.log("err",err)
}
}

    useEffect(()=>{
       singleFlightData()
    },[]);

    const handleCart = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/flightcart`,data)
        .then(()=>alert(`Added to cart`))
        .catch(()=>alert("Already available in your Cart!"))
    }

  return (
    <div>
        <div style={{width:"40%",margin:"auto",marginBottom:"30px"}} >
            <h2 style={{fontSize:"25px", fontWeight:"700",fontFamily:"cursive"}} >Your Flight</h2>
            <br />
            <div style={{display:"flex", justifyContent:"center"}} >
                <img style={{width:"25px",marginRight:"20px"}} src={data?.logo} alt="img" />
                <p style={{fontSize:"20px", fontWeight:"700",fontFamily:"cursive"}} >{data?.name}</p>
            </div>
            <br />
            <div style={{textAlign:"left",fontSize:"16px", fontWeight:"700",fontFamily:"cursive"}} >
                <p>Departure Date :- {data?.date}</p>
                <p>Departure Time :- {data?.arrivalTime}</p>
            </div>
            <br />
            <div style={{textAlign:"left"}} >
                <div>
                    <p>Included baggage</p>
                    <p>The total baggage included in the price</p>
                </div>
                <br />
                <div style={{borderTop:"1px solid rgb(231,231,231)",borderBottom:"1px solid rgb(231,231,231)",padding:"5px"}}>
                    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}} >
                        <p>1 personal item <br /> Must go under the seat in front of you</p>
                        <p style={{color:"green"}} >Included</p>
                    </div>
                    <br />
                    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                        <p>1 cabin bag <br /> Max weight 8 kg</p>
                        <p style={{color:"green"}} >Included</p>
                    </div>
                    <br />
                    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                        <p>1 checked bag <br />Max weight 30 kg</p>
                        <p style={{color:"green"}}>Included</p>
                    </div>
                </div>
            </div>
            <br />
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                <div style={{textAlign:"left"}} >
                    <p style={{fontSize:"18px", fontWeight:"700"}} >INR {data?.price}.00</p>
                    <p style={{fontSize:"12px", fontWeight:"400"}}>Total Price for all travelers</p>
                </div>
                <div style={{display:"flex"}}>
                    <Button marginTop={5} marginRight={5} w="60%" colorScheme='blue' variant='outline' onClick={handleCart} >Add to Bag</Button>
                    <Button onClick={()=>navigate(`/flights/bookflight/${id}`)} marginTop={5} w="60%" colorScheme='blue' variant='outline'>Buy Now</Button>
                </div>
                
            </div>
            <Button onClick={()=>navigate("/cart")} marginTop={5} w="30%" colorScheme='green' variant='outline'>Bag</Button>
        </div>
    </div>
  )
}

export default SingleFlightPage