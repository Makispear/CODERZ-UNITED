import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/blue(1).svg"
import Auth from "../../utils/auth";
import { BrandName } from "../../utils/BrandName";

export default function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <header>

      <nav className="w-full flex justify-between align-center p-4 sm:p-6 md:p-12 bg-black">
        {/* Logo  */}
        {/* <div > */}
        {Auth.loggedIn() ?
          <NavLink className="flex md:px-1 items-center p-style" to={"/all_modules/"}>
            <img src={logo} alt={`${BrandName.toUpperCase()} logo`} className="bg-black w-10 mr-2" />
            <span className="hidden sm:inline w-full text-center font-bold logo-font space-nowrap text-white tracking-wider">{BrandName.toUpperCase()}</span>
          </NavLink>
          :
          <NavLink className="flex md:px-1 items-center p-style" to={"/"}>
            <img src={logo} alt={`${BrandName.toUpperCase()} logo`} className="bg-black w-10 mr-2" />
            <span className="hidden sm:inline w-full text-center font-bold logo-font space-nowrap text-white tracking-wider">{BrandName.toUpperCase()}</span>
          </NavLink>
        }
        {/* </div> */}

        {/* Nav links  */}
        <div>
          <ul className="flex">
            {!Auth.loggedIn() &&
              <li>
                <NavLink to={"/signup"} className="mr-3 text-secondary hover:text-tertiary">Sign up</NavLink>
                <NavLink to={"/login"} className="text-secondary hover:text-tertiary">Log in</NavLink>
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
