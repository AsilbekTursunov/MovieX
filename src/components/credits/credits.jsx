import React, { useEffect, useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
// import "./credits.css"
import { screenSize } from "../../helpers/timerformat"
const Credits = ({ credits }) => {
  const {size} = screenSize()
  return (
    <div>
      <Swiper slidesPerView={size > 1440 ? 7 : size >= 1200 && size <= 1440 ? 6 : size >= 992 && size <= 1200 ? 4 : size >= 768 && size <= 992 ? 4 : size >= 567 && size <= 768 ? 3 : size >= 450 && size <= 567 ? 2 : size <= 450 ? 1 : 1} loop={true} spaceBetween={0} freeMode={true} className="mySwiper trendmovies_swiper">
        {credits?.cast?.map(movie => (
          <SwiperSlide key={movie.id}>
            <div className="flex flex-col gap-2 items-center">
              <div className="w-28 h-28 rounded-[50%] bg-cover bg-center" style={{ backgroundImage: `url(${movie.profile_path == null ? "https://transavtomurom.ru/uploads/files/th/nofoto_1424682181981-t800x800.jpg" : `https://image.tmdb.org/t/p/original${movie.profile_path}`})` }} />
              <br />
              <div className=" text-2xl font-medium text-white">{movie.name}</div>
              <div className=" text-sm text-hidden-text">{movie.character}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Credits
