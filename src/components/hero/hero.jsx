import React, { useEffect, useState } from "react"
// import "./hero.css"
import useGetMoviesInfo from "../../services/movies-services"
import { useNavigate } from "react-router-dom"
const Hero = ({ day }) => {
  const [movies, setMovies] = useState()
  const [movieName, setMovieName] = useState('')
  const navigate = useNavigate()
  const { isLoading, error, setIsLoading, getMoviesInfo, clearError } = useGetMoviesInfo()
  useEffect(() => {
    getMoviesInfo(day).then(data => setMovies(data))
  }, [day])
  const goListedVideos = e => { 
    if ((e.key === "Enter" || e.target.nodeName === "BUTTON") && movieName.length != 0) {
      navigate(`/search-movies/${movieName.replace(/\s+/g, "-")}`)
      setMovieName("")
      setSearchToggle(false)
    }
  }
  window.addEventListener("keyup", e => {
    goListedVideos(e) 
  })
  return (
    <>
      <div className=" relative bg-cover bg-center bg-hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.results[Math.floor(Math.random() * movies?.results.length)].backdrop_path})`, backgroundOrigin: "content-box" }}>
        <div className="w-full h-full absolute bottom-0 left-0 z-[1] bg-overlay"></div>
        <div className="mx-3 sm:container sm:mx-auto">
          <div className=" flex items-center justify-center flex-col w-full visible p-5 h-[50vh] md:h-[70vh] xl:h-[90vh] ">
            <h1 className="text-white text-[3rem] md:text-[4rem] lg:text-[5rem]  z-50">Welcome</h1>
            <p className="text-white text-sm md:text-lg lg:text-xl py-4  text-center  z-50">Millions of movies, Tv shows and people to discover. Explore now.</p>
            <div className="flex border border-yellow-400 rounded-full overflow-hidden mt-4 max-width:w-full  z-50">
              <input type="text" className="w-[100%] sm:w-[520px] lg:w-[640px] px-4 py-2 outline-none flex-grow" value={movieName} placeholder="Search your favourite movie" onChange={e => setMovieName(e.target.value)} />
              <button type="submit" className=" bg-button px-4 py-2 text-white flex" onClick={e => goListedVideos(e)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
