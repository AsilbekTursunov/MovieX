import React, { useEffect, useState } from "react"
import SingleMovie from "../singlemovie/singlemovie"
// import "./popularmovies.scss"
import useGetMoviesInfo from "../../services/movies-services"
const PopularMovies = () => {
  const [popularmovies, setPopularMovies] = useState([])
  let getAgain = 1
  const { getPopularMovies, error, loading } = useGetMoviesInfo()
  useEffect(() => {
    getPopularMovies().then(data => setPopularMovies(state => [...state, data]))
  }, [])
  const getMore = () => {
    getAgain += 1
    getPopularMovies(getAgain).then(data => setPopularMovies(state => [...state, data]))
  }
  return (
    <div className="popular_movies_main_block">
      <div className="">
        <div className="grid  max-width:grid-cols-1 grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  2xl:grid-cols-6">{popularmovies?.map(movies => movies?.results?.map(movie => <SingleMovie movie={movie} key={movie.id} />))}</div>
        <div className="w-full flex justify-center items-center">
          <button type="button" className=" px-5 py-3 bg-load-more text-hero text-xl font-medium border-none rounded-md cursor-pointer" onClick={() => getMore()}>
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopularMovies
