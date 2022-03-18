import BreadCrumb from "../../../../components/BreadCrumb"
import InfoMessage from "../../../../components/InfoMessage"
import BackAndNextButtons from "../../../../components/NextAndBackButtons"
import PageTracker from "../../../../components/PageTracker"

export default function Chrome() {

  const lessonInfo = {
    Lesson_title: "Install Google Chrome",
    Lesson_Number: "1.2.3",
    nextLink: "/all_modules/getting_started/installations/git/",
    backLink: "/all_modules/getting_started/installations/github/",
    nextPage: 'Install Git 1.2.4',
    previousPage: 'Sign up to GitHub 1.2.2'
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
        <p>Since we are web developers, we'll need a web browser to work. The most popular web browser is Google Chrome. Luckily since you are already reading these sentences on a web browser, there's a 66% chance you're reading this on Google chrome. If that's the case, feel free and mark this lesson complete to continue to the next one.</p>

        <InfoMessage props={{
          name: "Notice",
          note: "It is okay if you want to use other web browsers. Since most of your potential visitors will be on Chrome, it's best to test how your code works with it."
        }} />

        <p>Here is the link to <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="link">download Google Chrome</a>.
        </p>
      </div>

      <BackAndNextButtons props={lessonInfo} />
    </section>
  )
}
