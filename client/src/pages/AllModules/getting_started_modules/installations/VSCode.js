import { NavLink } from "react-router-dom"
import BreadCrumb from "../../../../components/BreadCrumb"
import PageTracker from "../../../../components/PageTracker"
import { goBack } from "../../../../utils/previousPage"

export default function VSCode() {

  document.title = 'Install VS Code | Getting Started'

  return (
    <section className="style-module-section">

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
          code editor owned by Microsoft and is one of the best if not the best Code Editors web developers use. It's also free and has a ton of great features. Let's go ahead and download it now. Here is the link to the  <a className="link" href="https://code.visualstudio.com/download">download VS Code</a>.
        </p>

        <p>
          What the video belong on how to install VS Code
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
        <button className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize" onClick={goBack}>&lt;&lt; Back</button>
        <NavLink to="/all_modules/getting_started/installations/github/" className="bg-black font-bold text-white button-style border-2 border-secondary hover:border-black capitalize tracking-wider">next &gt;&gt;</NavLink>
      </div>

    </section >
  )
}
