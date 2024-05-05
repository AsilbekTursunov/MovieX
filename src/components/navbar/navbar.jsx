import logo from "../../assets/app-logo.png"
import { HiOutlineSearchCircle } from "react-icons/hi"
import { RiSearchLine } from "react-icons/ri"
import { FaBarsStaggered } from "react-icons/fa6"
// import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
const Nabvar = () => {
  const navigate = useNavigate()
  const [menutoggle, setMenuToggle] = useState(false)
  const [searchtoggle, setSearchToggle] = useState(false)
  const [movieName, setMovieName] = useState("")
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
    <nav className="main-navbar bg-nav-bg z-[100] fixed w-full py-2">
      <div className="mx-3 md:container md:mx-auto">
        <div className="flex justify-between items-center ">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-[120px] md:w-[160px] lg:w-[180px]" />
            </Link>
          </div>
          <div className="menu">
            <ul className=" relative px-3  pages-link flex text-neutral-300 gap-4 items-center text-lg lg:text-xl" onClick={() => setSearchToggle(prevState => !prevState)}>
              <Link className="" >
                <button className=" flex items-center">  &nbsp; <RiSearchLine /> &nbsp;</button>
              </Link>
            </ul> 
          </div>
        </div>
        <div className={` bg-white p-2 absolute top-20  transition-all duration-[.5] outline-none w-full left-0`} style={{ transform: `rotateX(${searchtoggle ? "0" : "90"}deg)` }}>
          <div className="mx-3 md:container md:mx-auto">
            <div className="flex">
              <input type="text" placeholder="Seach your movies" value={movieName} className="flex-grow px-4" onChange={e => setMovieName(e.target.value)} />
              <button className="  text-black px-4 py-2" onClick={e => goListedVideos(e)}>
                <RiSearchLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar
