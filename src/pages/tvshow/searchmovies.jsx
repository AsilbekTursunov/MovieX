import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useGetMoviesInfo from "../../services/movies-services"
import { SingleMovie } from "../../components"

const SearchMovies = () => {
  const { slug } = useParams()
  const name = slug.replace(/\-/g, "+")
  const [listed, setListed] = useState([])
  const [pages, setPages] = useState(2)
  const { searchMovies } = useGetMoviesInfo()
  useEffect(() => {
    searchMovies(name).then(data => setListed([...listed, data]))
  }, [slug])
  const getMore = () => {
    setPages(num => num + 1)
    searchMovies(name, pages).then(data => setListed([...listed, data]))
  }
  console.log(listed)
  return (
    <div className=" bg-hero p-5 pt-28 min-h-screen">
      <div className="mx-3 md:container md:mx-auto">
        <div className="grid  max-width:grid-cols-1 grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  2xl:grid-cols-6">{listed?.map(movie => movie?.results?.map(movie => <SingleMovie key={movie.id} movie={movie} />))}</div>
        <div className="w-full flex justify-center items-center">
          <button type="button" className=" px-5 py-3 bg-load-more text-hero text-xl font-medium border-none rounded-md cursor-pointer" onClick={() => getMore()}>
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchMovies
// const newlist = state.filter((movie, i, a) => {
//   console.log(a[a.length - (i + 1)].page != movie.page)
// })
// console.log(newlist)
