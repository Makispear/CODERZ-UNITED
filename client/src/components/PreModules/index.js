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
        <p className="w-full sm:w-600 text-center md:w-700 lg:w-900 bg-black gap-4">
          <span className="text-tertiary">Congratulations on taking the bold first step!</span> This section will get you prepared to start coding like a pro. We want to make sure you have all the tools you'll need from the start.
        </p>
      </div>




      <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(1/4) completed</p>
      </div>

      {/* Modules  */}
      <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"}>
          <div className="flex justify-between items-center p-5 primary-radius border-2 bg-secondary hover:border-white hover:bg-white">
            <div>
              <p>
                <span className="font-bold capitalize">1. Frequently asked Questions - </span> Is this course for you?
              </p>
            </div>
            <CheckMark props={{ marked: true }} />
          </div>
        </NavLink>

        <NavLink to={"/all_modules/getting_started/installations/vs_code/"}>
          <div className="flex justify-between items-center p-5 primary-radius border-2 bg-secondary hover:border-white hover:bg-white">
            <div>
              <p>
                <span className="font-bold capitalize">2. Installations - </span> Getting your computer ready.
              </p>
            </div>
            <CheckMark props={{ marked: false }} />
          </div>
        </NavLink>

        <NavLink to={"#"} className="locked">
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-darkGray bg-darkGray opacity-50">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"#"} className="locked">
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-darkGray bg-darkGray opacity-50">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

        <div className="flex justify-between w-full items my-10">
          <button className="bg-transparent text-secondary button-style border border-tertiary hover font-light uppercase" onClick={goBack}>back</button>
        </div>

      </div>


    </section>
  )
}
