import { useCallback, useState } from "react"

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(async (url, method = "GET", body = null, headers = { "Content-Type": "application-json" }) => {
    setIsLoading(true)
    try {
      const response = await fetch(url, { method, body, headers })
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
      } 
      const data = await response.json()
      setIsLoading(false)
      return data
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }, [])

  const clearError = useCallback(() => setError(null))
  return { isLoading, error, sendRequest, clearError,setIsLoading }
}
export default useHttp
