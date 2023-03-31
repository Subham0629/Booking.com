import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    let initialorder = searchParams.get("order");
    const initialVal = searchParams.getAll("category");
    const [order, setOrder] = useState(initialorder || "");
    const [category, setCategory] = useState(initialVal || []);

    const handleChange=(e)=>{
        let newCategory = [...category];
        let value = e.target.value;
        if(newCategory.includes(value)){
            newCategory.splice(newCategory.indexOf(value),1);
            // newCategory.filter((el)=>el!==value)
        }
        else{
            newCategory.push(value);
        }
        setCategory(newCategory);
    }

    const handleSort = (e)=>{
        setOrder(e.target.value)
    }


    useEffect(()=>{
        let params = {
            category
        }

        order && (params.order = order);

        setSearchParams(params);
    },[category,order])
    

  return (
    <div style={{textAlign:"left"}}>
        <h2 style={{fontSize:"25px", fontWeight:"600", marginBottom:"20px"}}>Filters</h2>
        <div>
            <h2 style={{fontSize:"20px", fontWeight:"500", marginTop:"20px"}}>Price</h2>
            <div onChange={handleSort} >
                <div>
                    <input name='order' style={{width:"20px",marginTop:"30px"}} value={"asc"} defaultChecked={order.includes("asc")} type="radio" />
                    <label>Low to high</label>
                </div>
                <div style={{marginTop:"20px"}}>
                    <input name='order' style={{width:"20px"}} value={"desc"} defaultChecked={order.includes("desc")} type="radio" />
                    <label>High to low</label>
                </div>
            </div>
        </div>
        <div>
            <h2 style={{fontSize:"20px", fontWeight:"500", marginTop:"40px"}}>Airlines</h2>
            <div>
                <div style={{marginTop:"20px"}} >
                    <input value={"Air India"} onChange={handleChange} type="checkbox" checked={category.includes("Air India")} style={{width:"20px"}} />
                    <label>AirIndia</label>
                </div>
                <div style={{marginTop:"10px"}}>
                    <input
                    value={"Vistara"} onChange={handleChange} type="checkbox" checked={category.includes("Vistara")}
                     style={{width:"20px"}} />
                    <label>Vistara</label>
                </div>
                <div style={{marginTop:"10px"}}>
                    <input style={{width:"20px"}}
                    value={"IndiGo"} onChange={handleChange} type="checkbox" checked={category.includes("IndiGo")}
                     />
                    <label>Indigo</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar