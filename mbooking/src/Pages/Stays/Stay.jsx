import React, { useEffect, useState } from 'react'
import { Container ,Card,  CardBody, CardFooter,Stack,Button,Text,Divider,ButtonGroup, Input} from '@chakra-ui/react'
import { Image,Box ,Heading} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceSlide from './placesSlide'
import { getHotels, getPlaces } from '../../Redux/Stay/action'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import FilterHotels from './FilterHotels'
const Stay = () => {
  const data=useSelector(store=>store.hotelReducer)
  const [search,setsearch]=useState("")
  const [searchClick,setsearchClick]=useState("")
 const dispatch=useDispatch()
 const [searchParams,setSearchParams]=useSearchParams()
    const location=useLocation()

  useEffect(()=>{
    let onsearch={
      params:{
        name_like:searchClick,
        rating:searchParams.getAll("rating"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
      }
    }
    
    dispatch(getHotels(onsearch))
    dispatch(getPlaces)
  },[searchClick,location.search])
  return (
    <div style={{width:"80%",margin:"auto"}}>
      <Box display={"flex"} m="auto" w={"60%"}>
      <Input type={"text"} placeholder={"Search for Hotels"} w={"500px"} value={search} onChange={(e)=>setsearch(e.target.value)} />
      <Button bg={"blue"} color="white" cursor={"pointer"}  _hover={{bg:"blue.800",color:"white"}}
      onClick={()=>setsearchClick(search)}>Search</Button>
      </Box>

    <Container style={{border:"1px solid grey", borderRadius:"5px", width:"800px",height:"30px",marginTop:"30px"}}>
    Coronavirus (COVID-19) Support
    </Container>

     {/*...................... Second Section......................... */}


    <Box style={{display:"flex",gap:"20px",alignItems:"center",width:"100%",marginTop:"30px"}}>
      <Box w={"50%"}>
      <Heading style={{position:"absolute" ,color:"black",paddingBottom:"200px"}}>Gurgaon</Heading>
    <Image width={"100%"} height={"260px"} src='https://cf.bstatic.com/xdata/images/city/600x600/684622.jpg?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o=' alt='Gurgaon' />
      </Box>
    <Box w={"50%"}>
    <Heading style={{position:"absolute" ,color:"Black",paddingBottom:"200px"}}>Manesar</Heading>
    <Image width={"100%"} height={"260px"} src='https://cf.bstatic.com/xdata/images/city/600x600/824928.jpg?k=021c9ec0c9e01c06f47809fe251701390100d0f446b4edc47027d1a0c029f638&o=' alt='Manesar' />
    </Box>    
    </Box>

    <Box style={{display:"flex",gap:"20px",alignItems:"center",width:"100%",marginTop:"30px"}}>
      <Box w={"33%"}>
      <Heading style={{position:"absolute" ,color:"black",paddingBottom:"200px"}}>New Delhi</Heading>
      <Image width={"100%"} height={"260px"} src='https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=' alt='New Delhi' />
      </Box>
      <Box w={"33%"}>
      <Heading style={{position:"absolute" ,color:"black",paddingBottom:"200px"}}>Jaipur</Heading>
      <Image width={"100%"} height={"260px"} src='https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=' alt='Jaipur' />
      </Box>
      <Box w={"33%"}>
      <Heading style={{position:"absolute" ,color:"black",paddingBottom:"200px"}}>Neemrana</Heading>
      <Image width={"100%"} height={"260px"} src='https://cf.bstatic.com/xdata/images/city/600x600/935891.jpg?k=05668cbae7eaa0f13b675a0c91164465bdc3394db46c6bb555e9dacdbbc4c025&o=' alt='Neemrana' />
      </Box>
      </Box>

       {/*...................... Third Section......................... */}
      <Box style={{marginTop:"40px"}}>
        <Heading style={{color:"black",alignContent:"flex-start"}}>Browse by property type</Heading>
        <PlaceSlide  data={data.places}/>
      </Box>

       {/*...................... Fourth Section......................... */}
       
       <Heading mt={"40px"} as={"h1"}>Hotels</Heading>
       <div style={{display:"flex"}}>
      <div style={{width:"20%"}}>
        <FilterHotels/>
      </div>
       <div style={{width:"80%"}}>
       <Stack display="grid"
        gridTemplateColumns="repeat(3,1fr)"
        gap="30px"
        mt="50px">
       {data.hotels?.map((el)=><>
        <Card maxW='sm' key={el.id} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
    <Image w={"100%"}
      src={el.url}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.name}</Heading>
      <Text color='black' fontSize='2xl'>
       Price: ₹{el.price}
      </Text>
      <Text color='black' fontSize='2xl'>
       Rating: {el.rating}/5
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup m={"auto"} spacing='2'>
      <Link to={`/hotel/${el.id}`}>
      <Button variant='ghost' colorScheme='blue'>
        See Details
      </Button>
      </Link> 
      {/* <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button> */}
    </ButtonGroup>
  </CardFooter>
</Card>
       </>)}
       </Stack>
       </div>
       </div>

    </div>
  )
}

export default Stay
