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


  // TODO Ukraine hopefully temporary
  const remove = () => {
    document.querySelector('.ukraine-colors').remove()
  }

  return (
    <header>


      {/* // TODO Ukraine hopefully temporary */}
      <div className=" relative w-full font-extrabold grid place-items-center ukraine-colors h-10">
        <p className="px-3 capitalize text-sm text-white self-end">
          We are united against wars
        </p>
        <div className="absolute bg-white px-3 right-0 top-0 bottom-0 grid place-content-center cursor-pointer close-btn" onClick={remove}>
          X
        </div>
      </div>





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
