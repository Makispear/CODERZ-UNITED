import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import CheckMark from "../CheckMark";

export default function AllModules() {

  const motivationalSayings = [
    "Lets make this your best investment in your coding journey.. together.",
    "Can't wait to see you at the end of the tunnel",
    "Sleep, eat, code... repeat.",
    "Lets start coding!",
    "Nice seeing you! now lets get it done.",
    "In unity we trust.",
    "Anything is possible when we are united.",
    "two heads are better than one. Three heads are better than two. But how about every coder united?"
  ]

  useEffect(() => {
    document.title = "Welcome - All Modules"
  }, [])


  return (
    <section className="flex flex-col w-full items-center p-2 sm:p-7 md:p-32 bg-black text-white">
      {/* <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
        <BreadCrumb props={{ color: 'secondary' }} />
      </div> */}
      <div className="flex flex-col items-center mt-5">
        <h1>
          All Modules
        </h1>
        <p className="text-center text-secondary">
          {motivationalSayings[Math.floor(Math.random() * motivationalSayings.length)]}
        </p>
      </div>



      {/* <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(0/2) completed</p>
      </div> */}

      {/* Modules  */}
      <div className="w-full mt-10 flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/all_modules/getting_started/"}>
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-secondary bg-secondary hover:border-white hover:bg-white">
            <div>
              <p>
                <span className="font-bold capitalize">1 . Getting started - </span>Pre work
              </p>
            </div>
            <CheckMark props={{ marked: true }} />
          </div>
        </NavLink>

        <NavLink to={"/all_modules/course_modules/"}>
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-inherit text-black bg-secondary hover:bg-white">
            <div>
              <p>
                <span className="font-bold capitalize">2. Course Modules - </span> Lets start Coding.
              </p>
            </div>
            <CheckMark props={{ marked: false }} />
          </div>
        </NavLink>

        <NavLink to={'#'} className="locked">
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-darkGray bg-darkGray opacity-50">
            <div>
              <p className="text-secondary">
                <span className="font-bold capitalize">1 . Getting started - </span>Pre work
              </p>
            </div>
          </div>
        </NavLink>


      </div>


    </section >
  )
}
