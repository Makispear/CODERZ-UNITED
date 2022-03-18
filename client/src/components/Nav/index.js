import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/blue(1).svg"
import Auth from "../../utils/auth";
import { BrandName } from "../../utils/BrandName";
import { GET_COMPLETED_LESSONS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import WelcomeTip from "../WelcomeTips";

export default function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { data } = useQuery(GET_COMPLETED_LESSONS)

  // TODO Ukraine hopefully temporary
  const removeBanner = () => {
    document.querySelector('.war-banner').remove()
  }

  return (
    <header>

      {/* show tips on how to navigate if first time logging in  */}
      {
        data?.getCompletedLessons.logins.length <= 1 &&
        <WelcomeTip props={data} />
      }



      {/*  Ukraine and Palestine War banner  (hopefully temporary) */}
      <div className="war-banner relative w-full font-extrabold grid text-center place-items-center cursor-default">
        <p className="px-3 text-sm text-white font-light">
          We are united #Against_wars in
        </p>
        <p className="px-3 text-sm text-white font-light">
          <span className="ukraine-text font-bold"> Ukraine </span>
          | <span className="palestine-text font-bold"> Palestine </span>
        </p>
        <div className="absolute bg-white hover:bg-secondary  px-1 right-0 top-0 grid place-content-center cursor-pointer close-btn" onClick={removeBanner}>
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
