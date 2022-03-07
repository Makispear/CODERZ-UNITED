import PageTracker from "../../../../components/PageTracker"
import InfoMessage from "../../../../components/InfoMessage"
import BreadCrumb from "../../../../components/BreadCrumb"
import BackAndNextButtons from "../../../../components/NextAndBackButtons"

export default function GitHub() {

  const lessonInfo = {
    Lesson_title: "Sign up to GitHub",
    Lesson_Number: '1.2.2',
    nextLink: "/all_modules/getting_started/installations/chrome/",
    backLink: "/all_modules/getting_started/installations/vs_code/",
    nextPage: 'Install Google Chrome 1.2.3',
    previousPage: 'Install VS Code 1.2.1'
  }

  document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`


  return (
    <section className="style-module-section">

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

        <InfoMessage props={{ name: "Info", note: 'In web development, we often use "pull" rather than "download" and "push" instead of "upload"; Therefore, "push your code to" means "upload your code to"; And "pull from" means "download from";' }} />

        <p>
          Here is where you can <a className="link" href="https://github.com/join">sign up for GitHub</a>
        </p>

      </div>

      <BackAndNextButtons props={lessonInfo} />

    </section >
  )
}
