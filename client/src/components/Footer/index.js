import { NavLink } from "react-router-dom";
import Copyright from "../Copyright";
import PrimaryButton from "../Buttons/tertiary/Primary"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-tertiary border-t-2 border-t-white mt-20">
      <div className="w-full flex flex-wrap justify-between gap-5 p-10 sm:p-28 pb-5">
        {/* left side  */}
        <div className="flex flex-col">
          {/* social media  */}
          <div className="">
            <h2 className="text-white h3-style">FOLLOW US ON SOCIAL MEDIA</h2>
            <ul className="text-black flex mt-3">
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">LinkedIn</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">Instagram</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter uppercase">Facebook</NavLink >
            </ul>
          </div>
          {/* contact  */}
          <div className="mt-14 ">
            <h2 className="text-white h3-style">CONTACT US</h2>
            <ul className="text-black flex flex-col">
              <NavLink to={"/"} className="mt-3">EMAIL</NavLink >
              <NavLink to={"/"} className="mt-3">Link</NavLink >
              <NavLink to={"/"} className="mt-3">Link</NavLink >
            </ul>
          </div>
        </div>
        {/* right side  */}
        <div className="">
          <h2 className="text-white h3-style">SIGNUP FOR OUR WEEKLY NEWSLETTER</h2>
          <div className="w-100 h-12 flex justify-end mt-3">
            <input className="w-full p-2" />
            <PrimaryButton props={{ buttonName: "SUBSCRIBE" }} />
          </div>
        </div>
      </div>


      <div className="text-secondary bg-tertiary w-full flex justify-center p-5">
        <Copyright />
      </div>
    </footer>
  )
}

