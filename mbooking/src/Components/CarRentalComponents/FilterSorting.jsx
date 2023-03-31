import React, { useState, useEffect } from "react";
import { Text, Box, Divider } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const FilterSorting = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [order, setOrder] = useState("");
  const [supply, setSupply] = useState([]);
  const [price, setPrice] = useState([]);
  const [star,setStar]=useState([])
  const handleFilter = (e) => {
    let newCategory = [...supply];
    const Value = e.target.value;
    if (newCategory.includes(Value)) {
      newCategory = newCategory.filter((el) => el !== Value);
    } else {
      newCategory.push(Value);
    }
    setSupply(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const handlePrice = (e) => {
    let newCategory = [...price];
    const Value = e.target.value;
    if (newCategory.includes(Value)) {
      newCategory = newCategory.filter((el) => el !== Value);
    } else {
      newCategory.push(Value);
    }
    setPrice(newCategory);
  };

const handleStar=(e)=>{
  let newCategory = [...star];
  const Value = e.target.value;
  
  if (newCategory.includes(Value)) {
    newCategory = newCategory.filter((el) => el !== Value);
  } else {
    newCategory.push(Value);
  }
  setStar(newCategory);
}

console.log("star",star)
  useEffect(() => {
    let params = {
      order,
      supply,
      price,
      star
    };

    setSearchParam(params);
  }, [order,supply, price,star]);

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box onChange={handleSort}>
        <Text
          fontSize={"2xl"}
          fontStyle="italic"
          fontFamily={"Lobster Two cursive"}
          fontWeight={"700"}
        >
          Sort Price
        </Text>
        <input type="checkbox" value="asc" checked={order === "asc"} />
        <br />
        <label>Ascending</label>
        <br />
        <input type="checkbox" value={"desc"} checked={order === "desc"} />
        <br />
        <label>Descending</label>
      </Box>

      <Divider />
      <br />
      <Box>
        <Text
          fontSize={"2xl"}
          fontStyle="italic"
          fontFamily={"Lobster Two cursive"}
          fontWeight={"700"}
        >
          Filter company
        </Text>
        <input
          type="checkbox"
          value="Alamo"
          onChange={handleFilter}
          checked={supply.includes("Alamo")}
        />
        <label>Alamo</label>
        <br />
        <input
          type="checkbox"
          value="Avis"
          onChange={handleFilter}
          checked={supply.includes("Avis")}
        />
        <label>Avis</label>
        <br />
        <input
          type="checkbox"
          value="Budget"
          onChange={handleFilter}
          checked={supply.includes("Budget")}
        />
        <label>Budget</label> <br />
        <input
          type="checkbox"
          value="city rental"
          onChange={handleFilter}
          checked={supply.includes("Citi Rental")}
        />
        <label>City Rental</label>
        <br />
        <input
          type="checkbox"
          value="Currie Motors"
          onChange={handleFilter}
          checked={supply.includes("Currie Motors")}
        />
        <label>Currie Motors</label>
        <br />
        <input
          type="checkbox"
          value="Easirent"
          onChange={handleFilter}
          checked={supply.includes("Easirent")}
        />
        <label>Easirent</label>
        <br />
        <input
          type="checkbox"
          value="Enterprise"
          onChange={handleFilter}
          checked={supply.includes("Enterprise")}
        />
        <label>Enterprise</label>
        <br />
      </Box>
      <Divider />
      <br />
      <Box>
        <Text
          fontSize={"2xl"}
          fontStyle="italic"
          fontFamily={"Lobster Two cursive"}
          fontWeight={"700"}
        >
          Filter Cost Value
        </Text>
        <input type="checkbox" value="low" onChange={handlePrice} />
        <label>Low</label>
        <br />
        <input type="checkbox" value="medium" onChange={handlePrice} />
        <label>Medium</label>
        <br />
        <input type="checkbox" value="high" onChange={handlePrice} />
        <label>High</label>
        <br />
      </Box>
      <Divider />
      <br />
      <Box>
        <Text
          fontSize={"2xl"}
          fontStyle="italic"
          fontFamily={"Lobster Two cursive"}
          fontWeight={"700"}
        >
          Filter Cost Value
        </Text>
        <input type="checkbox" value="1" onChange={handleStar} checked={star.includes("1")} />
        <label>1⭐</label>
        <br />
        <input type="checkbox" value="2" onChange={handleStar} checked={star.includes("2")}  />
        <label>2⭐⭐</label>
        <br />
        <input type="checkbox" value="3"  onChange={handleStar} checked={star.includes("3")}   />
        <label>3⭐⭐⭐</label>
        <br />
        <input type="checkbox" value="4" onChange={handleStar}  checked={star.includes("4")}   />
        <label>4⭐⭐⭐⭐</label>
        <br />
        <input type="checkbox" value="5" onChange={handleStar}  checked={star.includes("5")} />
        <label>5⭐⭐⭐⭐⭐</label>
        <br />
      </Box>
    </div>
  );
};

export default FilterSorting;
//font-family: 'Lobster Two', cursive;
