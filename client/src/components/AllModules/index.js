import { NavLink } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import CheckMark from "../CheckMark";

export default function AllModules() {
  return (
    <section className="flex flex-col w-full items-center p-2 sm:p-7 md:p-32 bg-black text-white">
      {/* <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
        <BreadCrumb props={{ color: 'secondary' }} />
      </div> */}
      <div className="flex flex-col items-center">
        <h1>
          All Modules
        </h1>
        <p className="text-center text-secondary">
          Lets make the best out of every modules!
        </p>
      </div>



      <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(0/2) completed</p>
      </div>

      {/* Modules  */}
      <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/all_modules/getting_started/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black bg-tertiary hover:bg-secondary">
            <div>
              <p>
                <span className="font-bold capitalize">1 . Getting started - </span>Pre work
              </p>
            </div>
            <CheckMark props={{ marked: true }} />
          </div>
        </NavLink>

        <NavLink to={"/all_modules/course_modules/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiary hover:bg-secondary">
            <div>
              <p>
                <span className="font-bold capitalize">2. Course Modules - </span> Lets start Coding.
              </p>
            </div>
            <CheckMark props={{ marked: false }} />
          </div>
        </NavLink>

      </div>


    </section>
  )
}
