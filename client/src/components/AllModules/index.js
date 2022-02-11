import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {markComplete} from "../../utils/markComplete";
import { GET_COMPLETED_LESSONS } from "../../utils/queries";
import CheckMark from "../CheckMark";

export default function AllModules() {

  const motivationalSayings = [
    "Lets make this your best investment in your coding journey.. together!",
    "Can't wait to see you at the end of the tunnel!",
    "Sleep. Eat, Code... Repeat.",
    "Lets start coding!",
    "Nice seeing you! Now lets get it done!",
    "In unity we trust!",
    "Anything is possible when we are united!",
    "Two heads are better than one. Three heads are better than two. How about every coder united?!",
    "On your marks! Git commit.. PUSH!!"
  ]

  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const myData = data?.getCompletedLessons.completedLessons || null

  const lessonsArr = [
    {
      lessonName: 'FAQ',
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

  useEffect(() => {
    document.title = "Welcome - All Modules"
  }, [])


  return (
    <section className="style-page-section">

      <div className="flex flex-col items-center mt-5">
        <h1>
          All Modules
        </h1>
        <p className="text-center text-secondary">
          {motivationalSayings[Math.floor(Math.random() * motivationalSayings.length)]}
        </p>
      </div>


      {/* Modules  */}
      <div className="w-full mt-10 flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/all_modules/getting_started/"}>
        <div>
            <div>
              <div className="flex justify-between items-center p-5 primary-radius border-2 text-black bg-secondary hover:bg-white">
                <div>
                  <p className="font-bold capitalize">
                    1. Getting Started
                  </p>
                </div>
                {lessonsArr[0].isCompleted && lessonsArr[1].isCompleted && lessonsArr[2].isCompleted && lessonsArr[3].isCompleted  ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
              </div>
            </div>

          </div>
        </NavLink>

        <NavLink to={"/all_modules/course_modules/"}>
          <div className="flex justify-between items-center p-5 primary-radius border-2 text-black bg-secondary hover:bg-white">
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
              <p className="text-black">
                <span className="font-bold capitalize">1 . Getting started - </span>Pre work
              </p>
            </div>
          </div>
        </NavLink>


      </div>


    </section >
  )
}
