import React from "react"
import { Link } from "react-router-dom" 
import moment from "moment"  
import { Flat } from "@alptugidin/react-circular-progress-bar"
const SingleMovie = ({ movie }) => {
  return (
    <>
      <div className="text-center w-full my-3">
        <div className=" mx-1">
          <Link to={`/movie-details/${movie.id}`}>
            <div className="w-full h-[400px] bg-cover bg-center bg-origin-content rounded-md" style={{ backgroundImage: movie?.poster_path != null ? `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`: `url(https://answers-afd.microsoft.com/static/images/image-not-found.jpg)` }}></div>
          </Link>
          <div className="flex text-white py-2">
            <div className="relative w-14 text-3xl">
              <div className="w-full h-full left-3 rounded-full absolute -top-10">
                <Flat
                  progress={Math.floor(movie?.vote_average * 10)}
                  sign={{ value: "", position: "end" }}
                  showMiniCircle={false}
                  className="Flat"
                  sx={{
                    strokeColor: Math.floor(movie?.vote_average * 10) < 50 ? "red" : Math.floor(movie?.vote_average * 10) < 70 ? "orange" : "#4fd926",
                    barWidth: 7,
                    bgColor:"#000",
                    bgStrokeColor:{ value: "#000000", transparency: "0" },
                    valueSize: 32,
                    valueColor: "#ffffff",
                    valueFamily: "Arial",
                    textColor: "#ffffff",
                    valueAnimation: false,
                    intersectionEnabled: false,
                  }}
                />
              </div>
            </div>
            <div className=" ml-4 flex flex-col text-start justify-start">
              <h3 className="text-xl">{movie?.title.length > 15 ? `${movie?.title?.slice(0, 15)}..` : movie?.title}</h3>
              <p className=" text-sm text-hidden-text">{moment(movie?.release_date).format("ddd, MM, yyyy")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie
