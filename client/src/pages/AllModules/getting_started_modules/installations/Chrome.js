import { useMutation, useQuery } from "@apollo/client"
import { NavLink } from "react-router-dom"
import BreadCrumb from "../../../../components/BreadCrumb"
import InfoMessage from "../../../../components/InfoMessage"
import PageTracker from "../../../../components/PageTracker"
import { MARK_COMPLETED_LESSON } from "../../../../utils/mutations"
import { GET_COMPLETED_LESSONS } from "../../../../utils/queries"

export default function Chrome() {
  const Lesson_title = "Install Google Chrome"
  const Lesson_Number = "1.2.3"
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
  document.title = `Install Google Chrome | Getting Started | Lesson ${Lesson_Number}`
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
    <section className="style-module-section">

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          {Lesson_title}
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>Since we are web developers, we'll need a web browser to work. The most popular web browser is Google Chrome. Luckily since you are already reading these sentences on a web browser, there's a 66% chance you're reading this on Google chrome. If that's the case, feel free and mark this lesson complete to continue to the next one.</p>

        <InfoMessage props={{
          name: "Notice",
          note: "It is okay if you want to use other web browsers. Since most of your potential visitors will be on Chrome, it's best to test how our code works with it."
        }} />

        <p>Here is the link to <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="link">download Google Chrome</a>.
        </p>
      </div>

      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

        <NavLink to="/all_modules/getting_started/installations/github/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

        {showMarkCompleteButton && showButton &&
          <div className='flex'>
            <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider" onClick={completeLesson}>Complete &amp; next </button>
          </div>
        }
        {!showMarkCompleteButton && showButton &&
          <NavLink to="/all_modules/getting_started/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
        }

      </div>
    </section>
  )
}
