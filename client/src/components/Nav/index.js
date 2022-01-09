import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo192.png"

export default function Nav(props) {
  const { BrandName } = props
  return (
    <header>
      <nav className="w-full flex justify-between px-10">
        {/* Logo  */}
        <div className="flex px-2 items-center">
          <img src={logo} alt={`${BrandName} logo`} className="bg-white w-6" />
          <h1 className="w-full text-center text-black font-bold text-xl">{BrandName}</h1>
        </div>
        {/* Nav links  */}
        <div>
          <ul className="flex">
            <li>Sign up</li>
            <li>Login</li>
          </ul>
        </div>

      </nav>
    </header>
  )
}; 
