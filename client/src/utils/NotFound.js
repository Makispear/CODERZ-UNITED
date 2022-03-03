import Auth from "../utils/auth"
import { NavLink } from "react-router-dom";

export default function NotFound() {
  document.title = 'PAGE NOT FOUND 404'
  return (
    <div className="p-3 sm:p-10 w-full flex flex-col items-center gap-5 text-center text-white">
      <h1>Error 404</h1>
      <p>Page not found!</p>
      {Auth.loggedIn() ?
        <NavLink to={"/all_modules/"} className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">go to homepage</NavLink>

        :
        <NavLink to={"/login/"} className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">Log In</NavLink>

      }
    </div>
  )
}
