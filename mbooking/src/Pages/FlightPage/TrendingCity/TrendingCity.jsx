import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const TrendingCity = ({data}) => {
  return (
    <div>
        <div className='popular-flights' >
        <h3>Trending cities</h3>
        <p>Book flights to a destination popular with travelers from India</p>
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
              <h3>{data.city}</h3>
              <p>{data.about} . Round trip</p>
            </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TrendingCity