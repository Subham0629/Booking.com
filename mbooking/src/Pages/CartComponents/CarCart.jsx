import React, { useEffect } from 'react'
import { Card, Image,Stack,Heading,Button, CardBody, CardFooter } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelCart } from '../../Redux/Stay/action'
const CarCart = () => {
const dispatch =useDispatch()
const data=useSelector(store=>store.hotelReducer.hotelcart)
console.log(data);
    useEffect(()=>{
       dispatch(getHotelCart) 
    },[])
  return (
    <div>
        {data?.map((el)=><Card w={"85%"} m={"auto"} key={el.id} borderRadius={"10px"} p={"20px"} mt={"15px"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={el.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading textAlign={"left"} fontSize={"26px"} size='xl'>{el.name}</Heading>

      <Heading pt={"20px"} size={"md"} textAlign={"left"}>
        Price: ₹{el.price}
      </Heading>
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Plan
      </Button>
    </CardFooter> */}
  </Stack>
  <Stack  borderRadius={"5px"} textAlign={"center"} ml={"220px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
    <CardBody>
      <Heading textAlign={"left"} size='md'>Check-in date: {el.checkinday}-{el.checkinmonth}-{el.checkinyear}</Heading>

      <Heading pt={"10px"} size={"md"} textAlign={"left"} >
      Check-out date: {el.checkoutday}-{el.checkoutmonth}-{el.checkoutyear}
      </Heading>
      <Heading pt={"10px"} textAlign={"left"} size='md'>Adults: {el.adult}</Heading>
    <Heading pt={"10px"} textAlign={"left"} size='md'>Children: {el.children}</Heading>
    <Heading pt={"10px"} textAlign={"left"} size='md'>Rooms: {el.rooms}</Heading>
    </CardBody>
    


    <CardFooter>
      <Button variant='solid' colorScheme='blue' w={"200px"} fontSize={"20px"} _hover={{bg:"white",color:"blue"}}>
        Buy Plan
      </Button>
    </CardFooter>
  </Stack>
</Card>
        )}
    </div>
  )
}

export default CarCart
