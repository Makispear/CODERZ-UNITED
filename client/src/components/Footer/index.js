import { NavLink } from "react-router-dom";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-black border-t-2 border-t-tertiary">
      <div className="w-full flex flex-wrap justify-between p-40 pb-5">
        {/* left side  */}
        <div className="flex flex-col">
          {/* social media  */}
          <div className="">
            <h2 className="text-white font-bold text-4xl">FOLLOW US ON SOCIAL MEDIA</h2>
            <ul className="text-secondary flex mt-3">
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">LinkedIn</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">Instagram</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">Facebook</NavLink >
            </ul>
          </div>
          {/* contact  */}
          <div className="mt-14">
            <h2 className="text-white text-4xl font-bold">CONTACT US</h2>
            <ul className="text-secondary flex flex-col">
              <NavLink to={"/"} className="mt-3">Email</NavLink >
              <NavLink to={"/"} className="mt-3">Link</NavLink >
              <NavLink to={"/"} className="mt-3">Link</NavLink >
            </ul>
          </div>
        </div>
        {/* right side  */}
        <div>
          <h2 className="text-white text-4xl font-bold">SIGNUP FOR OUR WEEKLY NEWSLETTER</h2>
          <div className="w-100 h-12 flex justify-end mt-3">
            <input className="w-full text-xl p-2" />
            <button className="bg-tertiary text-black w-2/12 h-full font-bold text-xl">SIGNUP</button>
          </div>
        </div>
      </div>


      <div className="text-secondary w-full flex justify-center mb-5">
        <Copyright />
      </div>
    </footer>
  )
}

