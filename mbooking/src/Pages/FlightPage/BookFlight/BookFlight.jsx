import { PhoneIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookFlight = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [data, setData] = useState({});
    console.log(data);

    const bookFlightData=async()=>{
        try{
        let res=await axios.get(`https://booking-backend-w7ce.onrender.com/flights/${id}`);
        setData(res.data)
        }
        catch(err){
            console.log("err",err)
        }
        }

    useEffect(()=>{
        bookFlightData()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Flight SuccessFully Booked");
        navigate("/");
    }

  return (
    <div style={{width:"85%",margin:"auto",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",padding:"20px",borderRadius:"10px"}}>
        <form onSubmit={handleSubmit}  >
            <div style={{display:"flex"}} >
                <div  style={{width:"60%"}} >
                <div style={{textAlign:"left"}} >
                    <h2 style={{fontSize:"23px",fontWeight:"700",marginBottom:"30px"}} >Who's Flying</h2>
                    <div style={{border:"1px solid rgb(242,242,242)", padding:"20px",borderRadius:"5px"}} >
                        <h3 style={{fontSize:"18px",fontWeight:"600"}} >Contact Details</h3>
                        <br />
                        <p>Contact email</p>
                        <Input isRequired placeholder='Email' />
                        <p style={{fontWeight:"200",fontSize:"13px"}} >We'll send your flight confirmation here</p>
                        <br />
                        <p>Phone number</p>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                            />
                            <Input type="number" isRequired maxLength="10" placeholder='Phone number' />
                        </InputGroup>
                        <Checkbox m="5px" defaultChecked></Checkbox>
                        <label style={{fontWeight:"200",fontSize:"13px"}} >Get free SMS updates about your flight</label>
                    </div>
                    <br />
                    <br />
                    <div style={{border:"1px solid rgb(242,242,242)", padding:"20px",borderRadius:"5px"}}>
                        <h3 style={{fontSize:"18px",fontWeight:"600"}} >Adult 1</h3>
                        <br />
                        <div style={{display:"flex", justifyContent:"space-between"}} >
                            <div style={{width:"80%",marginRight:"10px"}}>
                                <p>First name</p>
                                <Input isRequired placeholder='First Name' />
                            </div>
                            <br />
                            <div style={{width:"80%",marginLeft:"10px"}}>
                                <p>Last name</p>
                                <Input isRequired placeholder='Last Name' />
                            </div>
                        </div>
                        <br />
                        <div>
                            <p>Gender specified on your travel document</p>
                            <Select marginBottom={"20px"} isRequired placeholder='Select Gender'>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </Select>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                
                </div>
                <div>
                    <div style={{marginTop:"55px",marginLeft:"20px"}} >
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:"17px",fontWeight:"600"}} >
                            <p>Ticket(1 adult)</p>
                            <p>INR {data?.price}.00</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between"}} >
                            <p>Flight Fare</p>
                            <p>INR {data?.price - 1200}.00</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <p>Taxes And Charges</p>
                            <p>INR 1200.00</p>
                        </div>
                        <br />
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:"22px",fontWeight:"700"}}>
                            <p>Total</p>
                            <p>INR {data?.price}.00</p>
                        </div>
                        <p style={{textAlign:"left",fontSize:"15px",fontWeight:"300"}}>Included Taxes and Charges</p>
                        <br />
                        <p style={{textAlign:"left"}}>No hidden fees - track your price at every step</p>
                        <br />
                        <div style={{textAlign:"left",border:"1px solid rgb(242,242,242)",padding:"12px",borderRadius:"5px"}} >
                            <p style={{color:"brown"}}>Give feedback</p>
                            <p>Tell us how we're doing and what could be better</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{textAlign:"left",marginLeft:"20px"}}>
                        <h3 style={{fontSize:"18px",fontWeight:"600"}} >Your Payment</h3>
                        <p style={{fontSize:"12px",fontWeight:"300"}} >Simple, safe and secure.</p>
                        <br />
                        <p>Cardholder's name</p>
                        <Input isRequired placeholder='Name' />
                        <br />
                        <br />
                        <p>Card number</p>
                        <Input isRequired placeholder='number' type='number' />
                        <br />
                        <br />
                        <div style={{display:"flex", justifyContent:"space-between"}} >
                            <div style={{marginRight:"5px"}}>
                                <p>Expiry Date</p>
                                <Input isRequired placeholder='MM/YY' />
                            </div>
                            <br />
                            <div>
                                <p>CVV</p>
                                <Input isRequired placeholder='CVV' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button m={10} colorScheme='blue' type='submit' >Pay Now</Button>
            <br />
            <br />
        </form>
    </div>
  )
}

export default BookFlight