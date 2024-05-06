import React from "react" 
import { Puff } from "react-loader-spinner"
const Spinner = () => {
  return (
    <div className=" fixed w-full h-screen left-0 top-0 bg-nav-bg flex items-center justify-center z-[1000]">
      <Puff visible={true} height="120" width="120" color="#42596c" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" />
    </div>
  )
}

export default Spinner
