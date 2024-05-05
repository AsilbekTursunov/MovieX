import React, { useEffect, useState } from "react" 
import "swiper/css" 
import useGetMoviesInfo from "../../services/movies-services"
import SingleMovie from "../singlemovie/singlemovie"
const Officials = () => {
  const [similars, setSimilars] = useState()
  const { getSimilarMovies } = useGetMoviesInfo()
  useEffect(() => {
    getSimilarMovies(940721).then(data => setSimilars(data))
  }, []) 
  return (
    <div className="grid  max-width:grid-cols-1 grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  2xl:grid-cols-6">
      {similars?.results?.map(movie => (
        <SingleMovie movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default Officials
