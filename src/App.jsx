import { lazy, Suspense, useState } from "react"
import { Footer, Navbar, Spinner } from "./components"
import { Route, Routes } from "react-router-dom"
// import { HomePage, MovieDetails, SearchMovies } from "./pages"

const HomePage = lazy(() => import("./pages/homepage/homepage"))
const MovieDetails = lazy(() => import("./pages/moviedetails/moviedetails"))
const SearchMovies = lazy(() => import("./pages/tvshow/searchmovies"))

function App() {
  return (
    <div>
      <Navbar />
      
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-details/:slug" element={<MovieDetails />} />
          <Route path="/search-movies/:slug" element={<SearchMovies />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
