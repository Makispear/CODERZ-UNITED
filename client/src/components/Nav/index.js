import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo192.png"
import Home from "../../pages/Home"

export default function Nav(props) {
  const { BrandName } = props
  return (
    <header>
      <nav className="w-full flex flex-wrap justify-between p-4 sm:p-6 md:p-12">
        {/* Logo  */}
        <div className="flex md:px-2 md:px-1 items-center">
          <img src={logo} alt={`${BrandName} logo`} className="bg-white w-6 mr-1" />
          <h1 className="w-full text-center text-black font-bold text-xl whitespace-nowrap text-black">{BrandName}</h1>
        </div>
        {/* Nav links  */}
        <div>
          <ul className="flex">
            <NavLink to={"/Home"} className="mr-3">Sign up</NavLink >
            <NavLink to={"Home"}>Login</NavLink >
          </ul>
        </div>
      </nav>
    </header >
  )
}; 
