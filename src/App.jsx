import { useState } from "react"
import { Footer, Navbar } from "./components"
import { Route, Routes } from "react-router-dom"
import { HomePage, MovieDetails, SearchMovies } from "./pages"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details/:slug" element={<MovieDetails />} />
        <Route path="/search-movies/:slug" element={<SearchMovies />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
