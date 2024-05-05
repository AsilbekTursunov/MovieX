import React, { useEffect, useState } from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import useGetMoviesInfo from "../../services/movies-services"
import { screenSize } from "../../helpers/timerformat"
import "swiper/css"
// import "./recommed.scss"
import { Link } from "react-router-dom"
import moment from "moment"
const RecommendMovies = ({ slug }) => {
  const {size} = screenSize()
  const { getRecommendMovies, clearError } = useGetMoviesInfo()
  const [recommendmovies, setRecommendMovies] = useState([])
  useEffect(() => {
    getRecommendMovies(slug).then(data => setRecommendMovies(data))
    return () => {
      clearError()
    }
  }, []) 
  return (
    <div className="my-4">
      <Swiper slidesPerView={size < 450 ? 1 : size < 768 ? 2 : size < 1200 ? 3 : size < 1440 ? 4 : 5} loop={true} spaceBetween={0} freeMode={true} className="mySwiper trendmovies_swiper">
        {recommendmovies?.results?.map(movie => (
          <SwiperSlide key={movie.id}>
            <div className="relative mx-2">
              <Link to={`/movie-details/${movie.id}`}>
                <img className="rounded-[10px] w-full bg-origin-content h-56 hover:saturate-0" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.id} />
              </Link>
              <div className=" absolute flex justify-between my-2 p-2 w-full -bottom-5 h-12 bg-nav-bg z-[1]">
                        <p className="z-[4] text-white text-[1rem]">{movie.title}</p>
                        <p className="z-[4] text-white text-[1rem]">{moment(movie.release_date).format('YYYY')}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RecommendMovies
