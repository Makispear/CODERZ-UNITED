import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"

export default function Nav(props) {
  const { BrandName } = props
  return (
    <header>
      <nav className="w-full flex flex-wrap justify-between p-4 sm:p-6 md:p-12">
        {/* Logo  */}
        <div className="flex md:px-1 items-center">
          <img src={logo} alt={`${BrandName} logo`} className="bg-white w-10 mr-2" />
          <h1 className="w-full text-center font-bold text-xl whitespace-nowrap text-black tracking-wider">{BrandName}</h1>
        </div>
        {/* Nav links  */}
        <div>
          <ul className="flex">
            <NavLink to={"/"} className="mr-3 font-semibold">Sign up</NavLink >
            <NavLink to={"/"} className="font-semibold">Login</NavLink >
          </ul>
        </div>
      </nav>
    </header>
  )
}; 
