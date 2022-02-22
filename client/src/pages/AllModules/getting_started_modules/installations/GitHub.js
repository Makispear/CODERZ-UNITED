import { NavLink } from "react-router-dom"
import PageTracker from "../../../../components/PageTracker"
import InfoMessage from "../../../../components/InfoMessage"
import BreadCrumb from "../../../../components/BreadCrumb"
import { useMutation, useQuery } from "@apollo/client"
import { GET_COMPLETED_LESSONS } from "../../../../utils/queries"
import { MARK_COMPLETED_LESSON } from "../../../../utils/mutations"

export default function GitHub() {
  const Lesson_title = "Sign up to GitHub"
  const Lesson_Number = '1.2.2'
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
  document.title = `Join GitHub | Getting Started | Lesson ${Lesson_Number}`
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
          window.location.href = "/all_modules/getting_started/installations/chrome/";
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
        <p>
          Next is signing up to GitHub. GitHub is a website where we can store our code as we write it. It also helps in collaboration, version control, and much more. Why use GitHub if you can save your code on your computer? There are benefits when you store your code in a cloud instead of locally. As the name implies, it's the central hub where people save code, transfer code, and collaborate.
        </p>

        <h3 className="font-bold">
          There are many benefits to using GitHub:
        </h3>
        <ol>
          <li>
            <p>
              1. Storing your code on your local machine can be risky. If your computer gets damaged before exporting your progress, you might have to repeat what you did. The effects multiple with the amount of code you write.
            </p>
          </li>
          <li>
            <p>
              2. It's easier to transfer and share code. Instead of exporting your code to a hard disk or a memory card, we can upload our progress to GitHub, and every team member can download it down to their local computer.
            </p>
          </li>
        </ol>

        <InfoMessage props={{ name: "Info", note: 'In web development, we often say pull instead of download and push instead of upload. Therefore "push your code" means "upload your code to GitHub"' }} />

        <p>
          <a className="link" href="https://github.com/join">Link to GitHub signup page</a>
        </p>

        <p>
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@
        </p>
      </div>

      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

        <NavLink to="/all_modules/getting_started/installations/vs_code/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

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
