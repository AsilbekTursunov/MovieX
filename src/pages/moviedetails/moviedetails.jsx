import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGetMoviesInfo from "../../services/movies-services"
import { Flat } from "@alptugidin/react-circular-progress-bar"
import play from "../../assets/play.png"
import moment from "moment"
import { timerformet } from "../../helpers/timerformat"
import { Credits, Officials, RecommendMovies } from "../../components"
import YouTube from "react-youtube"
const MovieDetails = () => {
  const { slug } = useParams()
  const movieId = +slug.replace(/\D/g, "")
  const [details, setDetails] = useState()
  const [watch, setWatch] = useState(false)
  const [credits, setCredits] = useState()
  const { isLoading, error, getMovieDetails, getCreditsInfo, getSimilarMovies, clearError } = useGetMoviesInfo()
  useEffect(() => {
    getMovieDetails(movieId).then(data => setDetails(data))
    getCreditsInfo(movieId).then(data => setCredits(data))
  }, [slug])
  const turnOffVideo = (value, title) => {
    if (value === title) {
      setWatch(false)
    }
  }
  window.addEventListener("click", e => turnOffVideo(e.target.nodeName, "SECTION"))
  window.addEventListener("keyup", e => turnOffVideo(e.key, "Escape"))
  console.log(details);
  return (
    <div className="">
      <div className="relative bg-top " style={{ backgroundColor: "#0e1521", backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})` }}>
        <div className="w-full h-full absolute bottom-0 left-0 z-[1] bg-overlay"></div>
        <div className="mx-3 sm:container sm:mx-auto">
          <div className="movie-details-block  pt-28 pb-3 max-w-full lg:flex ">
            <div className="movie-image-block w-[100%] flex justify-center lg:w-[380px] z-50">
              <img className="w-[60%] lg:w-full  h-[100%]  z-50" src={details?.poster_path == null ? "https://i.ytimg.com/vi/OZed23aYTXU/maxresdefault.jpg" : `https://image.tmdb.org/t/p/original${details?.poster_path}`} alt="" />
            </div>
            <div className="flex flex-col w-[95%] mx-auto mt-4 lg:mt-0 lg:ml-7 lg:w-1/2 ">
              <h3 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2.5rem] font-medium text-white z-50">{details?.title}</h3>
              <p className="text-xl text-hidden-text italic my-4 z-50">{details?.tagline}</p>
              <div className="movie-genres z-50">
                {details?.genres.map(genre => (
                  <span className="text-white bg-green-500 mr-2 rounded-md p-1" key={genre.name}>
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="relative mt-4 z-50  flex items-center">
                <div className=" w-12 lg:w-14  rounded-full">
                  <Flat
                    progress={Math.floor(details?.vote_average * 10)}
                    sign={{ value: "", position: "end" }}
                    showMiniCircle={false}
                    className="Flat"
                    sx={{
                      strokeColor: Math.floor(details?.vote_average * 10) < 50 ? "red" : Math.floor(details?.vote_average * 10) < 70 ? "orange" : "#4fd926",
                      barWidth: 7,
                      bgColor: "#000",
                      bgStrokeColor: { value: "#000000", transparency: "0" },
                      valueSize: 32,
                      valueColor: "#ffffff",
                      valueFamily: "Arial",
                      textColor: "#ffffff",
                      valueAnimation: false,
                      intersectionEnabled: false,
                    }}
                  />
                </div>
                <div>
                  <Link className=" flex w-full gap-5 items-center ml-4" onClick={() => setWatch(true)}>
                    <img src={play} alt="" className=" w-12 lg:w-14" />
                    <h3 className="text-white text-[1.25rem] md:text-[1.75rem] lg:text-[2.5rem]">Watch Trailer</h3>
                  </Link>
                </div>
              </div>
              <div className="mt-4 z-50">
                <h3 className="text-white text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]">Overview</h3>
                <p className=" text-lg lg:text-xl text-neutral-400 h-32 overflow-y-scroll">{details?.overview}</p>
              </div>
              <div className="mt-4 z-50">
                <div className="flex flex-col gap-4 ">
                  <h5 className="text-white font-medium text-lg lg:text-xl flex justify-between border-b-[1px] border-neutral-400 py-3">
                    <span className="">Status:</span> <span className="text-hidden-text">{details?.status}</span>
                  </h5>
                  <h5 className="text-white font-medium text-lg lg:text-xl flex justify-between border-b-[1px] border-neutral-400 py-3">
                    <span className="">Release Date:</span> <span className="text-hidden-text">{moment(details?.release_date).format("ddd,MM, yyyy")}</span>
                  </h5>
                  <h5 className="text-white font-medium text-lg lg:text-xl flex justify-between border-b-[1px] border-neutral-400 py-3">
                    <span className="">Runtime:</span> <span className="text-hidden-text">{timerformet(details?.runtime)}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="releated-info-block bg-hero pt-8">
        <div className="mx-3 sm:container sm:mx-auto">
          <div className="py-4">
            <h3 className="text-white text-[1.5rem] lg:text-2xl">Top Casts</h3>
          </div>
          <Credits credits={credits} />
          <div className="py-4">
            <h3 className="text-white text-[1.5rem] lg:text-2xl">Recommedation Movies</h3>
          </div>
          <RecommendMovies slug={slug} />
          <div className="py-4">
            <h3 className="text-white text-[1.5rem] lg:text-2xl">Similar Movies</h3>
          </div>
          <Officials />
        </div>
      </div>
      <section className={`${watch ? "flex" : "hidden"}  absolute w-screen h-screen top-0 left-0 bg-nav-bg z-[120]  items-center justify-center`}>
        <div className="mx-3 sm:container sm:mx-auto flex justify-center items-center">
          <YouTube videoId={`${details?.videos?.results.length > 0 ? details?.videos?.results?.filter(movie => movie.name.includes("Trailer"))[0].key : ''}`} />
        </div>
      </section>
    </div>
  )
}

export default MovieDetails
