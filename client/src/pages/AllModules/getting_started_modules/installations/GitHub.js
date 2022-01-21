import { goBack } from "../../../../utils/previousPage"
import { NavLink } from "react-router-dom"
import PageTracker from "../../../../components/PageTracker"
import InfoMessage from "../../../../components/InfoMessage"
import BreadCrumb from "../../../../components/BreadCrumb"

export default function GitHub() {
  return (
    <section className="style-module-section">
      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>Installations <PageTracker props={{ page: '1.2.2' }} /></h1>
      </div>

      <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
        <BreadCrumb props={{ color: 'darkGray' }} />
      </div>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <h2>
          Sign up to GitHub
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

        <InfoMessage props={{ name: "Info", note: "In web development, we often say pull instead of download and push instead of upload." }} />

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
        <button className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light uppercase" onClick={goBack}>back</button>
        <NavLink to="/getting_started/installations/GitHub" className="bg-black font-bold text-white button-style border-2 border-secondary hover:border-black uppercase tracking-wider">next</NavLink>
      </div>

    </section >
  )
}
