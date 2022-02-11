import { NavLink } from "react-router-dom";
import CheckMark from "../CheckMark";
import BreadCrumb from "../BreadCrumb";
import { menuExpander } from "../../utils/menuExpander";
import { useQuery } from "@apollo/client";
import { GET_COMPLETED_LESSONS } from "../../utils/queries";
import { markComplete } from "../../utils/markComplete";

export default function PreModules() {
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const myData = data?.getCompletedLessons.completedLessons || null

  const lessonsArr = [
    {
      lessonName: 'Frequently Asked Questions',
      isCompleted: false,
      isLocked: false
    },
    {
      lessonName: 'Install VS Code',
      isCompleted: false,
      isLocked: true
    },
    {
      lessonName: 'Sign up to GitHub',
      isCompleted: false,
      isLocked: true
    },
    {
      lessonName: 'Install Google Chrome',
      isCompleted: false,
      isLocked: true
    }
  ]

  markComplete(myData, lessonsArr)


  return (
    <section className="style-page-section">
      <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
        <BreadCrumb props={{ color: 'secondary' }} />
      </div>
      <div className="flex flex-col items-center">
        <h1>
          Getting Started
        </h1>
        <p className="w-full sm:w-600 text-secondary text-center md:w-700 lg:w-900 bg-black gap-4">
          <span className="font-bold text-white">Congratulations</span> on taking the bold first step! This section will get you prepared to start coding like a pro. We want to make sure you have all the tools you'll need from the start.
        </p>
      </div>

      <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(1/4) completed</p>
      </div>

      {/* Modules  */}
      <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black text-black">
        {/* FAQ  */}
        <div className="flex flex-col cursor-pointer select-none mt-5" onClick={() => menuExpander(".faq-lessons", ".faq-lessons-expander")}>
          <div>
            <div>
              <div className="flex justify-between items-center py-5 px-2 primary-radius border-x-2 bg-secondary hover:bg-white">
                <div>
                  <button className="font-bold capitalize">
                    <span className="faq-lessons-expander">➤</span> Frequently asked Questions
                  </button>
                </div>
                {lessonsArr[0].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
              </div>
            </div>

          </div>
        </div>
        <div className="faq-lessons hidden border-t-2 border-black mb-10 pl-1">
          <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"} className="flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white" >
            <div className="mr-1 scale-75 brightness-100">
              <CheckMark props={{ marked: lessonsArr[0].isCompleted }} />
            </div>
            Intro To Web Development
          </NavLink>
        </div>
        {/* Installations  */}
        <div className="flex flex-col cursor-pointer select-none mt-5" onClick={() => menuExpander(".installation-lessons", ".installation-lessons-expander")}>
          <div>
            <div>
              <div className="flex justify-between items-center py-5 px-2 primary-radius border-x-2 bg-secondary hover:bg-white">
                <div>
                  <button className="font-bold capitalize">
                    <span className="installation-lessons-expander">➤</span> Installations
                  </button>
                </div>
                {lessonsArr[1].isCompleted && lessonsArr[2].isCompleted && lessonsArr[3].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
              </div>
            </div>

          </div>

        </div>
        <div className="installation-lessons hidden border-t-2 border-black mb-10 pl-1">
          <NavLink to={`${lessonsArr[1].isLocked ? "#" : "/all_modules/getting_started/installations/vs_code/"}`}
            className={`
                ${lessonsArr[1].isLocked ?
                "locked flex justify-start py-3 pl-10 primary-radius bg-darkGray brightness-75"
                :
                "flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white"}
                `} >
            <div className="mr-1 scale-75 brightness-100">
              {lessonsArr[1].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
            </div>
            {lessonsArr[1].lessonName}
          </NavLink>
          <NavLink to={`${lessonsArr[2].isLocked ? "#" : "/all_modules/getting_started/installations/github/"}`}
            className={`
                ${lessonsArr[2].isLocked ?
                "locked flex justify-start py-3 pl-10 primary-radius bg-darkGray brightness-75"
                :
                "flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white"}
                `} >
            <div className="mr-1 scale-75 brightness-100">
              {lessonsArr[2].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
            </div>
            {lessonsArr[2].lessonName}
          </NavLink>


          <NavLink to={`${lessonsArr[3].isLocked ? "#" : "/all_modules/getting_started/installations/chrome/"}`}
            className={`
                ${lessonsArr[3].isLocked ?
                "locked flex justify-start py-3 pl-10 primary-radius bg-darkGray brightness-75"
                :
                "flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white"}
                `} >
            <div className="mr-1 scale-75 brightness-100">
              {lessonsArr[3].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
            </div>
            {lessonsArr[3].lessonName}
          </NavLink>
        </div>


        <div className="flex justify-between w-full items my-10">
          <NavLink to="/all_modules/" className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">&lt;&lt; Back</NavLink>
        </div>

      </div>


    </section >
  )
}
