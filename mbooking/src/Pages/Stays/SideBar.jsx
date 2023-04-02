import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { postHotelCart } from '../../Redux/Stay/action';
import { useToast } from '@chakra-ui/react'
const SideBar = ({image,price,name,availrooms}) => {
  const toast = useToast()
  console.log(availrooms);
  const dispatch=useDispatch()
    const [value, onChanged] = useState(new Date());
    const [checkoutvalue, onChange] = useState(new Date());
    const [adult,setAdult]=useState(0)
    const [children,setChildren]=useState(0)
    const [rooms,setRooms]=useState(0)
const handleChangeAdult=(val)=>{
  setAdult(prev=>prev+val)
}
const handleChangeChild=(val)=>{
  setChildren(prev=>prev+val)
}
const handleChangeRoom=(val)=>{
  setRooms(prev=>prev+val)
}
// console.log(value,checkoutvalue);

const handlePost=()=>{
  let obj={
    checkinday:value.getDate(),
    checkinmonth:value.getMonth(),
    checkinyear:value.getFullYear(),
    checkoutday:checkoutvalue.getDate(),
    checkoutmonth:checkoutvalue.getMonth(),
    checkoutyear:checkoutvalue.getFullYear(),
    adult,
    children,
    rooms,
    image,
    price,
    name
  }
  dispatch(postHotelCart(obj))
  toast({
    title: 'Added to Bag.',
    description: "We've added hotel to your bag for you.",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
}
    
 
  return (
    <div>
      <Box border={"1px solid black"} borderRadius={"10px"}> 
        <Box p={"20px"}>
          <Box>

          <Heading color={"gray"}>Add Details</Heading>
          <br />
          <Box display={"flex"} justifyContent={"space-around"}>

          < Heading size={"md"}>Check-in date: </Heading><p>{value.getDate()}-{value.getMonth()}-{value.getFullYear()}</p>
          </Box>
          <Box border={"1px solid grey"} borderRadius={"5px"} p={"8px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
          <Calendar onChange={onChanged} value={value}/>
          </Box>
          <br />
          <hr />
          <br />
          <Box display={"flex"} justifyContent={"space-around"}>
          < Heading size={"md"}>Check-out date: </Heading><p>{checkoutvalue.getDate()+1}-{checkoutvalue.getMonth()}-{checkoutvalue.getFullYear()}</p>
          </Box>
          <Box border={"1px solid grey"} borderRadius={"5px"} p={"8px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
          <Calendar onChange={onChange} value={checkoutvalue} />
          </Box>
          </Box>
          <br />
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} marginTop={"20px"}>
          <Heading paddingTop={"10px"} size={"sm"}>Adults</Heading>
          <Box border={"1px solid grey"} borderRadius={"5px"} display={"flex"}>

          <Button isDisabled={adult===0} onClick={()=>handleChangeAdult(-1)}  paddingBottom={"20px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"80px"} color={"blue"} >-</Button>
          <Heading size={"md"} paddingTop={"8px"}>{adult}</Heading>
          <Button onClick={()=>handleChangeAdult(1)}  paddingBottom={"15px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"50px"} color={"blue"}>+</Button>
          </Box>
          </Box>
          <br />
          <hr />
          <br />
          {/*..........Children*............/ */}
          <Box display={"flex"} justifyContent={"space-between"} >
          <Heading paddingTop={"10px"} size={"sm"}>Children</Heading>
          <Box border={"1px solid grey"} borderRadius={"5px"} display={"flex"}>

          <Button isDisabled={children===0} onClick={()=>handleChangeChild(-1)} paddingBottom={"20px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"80px"} color={"blue"} >-</Button>
          <Heading size={"md"} paddingTop={"8px"}>{children}</Heading>
          <Button onClick={()=>handleChangeChild(1)}  paddingBottom={"15px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"50px"} color={"blue"}>+</Button>
          </Box>
          </Box>

          <br />
          <hr />
          <br />
          {/*..........Rooms*............/ */}
          <Box display={"flex"} justifyContent={"space-between"}>
          <Heading paddingTop={"10px"} size={"sm"}>Rooms</Heading>
          <Box border={"1px solid grey"} borderRadius={"5px"} display={"flex"} >

          <Button isDisabled={rooms===0} onClick={()=>handleChangeRoom(-1)} paddingBottom={"20px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"80px"} color={"blue"} >-</Button>
          <Heading size={"md"} paddingTop={"8px"}>{rooms}</Heading>
          <Button isDisabled={availrooms===rooms} onClick={()=>handleChangeRoom(1)}  paddingBottom={"15px"} alignItems={"center"} variant={"ghost"} fontWeight={"light"} fontSize={"50px"} color={"blue"}>+</Button>
          </Box>
          </Box>
          <br />
          <Button variant={"solid"} colorScheme='blue' onClick={handlePost} w={"200px"} fontSize={"20px"} _hover={{bg:"white",color:"blue"}}>Add to Bag</Button>
        </Box>
      </Box>
      
    </div>
  )
}

export default SideBar
