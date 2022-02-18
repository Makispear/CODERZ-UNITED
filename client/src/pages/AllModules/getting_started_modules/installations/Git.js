import { NavLink } from "react-router-dom"
import PageTracker from "../../../../components/PageTracker"
import BreadCrumb from "../../../../components/BreadCrumb"
import { useMutation, useQuery } from "@apollo/client"
import { GET_COMPLETED_LESSONS } from "../../../../utils/queries"
import { MARK_COMPLETED_LESSON } from "../../../../utils/mutations"
import Reference from "../../../../utils/Reference"

export default function Git() {
  const Lesson_title = "Install Git"
  const Lesson_Number = '1.2.4'
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
  document.title = `Install Git | Getting Started' | Lesson ${Lesson_Number}`
  let showMarkCompleteButton = false
  let showButton = false

  const myData = data?.getCompletedLessons.completedLessons || null

  const completeLesson = () => {
    try {
      markComplete({
        variables: {
          lessonName: Lesson_title.trim(),
          lessonNumber: Lesson_Number.trim()
        }
      }).then((result) => {
        if (result) {
          window.location.href = "/all_modules/getting_started/";
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  if (error) {
    alert(error.message)
  }

  if (myData) {
    let isFound = false;

    for (let i = 0; i < myData.length; i++) {
      if (myData[i].lessonName === Lesson_title) {
        isFound = true
        break
      }
    }

    if (isFound) {
      showButton = true;
      showMarkCompleteButton = false
    } else {
      showButton = true;
      showMarkCompleteButton = true
    }

  }

  return (
    <section className="style-module-section highlight">

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          {Lesson_title} <PageTracker props={{ page: Lesson_Number }} />
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>To start working with Git we need a terminal. If you are using MacOS you should have a terminal already. With windows we'll need to download Git Bash. Git as it's stated in the Git website <q className="font-bold">is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</q></p>

        <p>Git helps us control our codebase versions. This can come in handy if we ever break our code. Then we can roll back to the older version on the code and start over. Sometimes when the <span className="">code broke</span>, it's easier to find where it happened when you can look at different versions of that code. We'll look more into Git and how to use it after <Reference props={{ word: "this", ref: "The Getting Started Module" }} /> module.</p>

      </div>

      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

        <NavLink to="/all_modules/getting_started/installations/chrome/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

        {showMarkCompleteButton && showButton &&
          <div className='flex'>
            <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider" onClick={completeLesson}>Complete &amp; next </button>
          </div>
        }
        {!showMarkCompleteButton && showButton &&
          <NavLink to="/all_modules/getting_started/installations/chrome/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
        }
      </div>

    </section >
  )
}
