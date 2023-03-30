import { Heading } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'

const FilterHotels = () => {
    
 /*...................Sorting....................*/
 const [searchParams,setSearchParams]=useSearchParams();
 const initialOrder =searchParams.get("order")
 const initialrating=searchParams.getAll("rating")
 const [order,setOrder]=useState(initialOrder||"")
 const [rating,setrating]=useState(initialrating||[])

 const [slide,setslide]=useState(0)
 useEffect(()=>{
  let params={
    rating
  }
  order && (params.order=order)
  setSearchParams(params)
},[rating,order])

 const handleSort=(e)=>{
  setOrder(e.target.value)
}
const handleChange=(e)=>{
        
    let newrating=[...rating];
    const value=e.target.value;
    if(newrating.includes(value)){
        newrating=newrating.filter((el)=>el!==value)
    }else{
        newrating.push(value)
    }
    setrating(newrating)
}
console.log(slide);
  return (
    <div style={{border:"1px solid grey",marginTop:"50px",marginRight:"7px",borderRadius:"5px"}} >
      <Heading size={"md"} mt={"20px"} alignItems="flex-start">Filter By:</Heading>
      <div style={{marginTop:"30px" ,borderTop:"1px solid grey", padding:"10px"}}>
      <h3 style={{marginBottom:"20px",fontWeight:"bold"}}>Star rating</h3>
      <div>
        <input type="checkbox" value={"1"} onChange={handleChange} checked={rating.includes("1")}/>
        <label> 1 stars</label>
        </div>
        <div>
        <input type="checkbox" value={"2"} onChange={handleChange} checked={rating.includes("2")}/>
        <label> 2 stars</label>
        </div>
        <div>
        <input type="checkbox" value={"3"} onChange={handleChange} checked={rating.includes("3")}/>
        <label> 3 stars</label>
        </div>
        <div>
        <input type="checkbox" value={"4"} onChange={handleChange} checked={rating.includes("2")}/>
        <label> 4 stars</label>
        </div>
        <div>
        <input  type="checkbox" value={"5"} onChange={handleChange} checked={rating.includes("3")}/>
        <label> 5 stars</label>
        </div>
        </div>
        
        <br />
        <hr/>
        <br />
        <div style={{marginTop:"30px" ,borderBottom:"1px solid grey", padding:"10px",paddingBottom:"50px"}}>
        <h3 style={{marginBottom:"20px",fontWeight:"bold"}}>Sort by price</h3>
        <div onChange={handleSort}>
            <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
            <label>Ascending</label><br />
            <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
            <label>Descending</label>
        </div>
        </div>
    </div>
  )
}

export default FilterHotels
