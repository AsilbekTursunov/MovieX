/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
// import "./homepage.css"
import { Hero, PopularMovies, TrendMovies } from "../../components"
import useGetMoviesInfo from "../../services/movies-services"
const HomePage = () => {
  const [trendmovies, setTrendMovies] = useState([])
  const [filterday, setFilterDay] = useState("day")
  const { isLoading, error, setIsLoading, getMoviesInfo, clearError } = useGetMoviesInfo()
  useEffect(() => {
    getMovies()
  }, [filterday])
  useEffect(() => {
    getMovies()
  }, [])
  function getMovies() {
    getMoviesInfo(filterday).then(data => {
      setTrendMovies(data)
    })
  }
  const changeFilter = day => {
    setFilterDay(day)
    getMoviesInfo(day).then(data => setTrendMovies(data))
  }
  
  return (
    <div className="flex flex-col">
      <Hero day={filterday} />
      <div className="bg-hero text-white  pb-8 z-50  ">
        <div className="mx-3 sm:container sm:mx-auto">
          <div className="trending-movies-section flex flex-col">
            <div className=" text-xl flex items-center justify-between my-4">
              <h5 className="text-white text-2xl">Trending Movies</h5>
              <div className=" relative flex justify-between bg-white border-2 border-white rounded-full overflow-hidden z-[1]">
                <button type="button" className="text-[.625rem] md:text-[1rem] px-3 md:px-4 md:py-1 rounded-full border-none z-10 cursor-pointer overflow-hidden bg-transparent" onClick={() => changeFilter("day")} style={{ color: filterday == "day" && "white" }}>
                  Day
                  <span className="absolute rounded-full w-1/2 h-full z-[-1] top-0 left-0 bg-button" style={{ transform: `translateX(${filterday == "day" ? 0 : 100}%)`, transition: "all .5s" }}></span>
                </button>
                <button type="button" className="text-[.625rem] md:text-[1rem] px-3 md:px-4 md:py-1 rounded-full border-none z-10 cursor-pointer overflow-hidden bg-transparent" onClick={() => changeFilter("week")} style={{ color: filterday == "week" && "white" }}>
                  Week
                </button>
              </div>
            </div>
            <div className="w-[100%] mx-auto md:w-full">
              <TrendMovies trendmovies={trendmovies} />
            </div>
          </div>
          <div className="trending-movies-section">
            <div className="text-white text-2xl">Popular Movies</div>
            <div className=" mt-8">
              <PopularMovies />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

// style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${trendmovies?.results[Math.floor(Math.random()*trendmovies?.results)].backdrop_path})`}}
