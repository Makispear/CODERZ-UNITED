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

        <div className="flex flex-col cursor-pointer select-none" onClick={() => menuExpander(".faq-lessons", ".faq-lessons-expander")}>
          <div>
            <div>
              <div className="flex justify-between items-center p-3 primary-radius border-x-2 bg-secondary">
                <div>
                  <button className="font-bold capitalize">
                    <span className="faq-lessons-expander">➤</span> Frequently asked Questions
                  </button>
                </div>
                <CheckMark props={{ marked: true }} />
              </div>
            </div>

          </div>

          <div className="faq-lessons hidden">
            <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"} className="flex px-3 m-2 justify-start p-3 primary-radius bg-secondary text-black hover:bg-white" >
              <div className="mr-1 scale-50">
                <CheckMark props={{ marked: true }} />
              </div>
              Intro To Web Development
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer select-none" onClick={() => menuExpander(".installation-lessons", ".installation-lessons-expander")}>
          <div>
            <div>
              <div className="flex justify-between items-center p-3 primary-radius border-x-2 bg-secondary">
                <div>
                  <button className="font-bold capitalize">
                    <span className="installation-lessons-expander">➤</span> Installations
                  </button>
                </div>
                <CheckMark props={{ marked: false }} />
              </div>
            </div>

          </div>

          <div className="installation-lessons hidden">
            <NavLink to={"/all_modules/getting_started/installations/vs_code/"} className="flex px-3 m-2 justify-start p-3 primary-radius bg-secondary text-black hover:bg-white" >
              <div className="mr-1 scale-50">
                <CheckMark props={{ marked: true }} />
              </div>
              Install VS Code
            </NavLink>
            <NavLink to={"/all_modules/getting_started/installations/github/"} className="flex px-3 m-2 justify-start p-3 primary-radius bg-secondary text-black hover:bg-white" >
              <div className="mr-1 scale-50">
                <CheckMark props={{ marked: false }} />
              </div>
              Sign up to GitHub
            </NavLink>
          </div>
        </div>

        <NavLink to={"#"} className="locked" title="Completion of previous lessons are required to unlock this lesson.">
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-darkGray bg-darkGray opacity-50">
            <div>
              <button className="font-bold capitalize">
                <span>Locked</span>
              </button>
            </div>
          </div>
        </NavLink>

        <NavLink to={"#"} className="locked" title="Completion of previous lessons are required to unlock this lesson.">
          <div className="flex justify-between items-center p-5 primary-radius border-2 border-darkGray bg-darkGray opacity-50">
            <div>
              <button className="font-bold capitalize">
                <span>Locked</span>
              </button>
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
