import PageTracker from "../../../../components/PageTracker"
import BreadCrumb from "../../../../components/BreadCrumb"
import Reference from "../../../../utils/Reference"
import gitBashInterface from "../../../../assets/images/gitbash_interface.png"
import { useState } from "react"
import BackAndNextButtons from "../../../../components/NextAndBackButtons"

export default function Git() {

  const lessonInfo = {
    Lesson_title: "Install Git",
    Lesson_Number: '1.2.4',
    nextLink: "/all_modules/getting_started/",
    backLink: "/all_modules/getting_started/installations/chrome/",
  }

  document.title = `Install Git | Getting Started | Lesson ${lessonInfo.Lesson_Number}`

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleImage = (img) => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <section className="style-module-section highlight">

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          {lessonInfo.Lesson_title} <PageTracker props={{ page: lessonInfo.Lesson_Number }} />
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          To start working with Git we need a terminal. If you are using MacOS you should have a terminal already. With windows we'll need to download Git Bash. Git as it's stated in the Git website <q className="italic">is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</q>
        </p>

        <p>
          Git helps us control our codebase versions. This can come in handy if we ever break our code. Then we can roll back to the older version on the code and start over. Sometimes when the <span className="">code broke</span>, it's easier to find where it happened when you can look at different versions of that code. We'll look more into Git and how to use it after <Reference props={{ word: "this", ref: "The Getting Started Module" }} /> module.
        </p>

        <p>
          Here is the link to <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/downloads" className="link">download GitBash</a>.</p>
        <p>
          After installation is complete launch git bash. It should look something like this:
        </p>
      </div>

      <div className={`flex justify-center primary-radius cursor-pointer`}>
        <img
          src={gitBashInterface}
          alt="VS Code Interface from Microsoft's website"
          className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
          onClick={() => toggleImage()}
        />
      </div>

      <BackAndNextButtons props={lessonInfo} />

    </section >
  )
}
