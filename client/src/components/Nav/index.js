import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import Auth from "../../utils/auth";

export default function Nav(props) {
  const { BrandName } = props
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="w-full flex flex-wrap justify-between align-center p-4 sm:p-6 md:p-12 bg-black">
        {/* Logo  */}
        {/* <div > */}
        {Auth.loggedIn() ?
          <NavLink className="flex md:px-1 items-center p-style" to={"/all_modules/"}>
            <img src={logo} alt={`${BrandName} logo`} className="bg-black w-10 mr-2" />
            <span className="w-full text-center font-bold logo-font space-nowrap text-white tracking-wider">{BrandName}</span>
          </NavLink>
          :
          <NavLink className="flex md:px-1 items-center p-style" to={"/"}>
            <img src={logo} alt={`${BrandName} logo`} className="bg-black w-10 mr-2" />
            <span className="w-full text-center font-bold logo-font space-nowrap text-white tracking-wider">{BrandName}</span>
          </NavLink>
        }
        {/* </div> */}

        {/* Nav links  */}
        <div>
          <ul className="flex">
            {!Auth.loggedIn() &&
              <li>
                <NavLink to={"/signup"} className="mr-3 text-secondary hover:text-tertiary">Sign up</NavLink>
                <NavLink to={"/login"} className="text-secondary hover:text-tertiary">Login</NavLink>
              </li>
            }
            {Auth.loggedIn() &&
              <li>
                <button title="Logout" className="mr-3 text-secondary border-none hover:text-tertiary" onClick={logout}>Logout</button>
              </li>
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}; 
