

import React from "react";
import {  Stack,  Heading ,Box} from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./placesSlide.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";

// import required modules
//import { Pagination } from "swiper";

export default function PlaceSlide({data}) {
  return (
    <>
      <Swiper grabCursor={PointerEvent}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        //modules={[Pagination]}
        className="mySwiper"
      >

        {data?.map((el)=><>
            <SwiperSlide className="swiper-slide" key={el.id}>
            <Box mt={"40px"} gap="0px" w={"200px"}>
  <Box height={"220px"} width={"210px"}>

    <Image
      src={el.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
      </Box>
      <Box h={"20%"}>

    <Stack mt='6' >
      <Heading size='sm'>{el.h3_val}</Heading>
      <Heading color='grey' fontSize='sm' >
        {el.para_val}
      </Heading>
    </Stack>
      </Box>
</Box>
        </SwiperSlide>
        </>)}
      </Swiper>
    </>
  );
}