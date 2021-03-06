import { useQuery } from "@apollo/client"
import { NavLink } from "react-router-dom"
import BreadCrumb from "../../../components/BreadCrumb"
import CheckMark from "../../../components/CheckMark"
import { BrandName } from "../../../utils/BrandName"
import { markComplete } from "../../../utils/markComplete"
import { menuExpander } from "../../../utils/menuExpander"
import { GET_COMPLETED_LESSONS } from "../../../utils/queries"


export default function GettingStarted() {
  document.title = `Getting Started | ${BrandName}`

  const lessonsArr = [
    {
      lessonName: 'FAQ',
      isCompleted: false,
      isLocked: false,
      section: 'Intro To Web Development',
      nextPage: 'Install VS Code',
      previousPage: "back to lessons"
    },
    {
      lessonName: 'Install VS Code',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Sign up to GitHub',
      previousPage: 'FAQ'
    },
    {
      lessonName: 'Sign up to GitHub',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Install Google Chrome',
      previousPage: 'Install VS Code'
    },
    {
      lessonName: 'Install Google Chrome',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Install Git',
      previousPage: 'Sign up to GitHub'
    },
    {
      lessonName: 'Install Git',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: "",
      previousPage: 'Install Google Chrome'
    }
  ]
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const myData = data?.getCompletedLessons.completedLessons || null

  markComplete(myData, lessonsArr)



  return (
    <main>
      <section className="style-page-section">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'secondary' }} />
        </div>
        <div className="flex flex-col items-center">
          <h1>
            Getting Started
          </h1>
          {/* Welcoming message  */}
          {lessonsArr[1].isLocked ?
            <p className="w-full sm:w-600 text-secondary text-center md:w-700 lg:w-900 bg-black gap-4">
              <span className="font-bold text-white">Congratulations</span> on taking the bold first step! This section will get you prepared to start coding like a pro. We want to make sure you have all the tools you'll need from the start.
            </p>
            :
            lessonsArr.filter(lesson => lesson.isCompleted).length !== lessonsArr.length ?
              <p className="w-full sm:w-600 text-secondary text-center md:w-700 lg:w-900 bg-black gap-4">
                Once your computer is set up, we'll start coding.
              </p>
              :
              <p className="w-full sm:w-600 text-secondary text-center md:w-700 lg:w-900 bg-black gap-4">
                Yaaay!! ({lessonsArr.length}/{lessonsArr.length}). You have finished this module.
              </p>
          }
        </div>

        <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
          <p className="text-sm">({lessonsArr.filter(lesson => lesson.isCompleted).length}/{lessonsArr.length}) completed</p>
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
                      <span className="faq-lessons-expander">???</span> Intro To Web Development
                    </button>
                  </div>
                  {lessonsArr.filter(lesson => lesson.section === 'Intro To Web Development').length === lessonsArr.filter(lesson => lesson.isCompleted === true && lesson.section === "Intro To Web Development").length ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
                </div>
              </div>

            </div>
          </div>
          <div className="faq-lessons hidden border-t-2 border-black mb-10 pl-1">
            <NavLink to={"/all_modules/getting_started/frequently_asked_questions/"} className="flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white" >
              <div className="mr-1 scale-75 brightness-100">
                <CheckMark props={{ marked: lessonsArr[0].isCompleted }} />
              </div>
              {lessonsArr[0].lessonName}
            </NavLink>
          </div>
          {/* Installations  */}
          <div className="flex flex-col cursor-pointer select-none mt-5" onClick={() => menuExpander(".installation-lessons", ".installation-lessons-expander")}>
            <div>
              <div>
                <div className="flex justify-between items-center py-5 px-2 primary-radius border-x-2 bg-secondary hover:bg-white">
                  <div>
                    <button className="font-bold capitalize">
                      <span className="installation-lessons-expander">???</span> Installations
                    </button>
                  </div>
                  {lessonsArr.filter(lesson => lesson.section === 'Installations').length === lessonsArr.filter(lesson => lesson.isCompleted === true && lesson.section === "Installations").length ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
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
            <NavLink to={`${lessonsArr[4].isLocked ? "#" : "/all_modules/getting_started/installations/git/"}`}
              className={`
                ${lessonsArr[4].isLocked ?
                  "locked flex justify-start py-3 pl-10 primary-radius bg-darkGray brightness-75"
                  :
                  "flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white"}
                `} >
              <div className="mr-1 scale-75 brightness-100">
                {lessonsArr[4].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
              </div>
              {lessonsArr[4].lessonName}
            </NavLink>
          </div>


          <div className="flex justify-between w-full items my-10">
            <NavLink to="/all_modules/" className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">&lt;&lt; Back</NavLink>
            {lessonsArr.filter(lesson => lesson.isCompleted).length !== lessonsArr.length ?
              <NavLink title="complete all lessons to unlock" to="#" className="bg-darkGray cursor-not-allowed text-black button-style font-light capitalize"> Next &gt;&gt;</NavLink>
              :
              <NavLink to="/all_modules/course_modules/" className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">Next &gt;&gt;</NavLink>
            }
          </div>

        </div>


      </section >
    </main>
  )
}

