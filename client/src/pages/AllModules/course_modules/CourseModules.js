import WelcomeUser from "../../../components/WelcomeUser";
import { goBack } from "../../../utils/previousPage";


export default function CourseModules() {

  document.title = "Learn Web Development | Coderz United"

  return (
    <main>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5 text-white">
        <h1>error 404: Page not found</h1>
        <h2>This page will be available in future updates!</h2>
        <button className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize" onClick={goBack}>&lt;&lt; back</button>
      </div>
    </main>
  )
}

