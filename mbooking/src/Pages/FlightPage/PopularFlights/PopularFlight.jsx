import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const PopularFlight = ({data}) => {
  return (
    <div className='popular-flights' >
        <h3>Popular flights near you</h3>
        <p>Find deals on domestic and international flights</p>
        <div className='popular'>
        <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((data)=>{
          return (
            <SwiperSlide>
            <div>
              <img style={{height:"200px", gap:"0px"}} src={data.image} alt="img" />
              <h3>{data.origin} to {data.destination}</h3>
              <p>{data.startTime} - {data.endTime} . Round trip</p>
            </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
        </div>
        </div>
  )
}

export default PopularFlight