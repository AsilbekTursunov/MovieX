import { useEffect, useState } from "react"

export const timerformet = minute => {
  if (minute >= 60) {
    return `${Math.floor(minute / 60)} h ${minute - 60 > 60 ? minute - 120 : minute - 60} min`
  } else if (minute < 60) {
    return `${minute} min`
  }
}
export const screenSize = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { size }
}
