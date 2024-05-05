import useHttp from "../hooks/useHttp"

const useGetMoviesInfo = () => {
  const _baseUrl = "https://api.themoviedb.org/3"
  const _apiKey = "api_key=34f1602544e08a6b89a4d9cd90d2be24"
  const { isLoading, error, sendRequest, clearError } = useHttp()
  const getMoviesInfo = async day => {
    const response = await sendRequest(`${_baseUrl}/trending/movie/${day}?language=en-US&${_apiKey}`)
    return response && response
  }
  const getPopularMovies = async (page = 1) => {
    const response = await sendRequest(`${_baseUrl}/movie/popular?language=en-US&page=${page}&${_apiKey}`)
    return response && response
  }
  const getMovieDetails = async id => {
    const response = await sendRequest(`${_baseUrl}/movie/${id}?language=en-US&${_apiKey}&append_to_response=videos`)
    return response && response
  }
  const getCreditsInfo = async id => {
    const response = await sendRequest(`${_baseUrl}/movie/${id}/credits?language=en-US&${_apiKey}`)
    return response && response
  }
  const getSimilarMovies = async id => {
    const response = await sendRequest(`${_baseUrl}/movie/${id}/similar?language=en-US&${_apiKey}`)
    return response && response
  }
  const getRecommendMovies = async id => {
    const response = await sendRequest(`${_baseUrl}/movie/${id}/recommendations?language=en-US&${_apiKey}`)
    return response && response
  }
  const getListMovies = async (list_name, page = 1) => {
    const response = await sendRequest(`${_baseUrl}/${list_name}?language=en-US&page=${page}&${_apiKey}`)
    return response && response
  }
  const searchMovies = async (name, page = 1) => {
    const response = await sendRequest(`${_baseUrl}/search/movie?query=${name}&language=en-US&page=${page}&${_apiKey}`)
    return response && response
  }
  return { isLoading, error, getMoviesInfo, getPopularMovies, getMovieDetails, getCreditsInfo, getSimilarMovies, getRecommendMovies, getListMovies, searchMovies, clearError }
}
export default useGetMoviesInfo
