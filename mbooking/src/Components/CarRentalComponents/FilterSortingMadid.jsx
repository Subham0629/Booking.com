import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const FilterSorting = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [order, setOrder] = useState("");

  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  useEffect(() => {
    let params = {
      order,
    };

    setSearchParam(params);
  }, [order]);

  return (
    <div>
      <Box onChange={handleSort}>
        <Text
          fontSize={"2xl"}
          fontStyle="italic"
          fontFamily={"Lobster Two cursive"}
          fontWeight={"700"}
        >
          Sort Price
        </Text>
        <input type="checkbox" value="asc" checked={order==="asc"} />
        <br />
        <label>Ascending</label>
        <br />
        <input type="checkbox" value={"desc"} checked={order==="desc"} />
        <br />
        <label>Descending</label>
      </Box>
    </div>
  );
};

export default FilterSorting;
//font-family: 'Lobster Two', cursive;
