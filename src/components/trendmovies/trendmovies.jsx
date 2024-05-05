import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import SingleMovie from "../singlemovie/singlemovie" 
// Import Swiper styles
import "swiper/css" 
import { screenSize } from "../../helpers/timerformat"
const TrendMovies = ({ trendmovies }) => { 
  const {size} = screenSize()
  return (
    <div>
      <Swiper slidesPerView={size > 1440 ? 6 : size >= 1200 && size <= 1440 ? 5 : size >= 1024 && size <= 1280 ? 4 : size >= 768 && size <= 1024 ? 3 : size >= 640 && size <= 768 ? 2 : size >= 550 && size <= 640 ? 2 : size <= 450 ? 1 : 2} loop={true} spaceBetween={0} freeMode={true} className="mySwiper trendmovies_swiper">
        {trendmovies?.results?.map(movie => (
          <SwiperSlide key={movie.id}>
            <SingleMovie movie={movie} key={movie.id}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TrendMovies
