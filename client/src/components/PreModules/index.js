import { NavLink } from "react-router-dom";
import CheckMark from "../CheckMark";
import { goBack } from "../../utils/previousPage";
import BreadCrumb from "../BreadCrumb";
import { menuExpander } from "../../utils/menuExpander";

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

        {/* <div>
          <div className="flex justify-between items-center p-5 primary-radius border-2 bg-secondary hover:border-white hover:bg-white">
            <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"}>
              <div>
                <p>
                  <span className="font-bold capitalize">1. Frequently asked Questions - </span> Is this course for you?
                </p>
              </div>
              <CheckMark props={{ marked: true }} />
            </NavLink>
          </div>
          <div className="installation-lessons hidden">
            <NavLink to={"/all_modules/getting_started/installations/vs_code/"} className="flex gap-3 items-center ml-5 p-1 primary-radius bg-secondary text-black hover:bg-white" >
              <CheckMark props={{ marked: true }} /> Install VS Code
            </NavLink>
            <NavLink to={"/all_modules/getting_started/installations/github/"} className="flex gap-3 items-center ml-5 p-1 primary-radius bg-secondary text-black hover:bg-white" >
              <CheckMark props={{ marked: false }} /> Sign up to GitHub
            </NavLink>
          </div>
        </div> */}

        <div className="flex flex-col cursor-pointer select-none" onClick={() => menuExpander(".faq-lessons", ".faq-lessons-expander", "1")}>
          <div>
            <div>
              <div className="flex justify-between items-center p-3 primary-radius border-x-2 bg-secondary">
                <div>
                  <p>
                    <span className="font-bold capitalize">1. Frequently asked Questions - </span> Is this course for you?
                  </p>
                </div>
                <CheckMark props={{ marked: true }} />
              </div>
            </div>

            <button className="bg-secondary primary-radius flex px-2 faq-lessons-expander w-full border-b-2 border-black">
              ➤ View 1 lessons
            </button>
          </div>

          <div className="faq-lessons hidden">
            <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"} className="flex gap-3 items-center ml-5 p-1 primary-radius bg-secondary text-black hover:bg-white" >
              <CheckMark props={{ marked: true }} /> Intro To Web Development
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer select-none" onClick={() => menuExpander(".installation-lessons", ".installation-lessons-expander", "2")}>
          <div>
            <div>
              <div className="flex justify-between items-center p-3 primary-radius border-x-2 bg-secondary">
                <div>
                  <p>
                    <span className="font-bold capitalize">2. Installations - </span> Getting your computer ready.
                  </p>
                </div>
                <CheckMark props={{ marked: false }} />
              </div>
            </div>

            <button className="bg-secondary primary-radius flex px-2 installation-lessons-expander w-full border-b-2 border-black">
              ➤ View 2 lessons
            </button>
          </div>

          <div className="installation-lessons hidden">
            <NavLink to={"/all_modules/getting_started/installations/vs_code/"} className="flex gap-3 items-center ml-5 p-1 primary-radius bg-secondary text-black hover:bg-white" >
              <CheckMark props={{ marked: true }} /> Install VS Code
            </NavLink>
            <NavLink to={"/all_modules/getting_started/installations/github/"} className="flex gap-3 items-center ml-5 p-1 primary-radius bg-secondary text-black hover:bg-white" >
              <CheckMark props={{ marked: false }} /> Sign up to GitHub
            </NavLink>
          </div>
        </div>


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


    </section >
  )
}
