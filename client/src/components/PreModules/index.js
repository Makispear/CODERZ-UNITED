import { NavLink } from "react-router-dom";
import CheckMark from "../CheckMark";
import { goBack } from "../../utils/previousPage";
import BreadCrumb from "../BreadCrumb";

export default function PreModules() {
  return (
    <section className="flex flex-col w-full items-center p-2 sm:p-7 md:p-32 bg-black text-white">
      <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
        <BreadCrumb props={{ color: 'secondary' }} />
      </div>
      <div className="flex flex-col items-center">
        <h1>
          Getting Started
        </h1>
        <p className="text-center text-secondary">
          This is the first step! Every united coder gets the privilege of having a great head start! 🙂
        </p>
      </div>


      <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(1/4) completed</p>
      </div>

      {/* Modules  */}
      <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black bg-tertiary hover:bg-secondary">
            <div>
              <p>
                <span className="font-bold capitalize">1. Frequently asked Questions - </span> Is this course for you?
              </p>
            </div>
            <CheckMark props={{ marked: true }} />
          </div>
        </NavLink>

        <NavLink to={"/all_modules/getting_started/installations/vs_code/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiary hover:bg-secondary">
            <div>
              <p>
                <span className="font-bold capitalize">2. Installations - </span> Getting your computer ready.
              </p>
            </div>
            <CheckMark props={{ marked: false }} />
          </div>
        </NavLink>

        <NavLink to={"/getting_started"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiaryDark">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/getting_started"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiaryDark">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

        <div className="flex justify-between w-full items my-10">
          <button className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light uppercase" onClick={goBack}>back</button>
        </div>

      </div>


    </section>
  )
}
