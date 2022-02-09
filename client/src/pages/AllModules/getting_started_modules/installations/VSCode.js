import { useMutation, useQuery } from "@apollo/client"
import { NavLink } from "react-router-dom"
import BreadCrumb from "../../../../components/BreadCrumb"
import PageTracker from "../../../../components/PageTracker"
import { MARK_COMPLETED_LESSON } from "../../../../utils/mutations"
import { GET_COMPLETED_LESSONS } from "../../../../utils/queries"

export default function VSCode() {
  const Lesson_title = "Install VS Code"
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
  document.title = 'Install VS Code | Getting Started'
  let showMarkCompleteButton = false
  let showButton = false

  const myData = data?.getCompletedLessons.completedLessons || null

  const completeLesson = () => {
    try {
      markComplete({
        variables: {
          lessonName: Lesson_title,
          lessonNumber: '1.2.1'
        }
      }).then((result) => {
        if (result) {
          window.location.href = "/all_modules/getting_started/installations/github/";
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

      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>Installations <PageTracker props={{ page: "1.2.1" }} /></h1>
      </div>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          Install A Code Editor
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          As web developers, Coding is the bread and butter of our work. Therefore it's a good idea to have the best coding tools. We can write our code anywhere; a word document, a text file, or even a notepad. A better alternative is using a code editor. A code editor is a text editor used for writing code. Code editors have many features like color-coding to help us visualize our code better and offer us many extensions to help us be efficient. We will look into the features code editors provide us later in the course.
        </p>
        <p>
          Let's download Visual Studio Code (also known as VS Code). VS Code is a
          code editor owned by Microsoft and is one of the best if not the best Code Editors web developers use. It's also free and has a ton of great features. Let's go ahead and download it now. Here is the link to the <a className="link" target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/download">download VS Code</a>.
        </p>

        <p>
          What the video below on how to download and install VS Code
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

        <NavLink to="/all_modules/getting_started/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

        {showMarkCompleteButton && showButton &&
          <div className='flex'>
            <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider" onClick={completeLesson}>Complete &amp; next </button>
          </div>
        }
        {!showMarkCompleteButton && showButton &&
          <NavLink to="/all_modules/getting_started//all_modules/getting_started/installations/github/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
        }

      </div>

    </section >
  )
}
